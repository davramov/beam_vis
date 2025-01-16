/********************************************************
 * ThreeScene.tsx
 *
 ********************************************************/
import React, {
    useEffect,
    useRef,
    useState,
    CSSProperties,
    useCallback,
    useMemo,
  } from 'react';
  import * as THREE from 'three';
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
  import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
  import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
  
  // Import your custom hook from PlayContext
  import { usePlay } from './PlayContext';
  
  /** Basic interface describing a beamline config item. */
  interface ComponentConfig {
    id: string;
    type: 'beam' | 'stage' | 'detector' | 'sample' | 'beamStop' | 'motor';
    parentId?: string;
    transform: {
      position: [number, number, number];
      rotation: [number, number, number];
      scale?: [number, number, number];
    };
    geometry?: {
      radius?: number;
      height?: number;
      width?: number;
      depth?: number;
    };
    beamModes?: ('cylinder' | 'photonStream')[];
    visible?: boolean;
    meshType?: 'cube' | 'cylinder' | 'fbx';
    meshUrl?: string;
    shutterOpen?: boolean;
    beamPower?: number;
    beamMono?: 'Xtal' | 'Multilayer' | 'WhiteLight';
  }
  
  /********************************************************
   * A color map for the beam, based on monochromator setting
   ********************************************************/
  const beamColorMap: Record<NonNullable<ComponentConfig['beamMono']>, string> = {
    Xtal: '#BF83FC',       // Pink
    Multilayer: '#00FF7F', // Green
    WhiteLight: '#ffffff', // White
  };
  
  /********************************************************
   * Our initial beamline config
   *  - Includes an extra "centeringMotor" between the stage and the sample
   ********************************************************/
  const beamlineConfig: ComponentConfig[] = [
    {
      id: 'beam',
      type: 'beam',
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      geometry: { radius: 0.05, height: 8 },
      beamModes: ['cylinder'],
      visible: true,
      beamPower: 25,
      beamMono: 'Xtal', // Default to "Xtal"
    },
    {
      id: 'stage',
      type: 'stage',
      transform: { position: [0, -0.6, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      geometry: { radius: 0.4, height: 1 },
      visible: true,
    },
    {
      id: 'centeringMotor', // An intermediate motor
      type: 'motor',
      parentId: 'stage',
      transform: { position: [0, 0.6, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      visible: true,
    },
    {
      id: 'sample',
      type: 'sample',
      parentId: 'centeringMotor',
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      geometry: { radius: 0.2, height: 0.4 },
      visible: true,
      meshType: 'cube',
    },
    {
      id: 'detector',
      type: 'detector',
      transform: {
        position: [4, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        scale: [1, 1, 1],
      },
      geometry: { width: 1, height: 1, depth: 0.2 },
      visible: true,
    },
    {
      id: 'beamStop',
      type: 'beamStop',
      parentId: 'beam',
      transform: { position: [-2, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      visible: true,
      shutterOpen: false,
    },
  ];
  
  /********************************************************
   * Optional textures for a custom stage
   ********************************************************/
  const createRadialTexture = (size = 256): THREE.Texture => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('No 2D context for radial texture.');
  
    ctx.fillStyle = '#5FA6FA';
    ctx.fillRect(0, 0, size, size);
  
    ctx.strokeStyle = '#3B83F6';
    ctx.lineWidth = 2;
    const linesCount = 16;
    const center = size / 2;
    for (let i = 0; i < linesCount; i++) {
      const angle = (2 * Math.PI * i) / linesCount;
      const x = center + center * Math.cos(angle);
      const y = center + center * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  };
  
  const createVerticalStripesTexture = (size = 256): THREE.Texture => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('No 2D context for vertical stripes.');
  
    ctx.fillStyle = '#5FA6FA';
    ctx.fillRect(0, 0, size, size);
  
    ctx.fillStyle = '#3B83F6';
    const stripesCount = 8;
    const stripeWidth = size / (stripesCount * 2);
    for (let i = 0; i < stripesCount; i++) {
      const x = i * (stripeWidth * 2);
      ctx.fillRect(x, 0, stripeWidth, size);
    }
  
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  };
  
  // Memoize textures outside the component
  const topTexture = createRadialTexture();
  const sideTexture = createVerticalStripesTexture();
  
  /** Build a custom stage: open cylinder + top and bottom circles */
  const createCustomStage = (
    radius: number,
    height: number,
    topTexture: THREE.Texture,
    sideTexture: THREE.Texture
  ): THREE.Object3D => {
    const stageGroup = new THREE.Object3D();
  
    // Cylinder sides only
    const sideGeom = new THREE.CylinderGeometry(radius, radius, height, 32, 1, true);
    const sideMat = new THREE.MeshPhongMaterial({ map: sideTexture });
    const sideMesh = new THREE.Mesh(sideGeom, sideMat);
    sideMesh.castShadow = true;
    sideMesh.receiveShadow = true;
    stageGroup.add(sideMesh);
  
    // Top circle
    const topGeom = new THREE.CircleGeometry(radius, 32);
    const topMat = new THREE.MeshPhongMaterial({ map: topTexture });
    const topMesh = new THREE.Mesh(topGeom, topMat);
    topMesh.rotation.x = -Math.PI / 2;
    topMesh.position.y = height / 2;
    topMesh.castShadow = true;
    topMesh.receiveShadow = true;
    stageGroup.add(topMesh);
  
    // Bottom circle
    const bottomGeom = new THREE.CircleGeometry(radius, 32);
    const bottomMat = new THREE.MeshPhongMaterial({ map: topTexture });
    const bottomMesh = new THREE.Mesh(bottomGeom, bottomMat);
    bottomMesh.rotation.x = Math.PI / 2;
    bottomMesh.position.y = -height / 2;
    bottomMesh.castShadow = true;
    bottomMesh.receiveShadow = true;
    stageGroup.add(bottomMesh);
  
    return stageGroup;
  };
  
  /** Build a beam stop shaped like the detector, pivot at left edge */
  const createBeamStop = (
    width: number,
    height: number,
    depth: number,
    color: string,
    shutterOpen: boolean
  ): THREE.Object3D => {
    const pivot = new THREE.Object3D();
    pivot.position.set(0, 0, 0); // Adjust based on your scene's requirements
  
    const geometry = new THREE.BoxGeometry(width, height, depth);
    geometry.translate(-width*2, 0, 0); // Shift geometry to align left edge with pivot
  
    const material = new THREE.MeshPhongMaterial({
      color,
      transparent: true,
      opacity: shutterOpen ? 0.5 : 1,
    });
  
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  
    // Name the mesh for easy reference
    mesh.name = 'beamStop-shutter';
  
    // Add the mesh to the pivot
    pivot.add(mesh);
  
    // Optionally, add an AxesHelper for debugging (remove in production)
    // const axesHelper = new THREE.AxesHelper(0.5);
    // pivot.add(axesHelper);
  
    return pivot;
  };
    
  /********************************************************
   * ThreeScene Component
   ********************************************************/
  const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene>();
    const mainCameraRef = useRef<THREE.OrthographicCamera>();
    const xRayCameraRef = useRef<THREE.OrthographicCamera>();
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const composerRef = useRef<EffectComposer>();
  
    const requestRef = useRef<number>(0);
    
    const beamstopShutterRef = useRef<THREE.Mesh | null>(null);

    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const mouse = useMemo(() => new THREE.Vector2(), []);

    

    // Render target for X-Ray camera
    const xRayRenderTargetRef = useRef<THREE.WebGLRenderTarget>();
  
    // Pull states from context
    const { isPlaying, playAngle, setIsPlaying, handleStageRotationChange } = usePlay();
  
    // Our local config array
    const [configs, setConfigs] = useState<ComponentConfig[]>(beamlineConfig);
  
    // References to objects we want to animate:
    const stageRef = useRef<THREE.Object3D | null>(null);
    const sampleRef = useRef<THREE.Object3D | null>(null);
  
    // Throttle timing for stage rotation sync
    const lastAngleSyncRef = useRef<number>(0);
  
    // Photon logic
    const maxPhotons = 500;
    const photonPoolRef = useRef<THREE.InstancedMesh | null>(null);
  
    interface Photon {
      position: THREE.Vector3;
      velocity: THREE.Vector3;
      active: boolean;
    }
  
    const photonsRef = useRef<Photon[]>(
      Array.from({ length: maxPhotons }, () => ({
        position: new THREE.Vector3(-4, 0, 0),
        velocity: new THREE.Vector3(1, 0, 0).multiplyScalar(0.05),
        active: false,
      }))
    );
  
    const lastPhotonEmitRef = useRef<number>(0);
  
    // Panel open/close
    const [panelOpen, setPanelOpen] = useState(true);
    const togglePanel = useCallback(() => setPanelOpen((prev) => !prev), []);
  
    // Map of existing scene objects
    const objectMapRef = useRef<Record<string, THREE.Object3D>>({});
  
    // Camera X slider
    const [cameraX, setCameraX] = useState(-10);
  
    // Motor sliders (for centeringMotor)
    const [motorX, setMotorX] = useState(0);
    const [motorY, setMotorY] = useState(0);
    const [motorZ, setMotorZ] = useState(0);

      const rotationRef = useRef({
    current: 0,        // Current rotation in radians
    target: 0,         // Target rotation in radians
    speed: 5,          // Interpolation speed factor
  });

  const beamScaleRef = useRef({
    current: 1,        // Current scale.x of the beam cylinder
    target: 1,         // Target scale.x of the beam cylinder
    speed: 5,          // Interpolation speed factor
  });

  
    /********************************************************
     * ONE-TIME Scene / Cameras / Renderer initialization
     * (Does NOT depend on cameraX anymore, to avoid re-init).
     ********************************************************/
    useEffect(() => {
      if (!containerRef.current) return;
      const canvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;
      if (!canvas) {
        console.error("No <canvas id='three-canvas'> found!");
        return;
      }
  
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      const aspect = w / h;
      const viewSize = 3;
  
      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#f0f0f0');
      sceneRef.current = scene;
  
      // Main Orthographic camera
      const mainCamera = new THREE.OrthographicCamera(
        -viewSize * aspect,
        viewSize * aspect,
        viewSize,
        -viewSize,
        0.1,
        100
      );
      // We'll set the position below after creation
      mainCamera.position.set(cameraX, 10, 10);
      mainCamera.lookAt(0, 0, 0);
      mainCameraRef.current = mainCamera;
  
      // X-Ray Orthographic camera
      const xRayCamViewSize = 0.5;
      const xRayCamera = new THREE.OrthographicCamera(
        -xRayCamViewSize * aspect,
        xRayCamViewSize * aspect,
        xRayCamViewSize,
        -xRayCamViewSize,
        0.1,
        100
      );
      xRayCamera.position.set(-1, 0, 0);
      xRayCamera.lookAt(4, 0, 0);
      xRayCamera.layers.set(1);
      xRayCameraRef.current = xRayCamera;
  
      // Renderer
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;
  
      // Post-processing
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, mainCamera));
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 0.85);
      bloomPass.threshold = 0.25;
      bloomPass.strength = 0.3;
      bloomPass.radius = 0.03;
      composer.addPass(bloomPass);
      composerRef.current = composer;
  
      // X-Ray Render Target
      const xRayRenderTarget = new THREE.WebGLRenderTarget(256, 256);
      xRayRenderTargetRef.current = xRayRenderTarget;
  
      // Lights
      const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
      scene.add(ambientLight);
      const dirLight = new THREE.DirectionalLight('#ffffff', 0.8);
      dirLight.position.set(-5, 12, 12);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.camera.near = 0.5;
      dirLight.shadow.camera.far = 50;
      scene.add(dirLight);
  
      // Ground Plane
      const planeGeometry = new THREE.PlaneGeometry(20, 20);
      const planeMaterial = new THREE.MeshPhongMaterial({ color: '#64768D' });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -0.5;
      plane.receiveShadow = true;
      scene.add(plane);
  
      // Photon InstancedMesh
      const photonGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const instancedMesh = new THREE.InstancedMesh(geometries.sphere, materials.photon, maxPhotons);
      instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      scene.add(instancedMesh);
      photonPoolRef.current = instancedMesh;
        
      // Resize
      const handleResize = () => {
        if (!containerRef.current) return;
        const newW = containerRef.current.clientWidth;
        const newH = containerRef.current.clientHeight;
        const newAspect = newW / newH;
        mainCamera.left = -viewSize * newAspect;
        mainCamera.right = viewSize * newAspect;
        mainCamera.top = viewSize;
        mainCamera.bottom = -viewSize;
        mainCamera.updateProjectionMatrix();
  
        xRayCamera.left = -xRayCamViewSize * newAspect;
        xRayCamera.right = xRayCamViewSize * newAspect;
        xRayCamera.top = xRayCamViewSize;
        xRayCamera.bottom = -xRayCamViewSize;
        xRayCamera.updateProjectionMatrix();
  
        renderer.setSize(newW, newH);
        xRayRenderTarget.setSize(256, 256);
        composer.setSize(newW, newH);
      };
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        xRayRenderTarget.dispose();
        instancedMesh.geometry.dispose();
        instancedMesh.material.dispose();
      };
      // We do NOT include cameraX here, so we do not re-init on cameraX changes
    }, []);
  
    /********************************************************
     * Update main camera position whenever cameraX changes
     ********************************************************/
    useEffect(() => {
      if (mainCameraRef.current) {
        mainCameraRef.current.position.set(cameraX, 10, 10);
        // mainCameraRef.current.lookAt(0, 0, 0);
        mainCameraRef.current.updateProjectionMatrix();
      }
    }, [cameraX]);
  
    /********************************************************
     * Memoized geometries/materials
     ********************************************************/
    const geometries = useMemo(() => {
      return {
        cylinder: new THREE.CylinderGeometry(0.05, 0.05, 8, 16),
        box: new THREE.BoxGeometry(0.4, 0.4, 0.4),
        detector: new THREE.BoxGeometry(1, 1, 0.2),
        sphere: new THREE.SphereGeometry(0.05, 8, 8),
        customCylinder: new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16),
      };
    }, []);
  
    // We'll also store a reference to our photon material for color updates
    const [photonMaterialRef] = useState(
        () =>
          new THREE.MeshStandardMaterial({
            color: '#BF83FC',
            transparent: true,
            opacity: 0.8,
            emissive: '#BF83FC',
            emissiveIntensity: 1,
            depthWrite: true,
            blending: THREE.AdditiveBlending,
          })
      );
      
      const materials = useMemo(() => {
        return {
          beam: new THREE.MeshStandardMaterial({
            color: '#BF83FC',
            transparent: true,
            opacity: 0.6,
            emissive: '#BF83FC',
            emissiveIntensity: 1,
          }),
          sampleCube: new THREE.MeshPhongMaterial({ color: '#8c564b' }),
          sampleCylinder: new THREE.MeshPhongMaterial({ color: '#8c564b' }),
          detector: new THREE.MeshPhongMaterial({ color: '#1f77b4' }),
          beamStop: new THREE.MeshPhongMaterial({ color: '#DA2828', transparent: true, opacity: 1 }),
          photon: photonMaterialRef,
        };
      }, [photonMaterialRef]);
        
    /********************************************************
     * X-Ray Shader Material
     ********************************************************/
    const xRayMaterial = useMemo(() => {
      return new THREE.ShaderMaterial({
        uniforms: {
          xRayTexture: { value: null as unknown as THREE.Texture },
          shutterOpen: { value: 0.0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform sampler2D xRayTexture;
          uniform float shutterOpen;
          varying vec2 vUv;
          void main() {
            vec4 color = texture2D(xRayTexture, vUv);
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            gray = 1.0 - gray;
            vec3 finalColor = vec3(gray);
            finalColor = mix(vec3(0.0), finalColor, shutterOpen);
            gl_FragColor = vec4(finalColor, color.a);
          }
        `,
      });
    }, []);
  
    /********************************************************
     * Build/Update the scene from configs
     ********************************************************/
    useEffect(() => {
      const scene = sceneRef.current;
      if (!scene) return;
  
      const currentConfigIds = new Set(configs.map((cfg) => cfg.id));
  
      // Remove objects no longer in config or set invisible
      Object.keys(objectMapRef.current).forEach((id) => {
        const cfg = configs.find((c) => c.id === id);
        if (!cfg || !cfg.visible) {
          const obj = objectMapRef.current[id];
          if (obj.parent) {
            obj.parent.remove(obj);
          }
          obj.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
              if (Array.isArray(child.material)) {
                child.material.forEach((mat) => mat.dispose());
              } else {
                child.material.dispose();
              }
            }
          });
          delete objectMapRef.current[id];
        }
      });
  
      // Create or update
      configs.forEach((cfg) => {
        if (!cfg.visible) return;
  
        let obj = objectMapRef.current[cfg.id];
  
        if (!obj) {
          // Create new
          switch (cfg.type) {
            case 'beam': {
              const group = new THREE.Group();
              group.name = 'beamGroup';
              if (cfg.beamModes?.includes('cylinder')) {
                const geom = geometries.cylinder.clone();
                // Adjust radius/height from config
                geom.parameters.radiusTop = cfg.geometry?.radius ?? 0.05;
                geom.parameters.radiusBottom = cfg.geometry?.radius ?? 0.05;
                geom.parameters.height = cfg.geometry?.height ?? 8;
                geom.rotateZ(Math.PI / 2);
                const beamMesh = new THREE.Mesh(geom, materials.beam);
                beamMesh.name = 'beam-cylinder';
                group.add(beamMesh);
              }
              scene.add(group);
              obj = group;
              objectMapRef.current[cfg.id] = obj;
              break;
            }
            case 'stage': {
              const radius = cfg.geometry?.radius ?? 0.4;
              const height = cfg.geometry?.height ?? 1;
              const stageObj = createCustomStage(radius, height, topTexture, sideTexture);
              stageRef.current = stageObj;
              obj = stageObj;
              scene.add(stageObj);
              objectMapRef.current[cfg.id] = obj;
              break;
            }
            case 'motor': {
              // Just a group
              const motorGroup = new THREE.Group();
              obj = motorGroup;
              scene.add(obj);
              objectMapRef.current[cfg.id] = obj;
              break;
            }
            case 'sample': {
              if (cfg.meshType === 'cube') {
                obj = new THREE.Mesh(geometries.box, materials.sampleCube);
                obj.castShadow = true;
                obj.receiveShadow = true;
              } else if (cfg.meshType === 'cylinder') {
                obj = new THREE.Mesh(geometries.customCylinder, materials.sampleCylinder);
                obj.castShadow = true;
                obj.receiveShadow = true;
              } else if (cfg.meshType === 'fbx') {
                const fbxGroup = new THREE.Group();
                const loader = new FBXLoader();
                loader.load(
                  cfg.meshUrl || '/assets/bananas.fbx',
                  (fbx: any) => {
                    fbx.scale.set(0.02, 0.02, 0.02);
                    fbx.position.set(0, 0.3, -0.25);
                    fbx.traverse((child: any) => {
                      if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        child.layers.enable(1);
                        if (Array.isArray(child.material)) {
                          child.material = child.material.map((m) => (m instanceof THREE.Material ? m.clone() : m));
                        } else if (child.material instanceof THREE.Material) {
                          child.material = child.material.clone();
                        }
                      }
                    });
                    fbxGroup.add(fbx);
                  },
                  undefined,
                  (err: any) => console.error('Error loading FBX:', err)
                );
                obj = fbxGroup;
              }
              if (obj) {
                sampleRef.current = obj;
              }
              break;
            }
            case 'detector': {
              const w = cfg.geometry?.width ?? 1;
              const hh = cfg.geometry?.height ?? 1;
              const d = cfg.geometry?.depth ?? 0.2;
              const geom = new THREE.BoxGeometry(w, hh, d);
              const matArray = [
                materials.detector,
                materials.detector,
                materials.detector,
                materials.detector,
                materials.detector,
                xRayMaterial,
              ];
              const mesh = new THREE.Mesh(geom, matArray);
              mesh.name = 'detector';
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              obj = mesh;
              break;
            }
            case 'beamStop': {
                const pivot = createBeamStop(
                  cfg.geometry?.width ?? 0.2,
                  cfg.geometry?.height ?? 1,
                  cfg.geometry?.depth ?? 1,
                  '#DA2828',
                  cfg.shutterOpen ?? false
                );
                pivot.name = 'beamStop-pivot'; // Name the pivot for easy reference

                // Retrieve the shutter mesh and assign it to the ref
                const shutterMesh = pivot.getObjectByName('beamStop-shutter') as THREE.Mesh | null;
                if (shutterMesh) {
                    beamstopShutterRef.current = shutterMesh;
                }

                obj = pivot;
                break;
              }
                  default:
              break;
          }
  
          // Parent and transform
          if (obj) {
            if (cfg.type !== 'beam') {
              obj.position.fromArray(cfg.transform.position);
              obj.rotation.set(...cfg.transform.rotation);
              if (cfg.transform.scale) {
                obj.scale.fromArray(cfg.transform.scale);
              }
            }
  
            const parentObj = cfg.parentId ? objectMapRef.current[cfg.parentId] : null;
            if (parentObj) {
              parentObj.add(obj);
            } else {
              scene.add(obj);
            }
  
            if (cfg.type === 'sample' && obj) {
              obj.layers.enable(1);
              obj.traverse((child) => {
                if (child instanceof THREE.Mesh) child.layers.enable(1);
              });
            }
  
            objectMapRef.current[cfg.id] = obj;
          }
          } else {
              // Object exists; update its properties if needed
              switch (cfg.type) {
                  case 'beam': {
                      const beamModes = cfg.beamModes || [];
                      const beamGroup = obj as THREE.Group;

                      // Update 'cylinder' mode
                      const existingCylinder = beamGroup.getObjectByName('beam-cylinder') as THREE.Mesh | null;
                      if (beamModes.includes('cylinder')) {
                          if (!existingCylinder) {
                              const geom = new THREE.CylinderGeometry(
                                  cfg.geometry?.radius ?? 0.05,
                                  cfg.geometry?.radius ?? 0.05,
                                  cfg.geometry?.height ?? 8,
                                  16
                              );
                              geom.rotateZ(Math.PI / 2);
                              const mat = materials.beam;
                              const cylinderMesh = new THREE.Mesh(geom, mat);
                              cylinderMesh.name = 'beam-cylinder';
                              cylinderMesh.castShadow = true;
                              cylinderMesh.receiveShadow = true;
                              beamGroup.add(cylinderMesh);
                          } else {
                              // Update geometry if necessary
                              existingCylinder.geometry.dispose();
                              existingCylinder.geometry = new THREE.CylinderGeometry(
                                  cfg.geometry?.radius ?? 0.05,
                                  cfg.geometry?.radius ?? 0.05,
                                  cfg.geometry?.height ?? 8,
                                  16
                              );
                              existingCylinder.geometry.rotateZ(Math.PI / 2);
                          }
                      } else {
                          if (existingCylinder) {
                              beamGroup.remove(existingCylinder);
                              existingCylinder.geometry.dispose();
                              if (Array.isArray(existingCylinder.material)) {
                                  existingCylinder.material.forEach((mat) => mat.dispose());
                              } else {
                                  existingCylinder.material.dispose();
                              }
                          }
                      }

                      // **Update Beam Power in Material**
                      if (cfg.beamPower !== undefined) {
                          // Normalize beamPower (0-50 keV) to emissiveIntensity (0-5)
                          materials.beam.emissiveIntensity = cfg.beamPower / 10;
                          materials.beam.needsUpdate = true;
                      }

                      break;
                  }

                  case 'beamStop': {
                    if (obj instanceof THREE.Object3D) {
                      // Update material properties if needed
                      const mesh = obj.getObjectByName('beamStop-shutter') as THREE.Mesh | null;
                      if (mesh) {
                        mesh.material.opacity = cfg.shutterOpen ? 0.5 : 1;
                        mesh.material.transparent = true;
                        mesh.material.needsUpdate = true;
                      }
                    }
                    break;
                  }
          
                  case 'sample': {
                      const newMeshType = cfg.meshType ?? 'cube';
                      let currentMeshType = 'cube'; // Default

                      if (obj instanceof THREE.Mesh) {
                          currentMeshType = obj.geometry instanceof THREE.CylinderGeometry
                              ? 'cylinder'
                              : obj.geometry instanceof THREE.BoxGeometry
                                  ? 'cube'
                                  : 'unknown';
                      } else if (obj instanceof THREE.Object3D) {
                          // If sample is an Object3D (e.g., FBX model), we consider its type as 'fbx'
                          currentMeshType = 'fbx';
                      }

                      if (newMeshType !== currentMeshType) {
                          // Remove existing sample object
                          if (obj.parent) {
                              obj.parent.remove(obj);
                          }

                          // Dispose existing geometry and material if applicable
                          if (obj instanceof THREE.Mesh) {
                              obj.geometry.dispose();
                              if (Array.isArray(obj.material)) {
                                  obj.material.forEach((mat) => mat.dispose());
                              } else {
                                  obj.material.dispose();
                              }
                          } else if (obj instanceof THREE.Object3D) {
                              obj.traverse((child) => {
                                  if (child instanceof THREE.Mesh) {
                                      child.geometry.dispose();
                                      if (Array.isArray(child.material)) {
                                          child.material.forEach((mat) => mat.dispose());
                                      } else {
                                          child.material.dispose();
                                      }
                                  }
                              });
                          }

                          // Create new sample object based on newMeshType
                          let newObj: THREE.Object3D | THREE.Mesh | null = null;
                          if (newMeshType === 'cube') {
                              newObj = new THREE.Mesh(geometries.box, materials.sampleCube);
                              newObj.castShadow = true;
                              newObj.receiveShadow = true;
                          } else if (newMeshType === 'cylinder') {
                              newObj = new THREE.Mesh(geometries.customCylinder, materials.sampleCylinder);
                              newObj.castShadow = false;
                              newObj.receiveShadow = false;
                          } else if (newMeshType === 'fbx') {
                              newObj = new THREE.Object3D();
                              const loader = new FBXLoader();
                              loader.load(
                                  cfg.meshUrl || '/assets/bananas.fbx',
                                  (fbx: any) => {
                                      fbx.scale.set(0.02, 0.02, 0.02);
                                      fbx.position.set(0, 0.3, -0.25);
                                      fbx.traverse((child: any) => {
                                          if (child instanceof THREE.Mesh) {
                                              child.castShadow = true;
                                              child.receiveShadow = true;
                                              child.layers.enable(1);
                                              // Clone materials safely
                                              if (Array.isArray(child.material)) {
                                                  child.material = child.material.map((material) => {
                                                      if (material instanceof THREE.Material) {
                                                          const clonedMaterial = material.clone();
                                                          return clonedMaterial;
                                                      }
                                                      return material;
                                                  });
                                              } else if (child.material instanceof THREE.Material) {
                                                  child.material = child.material.clone();                                                }
                                          }
                                      });
                                      newObj?.add(fbx);
                                      console.log('FBX model loaded and added to the sample.');
                                  },
                                  (xhr: any) => {
                                      console.log(`FBX Loading Progress: ${(xhr.loaded / xhr.total) * 100}%`);
                                  },
                                  (error: any) => {
                                      console.error('Error loading FBX model:', error);
                                  }
                              );
                          }

                          // Apply transformations
                          if (newObj) {
                              newObj.position.fromArray(cfg.transform.position);
                              newObj.rotation.set(...cfg.transform.rotation);
                              if (cfg.transform.scale) {
                                  newObj.scale.fromArray(cfg.transform.scale);
                              }

                              // Parent to 'stage'
                              const parentId = cfg.parentId;
                              if (parentId && objectMapRef.current[parentId]) {
                                  objectMapRef.current[parentId].add(newObj);
                              } else {
                                  scene.add(newObj);
                              }

                              // **Assign new sample to Layer 1**
                              newObj.layers.enable(1);
                              sampleRef.current = newObj; // Assign to sampleRef

                              // If the newObj is an Object3D (e.g., FBX), ensure all child meshes are on Layer 1
                              if (newObj instanceof THREE.Object3D) {
                                  newObj.traverse((child) => {
                                      if (child instanceof THREE.Mesh) {
                                          child.layers.enable(1);
                                      }
                                  });
                              }

                              // Update the map with the new object
                              objectMapRef.current[cfg.id] = newObj;
                          }
                      } else {
                          // If meshType hasn't changed, update transformations if necessary
                          obj.position.fromArray(cfg.transform.position);
                          obj.rotation.set(...cfg.transform.rotation);
                          if (cfg.transform.scale) {
                              obj.scale.fromArray(cfg.transform.scale);
                          }
                      }
                      break;
                  }

                  case 'stage': {
                      // Update stage position based on config
                      if (obj instanceof THREE.Object3D) {
                          obj.position.fromArray(cfg.transform.position);
                          obj.rotation.set(
                              cfg.transform.rotation[0],
                              cfg.transform.rotation[1],
                              cfg.transform.rotation[2]
                          );
                          if (cfg.transform.scale) {
                              obj.scale.fromArray(cfg.transform.scale);
                          }
                          obj.castShadow = true;
                          obj.receiveShadow = true;
                      }
                      break;
                  }
                  case 'motor': {
                    // Update the centeringMotor transform
                    // so the sample (child) moves as well.
                    if (obj instanceof THREE.Object3D) {
                      // Position
                      obj.position.fromArray(cfg.transform.position);
                      // Rotation
                      obj.rotation.set(
                        cfg.transform.rotation[0],
                        cfg.transform.rotation[1],
                        cfg.transform.rotation[2]
                      );
                      // Scale, if applicable
                      if (cfg.transform.scale) {
                        obj.scale.fromArray(cfg.transform.scale);
                      }
                    }
                    break;
                  }
          

                  default:
                      break;
              }
          }
      });  
      // Cleanup for removed
      Object.keys(objectMapRef.current).forEach((id) => {
        if (!currentConfigIds.has(id)) {
          const obj = objectMapRef.current[id];
          if (obj.parent) obj.parent.remove(obj);
          obj.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
              if (Array.isArray(child.material)) {
                child.material.forEach((m) => m.dispose());
              } else {
                child.material.dispose();
              }
            }
          });
          delete objectMapRef.current[id];
        }
      });
    }, [configs, geometries, materials, xRayMaterial]);
  
    /********************************************************
     * Animation Loop
     ********************************************************/
    useEffect(() => {
      if (
        !sceneRef.current ||
        !mainCameraRef.current ||
        !rendererRef.current ||
        !xRayCameraRef.current ||
        !xRayRenderTargetRef.current ||
        !composerRef.current ||
        !photonPoolRef.current
      )
        return;
  
      const scene = sceneRef.current;
      const renderer = rendererRef.current;
      const xRayCamera = xRayCameraRef.current;
      const xRayRenderTarget = xRayRenderTargetRef.current;
      const composer = composerRef.current;
      const instancedMesh = photonPoolRef.current;
      const clock = new THREE.Clock();
  
      xRayMaterial.uniforms.xRayTexture.value = xRayRenderTarget.texture;
  
      const animate = () => {
        requestRef.current = requestAnimationFrame(animate);
        const delta = clock.getDelta();
  
        // 1) X-Ray render
        renderer.setRenderTarget(xRayRenderTarget);
        renderer.render(scene, xRayCamera);
        renderer.setRenderTarget(null);
  
        // 2) Rotate stage if playing
        if (isPlaying && stageRef.current) {
          stageRef.current.rotation.y += delta * 0.5;
          const now = performance.now();
          if (now - lastAngleSyncRef.current > 100) {
            lastAngleSyncRef.current = now;
            const deg = THREE.MathUtils.radToDeg(stageRef.current.rotation.y) % 360;
            handleStageRotationChange(deg);
          }
        }
  
        // 3) Update beam color & power
        const beamCfg = configs.find((c) => c.type === 'beam');
        if (beamCfg) {
          if (beamCfg.beamPower !== undefined) {
            materials.beam.emissiveIntensity = beamCfg.beamPower / 20;
            materials.beam.needsUpdate = true;

            materials.photon.emissiveIntensity = beamCfg.beamPower / 1;
            materials.photon.needsUpdate = true;

          }
          if (beamCfg.beamMono) {
            const newColor = beamColorMap[beamCfg.beamMono];
            
            materials.beam.color.set(newColor);
            materials.beam.emissive.set(newColor);
            materials.beam.needsUpdate = true;

            // Update photon color
            materials.photon.color.set(newColor);
            materials.photon.emissive.set(newColor);
            materials.photon.needsUpdate = true;
          }
        }
  
        // 3a) Photon stream
        if (beamCfg?.beamModes?.includes('photonStream') && beamCfg.visible) {
          const now = performance.now();
          const emissionInterval = Math.max(50, 200 - (beamCfg.beamPower || 25) * 3);
          if (now - lastPhotonEmitRef.current > emissionInterval) {
            lastPhotonEmitRef.current = now;
            const photons = photonsRef.current;
            const idx = photons.findIndex((p) => !p.active);
            if (idx !== -1) {
              photons[idx].active = true;
              photons[idx].position.set(-4, 0, 0);
              const baseSpeed = 0.05;
              const powerVal = beamCfg.beamPower || 25;
              photons[idx].velocity.set(1, 0, 0).multiplyScalar(baseSpeed + powerVal * 0.001);
              const mtx = new THREE.Matrix4();
              mtx.setPosition(photons[idx].position);
              instancedMesh.setMatrixAt(idx, mtx);
              instancedMesh.instanceMatrix.needsUpdate = true;
            }
          }
        }
  
        // 3b) Update active photons
        const photons = photonsRef.current;
        const mat4 = new THREE.Matrix4();
        let maxActiveIndex = -1;
        photons.forEach((photon, i) => {
          if (photon.active) {
            photon.position.add(photon.velocity.clone().multiplyScalar(delta * 60));
            const stopCfg = configs.find((c) => c.type === 'beamStop');
            const open = stopCfg?.shutterOpen || false;
            if ((!open && photon.position.x >= -2) || (open && photon.position.x >= 4)) {
              photon.active = false;
              return;
            }
            mat4.setPosition(photon.position);
            instancedMesh.setMatrixAt(i, mat4);
            if (i > maxActiveIndex) maxActiveIndex = i;
          }
        });
        instancedMesh.count = maxActiveIndex + 1;
        instancedMesh.instanceMatrix.needsUpdate = true;
  
        // 4) Beam length based on shutter
        const stopCfg = configs.find((c) => c.type === 'beamStop');
        const isOpen = stopCfg?.shutterOpen || false;
        const beamObj = scene.getObjectByName('beamGroup') as THREE.Group;
        if (beamObj) {
          const beamCyl = beamObj.getObjectByName('beam-cylinder') as THREE.Mesh;
          if (beamCyl) {
            if (!isOpen) {
              beamCyl.scale.x = 0.25;
              beamCyl.position.x = -3;
            } else {
              beamCyl.scale.x = 1;
              beamCyl.position.x = 0;
            }
          }
        }
  
        // 5) Door-like rotation on the beamStop
        //    If shutterOpen => rotate around the Y axis
        //    pivot is at the left edge
        const beamStopPivot = scene.getObjectByName('beamStop-pivot');
        if (beamStopPivot) {
          beamStopPivot.rotation.y = isOpen ? -Math.PI / 2 : 0;
        }
      
        composer.render();
      };
  
      animate();
  
      return () => {
        cancelAnimationFrame(requestRef.current);
        clock.stop();
      };
    }, [configs, isPlaying, materials.beam, materials.photon, xRayMaterial, handleStageRotationChange]);
  
    /********************************************************
     * Sync with playAngle
     ********************************************************/
    useEffect(() => {
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.type === 'stage'
            ? {
                ...cfg,
                transform: {
                  ...cfg.transform,
                  rotation: [0, THREE.MathUtils.degToRad(playAngle), 0],
                },
              }
            : cfg
        )
      );
    }, [playAngle]);
  
    /********************************************************
     * UI Handlers
     ********************************************************/
    const handlePlayPause = useCallback(() => {
      setIsPlaying((prev) => !prev);
    }, [setIsPlaying]);
  
    const handleManualAngleChange = useCallback(
      (val: number) => {
        handleStageRotationChange(val);
        if (stageRef.current) {
          stageRef.current.rotation.y = THREE.MathUtils.degToRad(val);
        }
        setConfigs((prev) =>
          prev.map((cfg) =>
            cfg.type === 'stage'
              ? {
                  ...cfg,
                  transform: {
                    ...cfg.transform,
                    rotation: [0, THREE.MathUtils.degToRad(val), 0],
                  },
                }
              : cfg
          )
        );
      },
      [handleStageRotationChange]
    );
  
    const handleToggleVisibility = useCallback((id: string) => {
      setConfigs((prev) =>
        prev.map((cfg) => {
          if (cfg.id === id) {
            return { ...cfg, visible: !cfg.visible };
          }
          return cfg;
        })
      );
    }, []);
  
    const handleBeamModeToggle = useCallback((mode: 'cylinder' | 'photonStream') => {
      setConfigs((prev) =>
        prev.map((cfg) => {
          if (cfg.type === 'beam') {
            const modes = cfg.beamModes || [];
            if (modes.includes(mode)) {
              return { ...cfg, beamModes: modes.filter((m) => m !== mode) };
            } else {
              return { ...cfg, beamModes: [...modes, mode] };
            }
          }
          return cfg;
        })
      );
    }, []);
  
    const handleSampleMeshChange = useCallback((meshType: 'cube' | 'cylinder' | 'fbx') => {
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.type === 'sample'
            ? {
                ...cfg,
                meshType,
                meshUrl: meshType === 'fbx' ? '/assets/bananas.fbx' : undefined,
              }
            : cfg
        )
      );
    }, []);

    
  
    const toggleShutter = useCallback(() => {
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.type === 'beamStop' ? { ...cfg, shutterOpen: !cfg.shutterOpen } : cfg
        )
      );
  
      // Also update X-Ray shader and sample layer
      const beamStopCfg = configs.find((c) => c.type === 'beamStop');
      if (!beamStopCfg) return;
  
      const newShutter = !beamStopCfg.shutterOpen;
      xRayMaterial.uniforms.shutterOpen.value = newShutter;
      if (sampleRef.current) {
        if (newShutter) sampleRef.current.layers.enable(1);
        else sampleRef.current.layers.disable(1);
      }
    }, [configs, xRayMaterial]);
  
    // Stage movement (X, Z)
    const handleStageXChange = useCallback((val: number) => {
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.type === 'stage'
            ? {
                ...cfg,
                transform: {
                  ...cfg.transform,
                  position: [val, cfg.transform.position[1], cfg.transform.position[2]],
                },
              }
            : cfg
        )
      );
    }, []);
  
    const handleStageZChange = useCallback((val: number) => {
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.type === 'stage'
            ? {
                ...cfg,
                transform: {
                  ...cfg.transform,
                  position: [cfg.transform.position[0], cfg.transform.position[1], val],
                },
              }
            : cfg
        )
      );
    }, []);
  
    // Motor sliders (move the "centeringMotor" in X, Y, Z)
    const handleMotorXChange = useCallback((val: number) => {
      setMotorX(val);
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.id === 'centeringMotor'
            ? {
                ...cfg,
                transform: {
                  ...cfg.transform,
                  position: [val, cfg.transform.position[1], cfg.transform.position[2]],
                },
              }
            : cfg
        )
      );
    }, []);
  
    const handleMotorYChange = useCallback((val: number) => {
      setMotorY(val);
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.id === 'centeringMotor'
            ? {
                ...cfg,
                transform: {
                  ...cfg.transform,
                  position: [cfg.transform.position[0], val, cfg.transform.position[2]],
                },
              }
            : cfg
        )
      );
    }, []);
  
    const handleMotorZChange = useCallback((val: number) => {
      setMotorZ(val);
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.id === 'centeringMotor'
            ? {
                ...cfg,
                transform: {
                  ...cfg.transform,
                  position: [cfg.transform.position[0], cfg.transform.position[1], val],
                },
              }
            : cfg
        )
      );
    }, []);
  
    /********************************************************
     * Ensure X-Ray shutter uniform is up to date
     ********************************************************/
    useEffect(() => {
      const stopCfg = configs.find((c) => c.type === 'beamStop');
      const open = stopCfg?.shutterOpen || false;
      xRayMaterial.uniforms.shutterOpen.value = open;
      if (sampleRef.current) {
        if (open) sampleRef.current.layers.enable(1);
        else sampleRef.current.layers.disable(1);
      }
    }, [configs, xRayMaterial]);
  
    /********************************************************
     * Layout/Styles
     ********************************************************/
    const outerStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
    };
    const canvasContainerStyle: CSSProperties = {
      flex: 1,
      position: 'relative',
    };
    const panelStyle: CSSProperties = {
      width: panelOpen ? '320px' : '0px',
      minWidth: panelOpen ? '320px' : '0px',
      maxWidth: panelOpen ? '320px' : '0px',
      overflowY: 'auto',
      borderLeft: panelOpen ? '1px solid #ccc' : 'none',
      backgroundColor: '#C1D3E3',
      transition: 'width 0.3s ease',
      boxShadow: panelOpen ? '2px 0 5px rgba(0,0,0,0.1)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      color: '#464B53',
      flexShrink: 0,
    };
    const panelContentStyle: CSSProperties = {
      display: panelOpen ? 'flex' : 'none',
      flexDirection: 'column',
      height: '100%',
      padding: panelOpen ? '1.5rem' : '0',
      transition: 'opacity 0.3s ease',
      opacity: panelOpen ? 1 : 0,
    };
    const buttonStyle: CSSProperties = {
      padding: '0.6rem 1rem',
      margin: '0.5rem 0',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s ease',
    };
    const sectionStyle: CSSProperties = {
      marginBottom: '1.5rem',
    };
    const labelStyle: CSSProperties = {
      marginBottom: '0.5rem',
      fontWeight: 'bold',
    };
    const sliderStyle: CSSProperties = {
      width: '100%',
    };
    const checkboxLabelStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
      cursor: 'pointer',
    };
    const radioLabelStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
      cursor: 'pointer',
    };
  
    return (
      <div style={outerStyle}>
        <div style={panelStyle}>
          {panelOpen && (
            <div style={panelContentStyle}>
              <button
                onClick={togglePanel}
                style={{ ...buttonStyle, alignSelf: 'flex-end', backgroundColor: '#dc3545' }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#c82333')
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#dc3545')
                }
              >
                Hide Panel
              </button>
              <h2 style={{ marginTop: '1rem', marginBottom: '1rem', color: '#07304B' }}>Controls</h2>
  
              <button
                onClick={handlePlayPause}
                style={buttonStyle}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0056b3')
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#007bff')
                }
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
  
              <div style={sectionStyle}>
                <div style={labelStyle}>Stage Rotation: {playAngle.toFixed(1)}°</div>
                <input
                  type="range"
                  min={0}
                  max={360}
                  step={0.1}
                  value={playAngle}
                  onChange={(e) => handleManualAngleChange(Number(e.target.value))}
                  style={sliderStyle}
                />
              </div>
  
              {/* Stage Movement */}
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Stage Movement</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={labelStyle}>
                    Front-Back (X-axis):{' '}
                    {configs.find((c) => c.type === 'stage')?.transform.position[0].toFixed(2)}
                  </div>
                  <input
                    type="range"
                    min={-5}
                    max={5}
                    step={0.1}
                    value={configs.find((c) => c.type === 'stage')?.transform.position[0] || 0}
                    onChange={(e) => handleStageXChange(Number(e.target.value))}
                    style={sliderStyle}
                  />
                </div>
  
                <div style={{ marginBottom: '1rem' }}>
                  <div style={labelStyle}>
                    Left-Right (Z-axis):{' '}
                    {configs.find((c) => c.type === 'stage')?.transform.position[2].toFixed(2)}
                  </div>
                  <input
                    type="range"
                    min={-5}
                    max={5}
                    step={0.1}
                    value={configs.find((c) => c.type === 'stage')?.transform.position[2] || 0}
                    onChange={(e) => handleStageZChange(Number(e.target.value))}
                    style={sliderStyle}
                  />
                </div>
              </div>
  
              {/* Centering Motor Movement */}
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Centering Motor</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={labelStyle}>X: {motorX.toFixed(2)}</div>
                  <input
                    type="range"
                    min={-2}
                    max={2}
                    step={0.01}
                    value={motorX}
                    onChange={(e) => handleMotorXChange(Number(e.target.value))}
                    style={sliderStyle}
                  />
                </div>
                {/* <div style={{ marginBottom: '1rem' }}>
                  <div style={labelStyle}>Y: {motorY.toFixed(2)}</div>
                  <input
                    type="range"
                    min={-1}
                    max={2}
                    step={0.01}
                    value={motorY}
                    onChange={(e) => handleMotorYChange(Number(e.target.value))}
                    style={sliderStyle}
                  />
                </div> */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={labelStyle}>Z: {motorZ.toFixed(2)}</div>
                  <input
                    type="range"
                    min={-2}
                    max={2}
                    step={0.01}
                    value={motorZ}
                    onChange={(e) => handleMotorZChange(Number(e.target.value))}
                    style={sliderStyle}
                  />
                </div>
              </div>
  
              {/* Camera slider */}
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Camera X Position</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={labelStyle}>X: {cameraX.toFixed(2)}</div>
                  <input
                    type="range"
                    min={-20}
                    max={10}
                    step={0.1}
                    value={cameraX}
                    onChange={(e) => setCameraX(Number(e.target.value))}
                    style={sliderStyle}
                  />
                </div>
              </div>
  
              {/* Beam Mode */}
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Beam Mode</h3>
                <label style={checkboxLabelStyle}>
                  <input
                    type="checkbox"
                    name="beamMode"
                    value="cylinder"
                    checked={
                      configs.find((c) => c.type === 'beam')?.beamModes?.includes('cylinder') || false
                    }
                    onChange={() => handleBeamModeToggle('cylinder')}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Cylinder
                </label>
                <label style={checkboxLabelStyle}>
                  <input
                    type="checkbox"
                    name="beamMode"
                    value="photonStream"
                    checked={
                      configs.find((c) => c.type === 'beam')?.beamModes?.includes('photonStream') || false
                    }
                    onChange={() => handleBeamModeToggle('photonStream')}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Photon Stream
                </label>
              </div>
  
              {/* Beam Energy & Mono */}
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Beam Energy (keV)</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="range"
                    min={0.001}
                    max={50}
                    step={0.1}
                    value={configs.find((c) => c.type === 'beam')?.beamPower || 25}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setConfigs((prev) =>
                        prev.map((cfg) =>
                          cfg.type === 'beam'
                            ? { ...cfg, beamPower: val }
                            : cfg
                        )
                      );
                    }}
                    style={{ flex: 1, marginRight: '1rem' }}
                  />
                  <span>
                    {configs.find((c) => c.type === 'beam')?.beamPower?.toFixed(1) || 25} keV
                  </span>
                </div>
              </div>
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Monochromator Setting</h3>
                <label style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="beamMono"
                    value="Xtal"
                    checked={configs.find((c) => c.type === 'beam')?.beamMono === 'Xtal'}
                    onChange={() =>
                      setConfigs((prev) =>
                        prev.map((cfg) =>
                          cfg.type === 'beam' ? { ...cfg, beamMono: 'Xtal' } : cfg
                        )
                      )
                    }
                    style={{ marginRight: '0.5rem' }}
                  />
                  Xtal (Pink)
                </label>
                <label style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="beamMono"
                    value="Multilayer"
                    checked={configs.find((c) => c.type === 'beam')?.beamMono === 'Multilayer'}
                    onChange={() =>
                      setConfigs((prev) =>
                        prev.map((cfg) =>
                          cfg.type === 'beam' ? { ...cfg, beamMono: 'Multilayer' } : cfg
                        )
                      )
                    }
                    style={{ marginRight: '0.5rem' }}
                  />
                  Multilayer (Green)
                </label>
                <label style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="beamMono"
                    value="WhiteLight"
                    checked={configs.find((c) => c.type === 'beam')?.beamMono === 'WhiteLight'}
                    onChange={() =>
                      setConfigs((prev) =>
                        prev.map((cfg) =>
                          cfg.type === 'beam' ? { ...cfg, beamMono: 'WhiteLight' } : cfg
                        )
                      )
                    }
                    style={{ marginRight: '0.5rem' }}
                  />
                  WhiteLight (White)
                </label>
              </div>
  
              {/* Beam Stop */}
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Beam Stop</h3>
                <button
                  onClick={toggleShutter}
                  style={{ ...buttonStyle, backgroundColor: '#28a745' }}
                  onMouseOver={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#218838')
                  }
                  onMouseOut={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#28a745')
                  }
                >
                  {configs.find((c) => c.type === 'beamStop')?.shutterOpen ? 'Close Shutter' : 'Open Shutter'}
                </button>
              </div>
  
              {/* Sample Mesh */}
              <div style={sectionStyle}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Sample Mesh</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="sampleMesh"
                      value="cube"
                      checked={configs.find((c) => c.type === 'sample')?.meshType === 'cube'}
                      onChange={() => handleSampleMeshChange('cube')}
                      style={{ marginRight: '0.5rem' }}
                    />
                    Cube
                  </label>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="sampleMesh"
                      value="cylinder"
                      checked={configs.find((c) => c.type === 'sample')?.meshType === 'cylinder'}
                      onChange={() => handleSampleMeshChange('cylinder')}
                      style={{ marginRight: '0.5rem' }}
                    />
                    Cylinder
                  </label>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="sampleMesh"
                      value="fbx"
                      checked={configs.find((c) => c.type === 'sample')?.meshType === 'fbx'}
                      onChange={() => handleSampleMeshChange('fbx')}
                      style={{ marginRight: '0.5rem' }}
                    />
                    FBX Model
                  </label>
                </div>
              </div>
  
              {/* Visibility */}
              <h3>Visibility</h3>
              {configs.map((cfg) => (
                <div key={cfg.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={cfg.visible !== false}
                      onChange={() => handleToggleVisibility(cfg.id)}
                    />
                    {cfg.type.toUpperCase()} ({cfg.id})
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        {!panelOpen && (
          <button
            onClick={togglePanel}
            style={{
              position: 'absolute',
              left: 10,
              top: 10,
              zIndex: 999,
              padding: '0.6rem 1rem',
              backgroundColor: '#007bff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#007bff')}
          >
            Show Panel
          </button>
        )}
        <div ref={containerRef} style={canvasContainerStyle}>
          <canvas id="three-canvas" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    );
  };
  
  export default ThreeScene;
  