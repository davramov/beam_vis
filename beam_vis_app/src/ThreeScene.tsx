/********************************************************
 * ThreeScene.tsx
 * 
 * Full Example:
 *  - Beam, Stage, Sample, Detector from "configs"
 *  - Photon stream logic for "photonStream" mode
 *  - Smooth real-time rotation of the stage
 *  - Slider stays in sync via a throttled update
 *  - Dynamic Sample mesh: Cube, Cylinder, or FBX model
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
  import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
  
  // Import your custom hook from PlayContext
  import { usePlay } from './PlayContext';
  
  /** Basic interface describing a beamline config item. */
  interface ComponentConfig {
    id: string;
    type: 'beam' | 'stage' | 'detector' | 'sample' | 'beamStop';
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
    beamMode?: 'cylinder' | 'photonStream';
    visible?: boolean;
    meshType?: 'cube' | 'cylinder' | 'fbx'; // Added for dynamic Sample mesh
    meshUrl?: string; // URL for FBX model if meshType is 'fbx'
    shutterOpen?: boolean; // Added for beamStop
  }
  
  /** Our initial beamline config, containing beam, stage, sample, detector. */
  const beamlineConfig: ComponentConfig[] = [
    {
      id: 'beam',
      type: 'beam',
      transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      geometry: { radius: 0.05, height: 8 },
      beamMode: 'cylinder',
      visible: true,
    },
    {
      id: 'stage',
      type: 'stage',
      transform: { position: [0, -0.6, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
      geometry: { radius: 0.4, height: 1 },
      visible: true,
    },
    {
      id: 'sample',
      type: 'sample',
      parentId: 'stage',
      transform: { position: [0, 0.6, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
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
        transform: { position: [2, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        visible: true,
        shutterOpen: false, // Initially closed
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
  
    // Simple radial lines
    ctx.fillStyle = '#DDD';
    ctx.fillRect(0, 0, size, size);
  
    ctx.strokeStyle = '#444';
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
  
    ctx.fillStyle = '#DDD';
    ctx.fillRect(0, 0, size, size);
  
    ctx.fillStyle = '#444';
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
  
  // Memoize textures outside the component to ensure they're created only once
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
    stageGroup.add(sideMesh);
  
    // Top circle
    const topGeom = new THREE.CircleGeometry(radius, 32);
    const topMat = new THREE.MeshPhongMaterial({ map: topTexture });
    const topMesh = new THREE.Mesh(topGeom, topMat);
    topMesh.rotation.x = -Math.PI / 2;
    topMesh.position.y = height / 2;
    stageGroup.add(topMesh);
  
    // Bottom circle
    const bottomGeom = new THREE.CircleGeometry(radius, 32);
    const bottomMat = new THREE.MeshPhongMaterial({ map: topTexture });
    const bottomMesh = new THREE.Mesh(bottomGeom, bottomMat);
    bottomMesh.rotation.x = Math.PI / 2;
    bottomMesh.position.y = -height / 2;
    stageGroup.add(bottomMesh);
  
    return stageGroup;
  };
  
  const createShutter = (size = 1): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry(size, 0.1, 0.2);
    const material = new THREE.MeshPhongMaterial({ color: 'gray' });
    return new THREE.Mesh(geometry, material);
  };

  /********************************************************
   * ThreeScene Component
   ********************************************************/
  const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene>();
    const cameraRef = useRef<THREE.OrthographicCamera>();
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const requestRef = useRef<number>(0);
  
    // 1) Pull states from context
    const { isPlaying, playAngle, setIsPlaying, handleStageRotationChange } = usePlay();
  
    // 2) Our local config array for building the scene
    const [configs, setConfigs] = useState<ComponentConfig[]>(beamlineConfig);
  
    // 3) We'll store references to objects we want to animate:
    //    stageRef for rotating the stage, photonObjectsRef for photon spheres, sampleRef for dynamic mesh
    const stageRef = useRef<THREE.Object3D | null>(null);
    const photonObjectsRef = useRef<THREE.Mesh[]>([]);
    const sampleRef = useRef<THREE.Object3D | null>(null);
  
    // Throttle timing for syncing rotation to `playAngle`
    const lastAngleSyncRef = useRef<number>(0);
  
    // Photon logic
    const photonEmitInterval = useRef<number>(200); // ms between photon creation
    const lastPhotonEmitRef = useRef<number>(0);
    const photonSpeed = useRef<number>(0.05); // units/frame
    const maxPhotonDistance = useRef<number>(10); // remove photon if it goes beyond radius=10
  
    // Panel open/close
    const [panelOpen, setPanelOpen] = useState(true);
    const togglePanel = useCallback(() => setPanelOpen((prev) => !prev), []);
  
    // Cache for loaded FBX models to prevent reloading
    const fbxCache = useRef<Record<string, THREE.Group>>({});
  
    /********************************************************
     * Initialize Scene / Camera / Renderer once
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
  
      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#f0f0f0');
      sceneRef.current = scene;
  
      // Orthographic camera
      const aspect = w / h;
      const viewSize = 3;
      const camera = new THREE.OrthographicCamera(
        -viewSize * aspect,
        viewSize * aspect,
        viewSize,
        -viewSize,
        0.1,
        100
      );
      camera.position.set(-10, 10, 10);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;
  
      // Renderer
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(window.devicePixelRatio);
      rendererRef.current = renderer;
  
      // Lights
      const ambientLight = new THREE.AmbientLight('#ffffff', 0.7);
      scene.add(ambientLight);
      const dirLight = new THREE.DirectionalLight('#ffffff', 1);
      dirLight.position.set(-5, 12, 12);
      scene.add(dirLight);
  
      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current) return;
        const newW = containerRef.current.clientWidth;
        const newH = containerRef.current.clientHeight;
        const newAspect = newW / newH;
        camera.left = -viewSize * newAspect;
        camera.right = viewSize * newAspect;
        camera.top = viewSize;
        camera.bottom = -viewSize;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    }, []);
  
    /********************************************************
     * Memoize geometries and materials to reuse them
     ********************************************************/
    const geometries = useMemo(() => {
      return {
        cylinder: new THREE.CylinderGeometry(0.05, 0.05, 8, 16),
        box: new THREE.BoxGeometry(0.4, 0.4, 0.4),
        detector: new THREE.BoxGeometry(1, 1, 0.2),
        sphere: new THREE.SphereGeometry(0.1, 8, 8),
        customCylinder: new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16),
      };
    }, []);
  
    const materials = useMemo(() => {
      return {
        beam: new THREE.MeshBasicMaterial({
          color: 'red',
          transparent: true,
          opacity: 0.4,
        }),
        sampleCube: new THREE.MeshPhongMaterial({ color: '#8c564b' }),
        sampleCylinder: new THREE.MeshPhongMaterial({ color: '#8c564b' }),
        detector: new THREE.MeshPhongMaterial({ color: '#1f77b4' }),
        photon: new THREE.MeshBasicMaterial({ color: 'red' }),
        stageSide: new THREE.MeshPhongMaterial({ map: sideTexture }),
        stageTopBottom: new THREE.MeshPhongMaterial({ map: topTexture }),
      };
    }, []);
  
    /********************************************************
     * Build/Update the scene from `configs`
     ********************************************************/
    useEffect(() => {
      const scene = sceneRef.current;
      if (!scene) return;
  
      // Remove all existing non-light objects
      const toRemove: THREE.Object3D[] = [];
      scene.children.forEach((child) => {
        if (!(child instanceof THREE.Light)) {
          toRemove.push(child);
        }
      });
      toRemove.forEach((obj) => scene.remove(obj));
  
      // Clear out any existing photon objects
      photonObjectsRef.current = [];
  
      // We'll build objects into a map so we can parent them
      const objectMap: Record<string, THREE.Object3D> = {};
  
      configs.forEach((cfg) => {
        if (!cfg.visible) return;
        let obj: THREE.Object3D | null = null;
  
        switch (cfg.type) {
          case 'beam': {
            if (cfg.beamMode === 'cylinder') {
              // A red cylinder for the beam
              const geom = new THREE.CylinderGeometry(
                cfg.geometry?.radius ?? 0.05,
                cfg.geometry?.radius ?? 0.05,
                cfg.geometry?.height ?? 8,
                16
              );
              geom.rotateZ(Math.PI / 2);
              const mat = materials.beam;
              obj = new THREE.Mesh(geom, mat);
            } else {
              // photonStream: invisible placeholder (could be used for positioning)
              obj = new THREE.Object3D();
            }
            break;
          }
  
          case 'stage': {
            const radius = cfg.geometry?.radius ?? 0.4;
            const height = cfg.geometry?.height ?? 1;
            obj = createCustomStage(radius, height, topTexture, sideTexture);
            stageRef.current = obj; // We'll rotate this in the animation loop
            break;
          }
  
          case 'sample': {
            // Handle dynamic mesh for Sample
            const meshType = cfg.meshType ?? 'cube';
            if (meshType === 'cube') {
              const geom = geometries.box;
              const mat = materials.sampleCube;
              obj = new THREE.Mesh(geom, mat);
            } else if (meshType === 'cylinder') {
              const geom = geometries.customCylinder;
              const mat = materials.sampleCylinder;
              obj = new THREE.Mesh(geom, mat);
            } else if (meshType === 'fbx') {
              // Placeholder for FBX model; actual loading handled separately
              obj = new THREE.Object3D();
              sampleRef.current = obj;
              // Load FBX model
              const loader = new FBXLoader();
              loader.load(
                cfg.meshUrl || '/assets/bananas.fbx', // Default path
                (fbx) => {
                  // Adjust scale and position as needed
                  fbx.scale.set(0.02, 0.02, 0.02); // Example scaling
                  fbx.position.set(0, 0.3, -0.25);
                  obj?.add(fbx);
                },
                undefined,
                (error) => {
                  console.error('Error loading FBX model:', error);
                }
              );
            }
            break;
          }
  
          case 'detector': {
            const w = cfg.geometry?.width ?? 1;
            const hh = cfg.geometry?.height ?? 1;
            const d = cfg.geometry?.depth ?? 0.2;
            const geom = new THREE.BoxGeometry(w, hh, d);
            const mat = materials.detector;
            obj = new THREE.Mesh(geom, mat);
            break;
          }
  
          default:
            break;
        }
  
        if (obj) {
          // position, rotation, scale
          obj.position.fromArray(cfg.transform.position);
          obj.rotation.set(
            cfg.transform.rotation[0],
            cfg.transform.rotation[1],
            cfg.transform.rotation[2]
          );
          if (cfg.transform.scale) {
            obj.scale.fromArray(cfg.transform.scale);
          }
  
          objectMap[cfg.id] = obj;
        }
      });
  
      // Now handle parenting
      configs.forEach((cfg) => {
        if (!cfg.visible) return;
        const childObj = objectMap[cfg.id];
        if (!childObj) return;
        const parentObj = cfg.parentId ? objectMap[cfg.parentId] : null;
        if (parentObj) {
          parentObj.add(childObj);
        } else {
          scene.add(childObj);
        }
      });
    }, [configs, geometries, materials]);
  
    /********************************************************
     * Animation Loop: rotate stage + photon stream
     ********************************************************/
    useEffect(() => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
  
      const scene = sceneRef.current;
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
  
      const animate = () => {
        requestRef.current = requestAnimationFrame(animate);
  
        // 1) If playing, rotate the stage
        if (isPlaying && stageRef.current) {
          stageRef.current.rotation.y += 0.01; // smooth rotation
  
          // Throttle the update to `playAngle` so the slider stays in sync
          const now = performance.now();
          if (now - lastAngleSyncRef.current > 100) {
            lastAngleSyncRef.current = now;
            // Convert to degrees
            const deg = THREE.MathUtils.radToDeg(stageRef.current.rotation.y) % 360;
            handleStageRotationChange(deg);
          }
        }
  
        // 2) If the beam is in photonStream mode, create photons occasionally
        const beamCfg = configs.find((c) => c.type === 'beam');
        if (beamCfg?.beamMode === 'photonStream' && beamCfg.visible) {
          const now = performance.now();
          if (now - lastPhotonEmitRef.current > photonEmitInterval.current) {
            lastPhotonEmitRef.current = now;
            // Create a photon
            const photon = new THREE.Mesh(geometries.sphere, materials.photon);
            photon.position.set(-4, 0, 0);
            photon.name = `photon-${now}`;
            photonObjectsRef.current.push(photon);
            scene.add(photon);
          }
        }
  
        // 3) Move existing photons along +X
        photonObjectsRef.current = photonObjectsRef.current.filter((photon) => {
          photon.position.x += photonSpeed.current;
  
          // Remove if out of range
          if (photon.position.length() > maxPhotonDistance.current) {
            scene.remove(photon);
            return false;
          }
          return true;
        });
  
        // 4) Render
        renderer.render(scene, camera);
      };
  
      animate();
  
      return () => {
        cancelAnimationFrame(requestRef.current);
      };
    }, [isPlaying, configs, handleStageRotationChange, geometries, materials]);
  
    /********************************************************
     * UI Handlers
     ********************************************************/
    const handlePlayPause = useCallback(() => {
      setIsPlaying((prev) => !prev);
    }, [setIsPlaying]);
  
    // If the user moves the slider, we set the stage's rotation directly
    // plus update the context's playAngle so the label remains in sync.
    const handleManualAngleChange = useCallback(
      (val: number) => {
        handleStageRotationChange(val);
        if (stageRef.current) {
          stageRef.current.rotation.y = THREE.MathUtils.degToRad(val);
        }
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
  
    const handleBeamModeChange = useCallback((mode: 'cylinder' | 'photonStream') => {
      setConfigs((prev) =>
        prev.map((cfg) => (cfg.type === 'beam' ? { ...cfg, beamMode: mode } : cfg))
      );
    }, []);
  
    // Handle changing the Sample's mesh type
    const handleSampleMeshChange = useCallback((meshType: 'cube' | 'cylinder' | 'fbx') => {
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.type === 'sample'
            ? { ...cfg, meshType, meshUrl: meshType === 'fbx' ? '/assets/bananas.fbx' : undefined }
            : cfg
        )
      );
    }, []);
  
    /********************************************************
     * Layout / Panel Styles
     ********************************************************/
    const outerStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    };
    const canvasContainerStyle: CSSProperties = {
      flex: 1,
      position: 'relative',
    };
    const panelStyle: CSSProperties = {
      width: panelOpen ? '300px' : '0px',
      overflow: 'hidden',
      borderLeft: panelOpen ? '1px solid #ccc' : 'none',
      transition: 'width 0.3s ease',
    };
  
    /********************************************************
     * Render
     ********************************************************/
    return (
      <div style={outerStyle}>
        <div ref={containerRef} style={canvasContainerStyle}>
          <canvas id="three-canvas" style={{ width: '100%', height: '100%' }} />
        </div>
  
        <div style={panelStyle}>
          {panelOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1rem' }}>
              <button onClick={togglePanel}>Hide Panel</button>
              <h2>Controls</h2>
  
              <button onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
              </button>
  
              <div style={{ margin: '1rem 0' }}>
                <div>Stage Rotation: {playAngle.toFixed(1)}°</div>
                <input
                  type="range"
                  min={0}
                  max={360}
                  step={0.1}
                  value={playAngle}
                  onChange={(e) => handleManualAngleChange(Number(e.target.value))}
                />
              </div>
  
              <h3>Beam Mode</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label>
                  <input
                    type="radio"
                    name="beamMode"
                    value="cylinder"
                    checked={configs.find((c) => c.type === 'beam')?.beamMode === 'cylinder'}
                    onChange={() => handleBeamModeChange('cylinder')}
                  />
                  Cylinder
                </label>
                <label style={{ marginLeft: 10 }}>
                  <input
                    type="radio"
                    name="beamMode"
                    value="photonStream"
                    checked={configs.find((c) => c.type === 'beam')?.beamMode === 'photonStream'}
                    onChange={() => handleBeamModeChange('photonStream')}
                  />
                  Photon Stream
                </label>
              </div>

              <h3>Beam Stop</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                <input
                  type="checkbox"
                  checked={configs.find((c) => c.type === 'beamStop')?.shutterOpen}
                  onChange={() =>
                    setConfigs((prev) =>
                      prev.map((cfg) =>
                        cfg.type === 'beamStop' ? { ...cfg, shutterOpen: !cfg.shutterOpen } : cfg
                      )
                    )
                  }
                />
                Enable Beam Stop (Shutter)
              </label>
            </div>

  
              <h3>Sample Mesh</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label>
                  <input
                    type="radio"
                    name="sampleMesh"
                    value="cube"
                    checked={configs.find((c) => c.type === 'sample')?.meshType === 'cube'}
                    onChange={() => handleSampleMeshChange('cube')}
                  />
                  Cube
                </label>
                <label style={{ marginLeft: 10 }}>
                  <input
                    type="radio"
                    name="sampleMesh"
                    value="cylinder"
                    checked={configs.find((c) => c.type === 'sample')?.meshType === 'cylinder'}
                    onChange={() => handleSampleMeshChange('cylinder')}
                  />
                  Cylinder
                </label>
                <label style={{ marginLeft: 10 }}>
                  <input
                    type="radio"
                    name="sampleMesh"
                    value="fbx"
                    checked={configs.find((c) => c.type === 'sample')?.meshType === 'fbx'}
                    onChange={() => handleSampleMeshChange('fbx')}
                  />
                  FBX Model
                </label>
              </div>
  
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
              right: 10,
              top: 10,
              zIndex: 999,
            }}
          >
            Show Panel
          </button>
        )}
      </div>
    );
  };
  
  export default ThreeScene;
  