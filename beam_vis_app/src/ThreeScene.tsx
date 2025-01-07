/********************************************************
 * ThreeScene.tsx
 * 
 * Features Added:
 *  - Optimized Photon Stream using InstancedMesh
 *  - Controls to move the stage left-right (X-axis) and front-back (Z-axis)
 *  - Responsive layout: Three.js canvas fills the entire window when controls panel is hidden
 *  - "Beam Power" control to modulate beam visualization
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
    beamModes?: ('cylinder' | 'photonStream')[]; // Updated to allow multiple modes
    visible?: boolean;
    meshType?: 'cube' | 'cylinder' | 'fbx'; // Added for dynamic Sample mesh
    meshUrl?: string; // URL for FBX model if meshType is 'fbx'
    shutterOpen?: boolean; // Added for beamStop
    beamPower?: number; // Added for beam power control
}

/** Our initial beamline config, containing beam, stage, sample, detector, and beamStop. */
const beamlineConfig: ComponentConfig[] = [
    {
        id: 'beam',
        type: 'beam',
        transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
        geometry: { radius: 0.05, height: 8 },
        beamModes: ['cylinder'], // Initialize with 'cylinder' mode
        visible: true,
        beamPower: 25, // Initial Beam Power (0 to 50 keV)
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
        meshType: 'cube', // Existing cube mesh
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

/** Build a beam stop shaped like the detector */
const createBeamStop = (
    width: number,
    height: number,
    depth: number,
    color: string,
    shutterOpen: boolean // Added parameter to set initial opacity
): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshPhongMaterial({
        color,
        transparent: true, // Enable transparency
        opacity: shutterOpen ? 0.5 : 1, // Opaque when closed, semi-transparent when open
    });
    return new THREE.Mesh(geometry, material);
};

/********************************************************
 * ThreeScene Component
 ********************************************************/
const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene>();
    const mainCameraRef = useRef<THREE.OrthographicCamera>();
    const xRayCameraRef = useRef<THREE.PerspectiveCamera>();
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const composerRef = useRef<EffectComposer>();

    const requestRef = useRef<number>(0);

    // Render target for X-Ray camera
    const xRayRenderTargetRef = useRef<THREE.WebGLRenderTarget>();

    // 1) Pull states from context
    const { isPlaying, playAngle, setIsPlaying, handleStageRotationChange } = usePlay();

    // 2) Our local config array for building the scene
    const [configs, setConfigs] = useState<ComponentConfig[]>(beamlineConfig);

    // 3) References to objects we want to animate:
    const stageRef = useRef<THREE.Object3D | null>(null);
    const sampleRef = useRef<THREE.Object3D | null>(null);

    // Throttle timing for syncing rotation to playAngle
    const lastAngleSyncRef = useRef<number>(0);

    // Photon logic
    const maxPhotons = 500; // Define maximum number of photons
    const photonPoolRef = useRef<THREE.InstancedMesh | null>(null);

    // Photon data structure
    interface Photon {
        position: THREE.Vector3;
        velocity: THREE.Vector3;
        active: boolean;
    }

    // Initialize photon data
    const photonsRef = useRef<Photon[]>(Array.from({ length: maxPhotons }, () => ({
        position: new THREE.Vector3(-4, 0, 0), // Starting position
        velocity: new THREE.Vector3(1, 0, 0).multiplyScalar(0.05), // Moving along +X
        active: false,
    })));

    // Initialize lastPhotonEmitRef
    const lastPhotonEmitRef = useRef<number>(0);

    // Panel open/close
    const [panelOpen, setPanelOpen] = useState(true);
    const togglePanel = useCallback(() => setPanelOpen((prev) => !prev), []);

    // Cache for loaded FBX models to prevent reloading
    const fbxCache = useRef<Record<string, THREE.Group>>({});

    // Map to keep track of existing objects
    const objectMapRef = useRef<Record<string, THREE.Object3D>>({});

    /********************************************************
     * Initialize Scene / Cameras / Renderer once
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

        // Main Orthographic camera
        const aspect = w / h;
        const viewSize = 3;
        const mainCamera = new THREE.OrthographicCamera(
            -viewSize * aspect,
            viewSize * aspect,
            viewSize,
            -viewSize,
            0.1,
            100
        );
        mainCamera.position.set(-10, 10, 10);
        mainCamera.lookAt(0, 0, 0);
        mainCameraRef.current = mainCamera;

        // X-Ray Perspective camera
        const xRayCamera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
        xRayCamera.position.set(-1, 0, 0); // Positioned in front of the stage
        xRayCamera.lookAt(4, 0, 0); // Looking towards the detector
        xRayCameraRef.current = xRayCamera;

        // Configure X-Ray camera to only render Layer 1
        xRayCamera.layers.set(1);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        renderer.shadowMap.enabled = true; // Enable shadow maps
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: for softer shadows
        rendererRef.current = renderer;

        // Post-processing setup
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, mainCamera));

        // Optimize UnrealBloomPass settings
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0.25;
        bloomPass.strength = 0.3; // Reduced strength for performance
        bloomPass.radius = 0.03;   // Reduced radius for performance
        composer.addPass(bloomPass);
        composerRef.current = composer;

        // X-Ray Render Target
        const xRayRenderTarget = new THREE.WebGLRenderTarget(256, 256); // Reduced resolution for performance
        xRayRenderTargetRef.current = xRayRenderTarget;

        // Lights
        const ambientLight = new THREE.AmbientLight('#ffffff', 0.5); // Reduced intensity for performance
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight('#ffffff', 0.8);
        dirLight.position.set(-5, 12, 12);
        dirLight.castShadow = true; // Enable shadows for the directional light
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
        plane.receiveShadow = true; // Ground receives shadows
        scene.add(plane);

        // Initialize Photon InstancedMesh
        const photonGeometry = new THREE.SphereGeometry(0.05, 8, 8); // Smaller sphere for InstancedMesh
        const photonMaterial = new THREE.MeshStandardMaterial({
            color: '#BF83FC',
            transparent: true,
            opacity: 0.8,
            emissive: '#BF83FC',
            emissiveIntensity: 1,
            depthWrite: true, // Prevents depth conflicts
            blending: THREE.AdditiveBlending, // Adds glow effect
        });
        const instancedMesh = new THREE.InstancedMesh(photonGeometry, photonMaterial, maxPhotons);
        instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // Will be updated frequently
        instancedMesh.castShadow = false;
        instancedMesh.receiveShadow = false;
        instancedMesh.layers.set(0); // Ensure photons are on default layer
        scene.add(instancedMesh);
        photonPoolRef.current = instancedMesh;

        // Handle window resize
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
            xRayCamera.aspect = newAspect;
            xRayCamera.updateProjectionMatrix();
            renderer.setSize(newW, newH);
            xRayRenderTarget.setSize(256, 256); // Update render target size if needed
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
    }, []);

    /********************************************************
     * Memoize geometries and materials to reuse them
     ********************************************************/
    const geometries = useMemo(() => {
        return {
            cylinder: new THREE.CylinderGeometry(0.05, 0.05, 8, 16),
            box: new THREE.BoxGeometry(0.4, 0.4, 0.4),
            detector: new THREE.BoxGeometry(1, 1, 0.2),
            sphere: new THREE.SphereGeometry(0.05, 8, 8), // Smaller sphere for InstancedMesh
            customCylinder: new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16),
        };
    }, []);

    const materials = useMemo(() => {
        return {
            beam: new THREE.MeshStandardMaterial({
                color: '#9334E9',
                transparent: true,
                opacity: 0.6,
                emissive: '#9334E9',
                emissiveIntensity: 4
            }),
            sampleCube: new THREE.MeshPhongMaterial({ color: '#8c564b' }),
            sampleCylinder: new THREE.MeshPhongMaterial({ color: '#8c564b' }),
            detector: new THREE.MeshPhongMaterial({ color: '#1f77b4' }),
            photon: new THREE.MeshStandardMaterial({ 
                color: '#BF83FC', 
                transparent: true, 
                opacity: 0.8, 
                emissive: '#BF83FC', 
                emissiveIntensity: 1,
                depthWrite: false, 
                blending: THREE.AdditiveBlending, 
            }),
            stageSide: new THREE.MeshPhongMaterial({ map: sideTexture }),
            stageTopBottom: new THREE.MeshPhongMaterial({ map: topTexture }),
            beamStop: new THREE.MeshPhongMaterial({ color: '#DA2828', transparent: true, opacity: 1 }), // Initially opaque
        };
    }, []);

    /********************************************************
     * Define the X-Ray Shader Material
     ********************************************************/
    const xRayMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                xRayTexture: { value: null as unknown as THREE.Texture },
                shutterOpen: { value: 0.0 }, // Initialize to fully closed
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
                uniform float shutterOpen; // Changed from bool to float
                varying vec2 vUv;
                void main() {
                  // Sample the X-Ray texture
                  vec4 color = texture2D(xRayTexture, vUv);
                  // Convert to grayscale
                  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                  // Invert the grayscale value
                  gray = 1.0 - gray;
                  // Create the final color
                  vec3 finalColor = vec3(gray);
                  // Blend between black and the final color based on shutterOpen
                  finalColor = mix(vec3(0.0), finalColor, shutterOpen);
                  gl_FragColor = vec4(finalColor, color.a);
                }
            `,
        });
    }, []);

    /********************************************************
     * Build/Update the scene from configs incrementally
     ********************************************************/
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        // Create a Set of current config IDs
        const currentConfigIds = new Set(configs.map((cfg) => cfg.id));

        // Remove objects that are no longer in the config or set to invisible
        Object.keys(objectMapRef.current).forEach((id) => {
            const cfg = configs.find((c) => c.id === id);
            if (!cfg || !cfg.visible) {
                const obj = objectMapRef.current[id];
                if (obj.parent) {
                    obj.parent.remove(obj);
                }
                // Dispose geometry and material to free resources
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    if (Array.isArray(obj.material)) {
                        obj.material.forEach((mat) => mat.dispose());
                    } else {
                        obj.material.dispose();
                    }
                } else if (obj instanceof THREE.Group || obj instanceof THREE.Object3D) {
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
                delete objectMapRef.current[id];
            }
        });

        // Add or update objects based on current configs
        configs.forEach((cfg) => {
            if (!cfg.visible) return;

            let obj = objectMapRef.current[cfg.id];

            if (!obj) {
                // Object doesn't exist; create it
                switch (cfg.type) {
                    case 'beam': {
                        const beamModes = cfg.beamModes || [];
                        const beamGroup = new THREE.Group();
                        beamGroup.name = 'beam';

                        // Handle 'cylinder' mode
                        if (beamModes.includes('cylinder')) {
                            const geom = new THREE.CylinderGeometry(
                                cfg.geometry?.radius ?? 0.05,
                                cfg.geometry?.radius ?? 0.05,
                                cfg.geometry?.height ?? 8,
                                16
                            );
                            geom.rotateZ(Math.PI / 2); // Align along X-axis
                            const mat = materials.beam;
                            const cylinderMesh = new THREE.Mesh(geom, mat);
                            cylinderMesh.name = 'beam-cylinder';
                            cylinderMesh.castShadow = false;
                            cylinderMesh.receiveShadow = false;
                            beamGroup.add(cylinderMesh);
                        }

                        // 'photonStream' doesn't require a visible mesh; handled in animation loop

                        scene.add(beamGroup);
                        obj = beamGroup;
                        objectMapRef.current[cfg.id] = obj;
                        break;
                    }

                    case 'stage': {
                        const radius = cfg.geometry?.radius ?? 0.4;
                        const height = cfg.geometry?.height ?? 1;
                        obj = createCustomStage(radius, height, topTexture, sideTexture);
                        obj.castShadow = true;
                        obj.receiveShadow = true;

                        stageRef.current = obj; // We'll rotate this in the animation loop

                        // Apply initial position, rotation, and scale
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

                        scene.add(obj);
                        objectMapRef.current[cfg.id] = obj;
                        break;
                    }

                    case 'sample': {
                        const meshType = cfg.meshType ?? 'cube';
                        if (meshType === 'cube') {
                            obj = new THREE.Mesh(geometries.box, materials.sampleCube);
                            obj.castShadow = true;
                            obj.receiveShadow = true;
                        } else if (meshType === 'cylinder') {
                            obj = new THREE.Mesh(geometries.customCylinder, materials.sampleCylinder);
                            obj.castShadow = false;
                            obj.receiveShadow = false;
                        } else if (meshType === 'fbx') {
                            obj = new THREE.Object3D();
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
                                            child.layers.enable(1); // Assign to Layer 1 for X-Ray
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
                                                child.material = child.material.clone();
                                            }
                                        }
                                    });
                                    obj?.add(fbx);
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
                        break;
                    }

                    case 'detector': {
                        const w = cfg.geometry?.width ?? 1;
                        const hh = cfg.geometry?.height ?? 1;
                        const d = cfg.geometry?.depth ?? 0.2;
                        const geom = new THREE.BoxGeometry(w, hh, d);

                        // Define materials for each face with corrected X-Ray assignment
                        const detectorMaterials = [
                            materials.detector, // 0: Right (+X) → Front (+Z) after rotation
                            materials.detector, // 1: Left (-X) → Back (-Z) after rotation
                            materials.detector, // 2: Top (+Y)
                            materials.detector, // 3: Bottom (-Y)
                            materials.detector, // 4: Front (+Z)
                            xRayMaterial,      // 5: Back (-Z) → Assigned to the correct face
                        ];

                        const detectorMesh = new THREE.Mesh(geom, detectorMaterials);
                        detectorMesh.name = 'detector';
                        detectorMesh.castShadow = true;
                        detectorMesh.receiveShadow = true;
                        obj = detectorMesh;
                        break;
                    }

                    case 'beamStop': {
                        obj = createBeamStop(
                            cfg.geometry?.width ?? 0.2,
                            cfg.geometry?.height ?? 1,
                            cfg.geometry?.depth ?? 1,
                            '#DA2828',
                            cfg.shutterOpen ?? false // Pass current shutter state
                        );
                        obj.name = 'beamStop-shutter';
                        obj.castShadow = true;
                        obj.receiveShadow = true;
                        break;
                    }

                    default:
                        break;
                }

                // Apply transformations and add to parent
                if (obj) {
                    // Position, rotation, scale (for non-beam objects)
                    if (cfg.type !== 'beam') {
                        obj.position.fromArray(cfg.transform.position);
                        obj.rotation.set(
                            cfg.transform.rotation[0],
                            cfg.transform.rotation[1],
                            cfg.transform.rotation[2]
                        );
                        if (cfg.transform.scale) {
                            obj.scale.fromArray(cfg.transform.scale);
                        }
                    }

                    // Parent to 'stage' or 'beam' if specified
                    const parentId = cfg.parentId;
                    if (parentId && objectMapRef.current[parentId]) {
                        objectMapRef.current[parentId].add(obj);
                    } else {
                        scene.add(obj);
                    }

                    // **Assign Sample to Layer 1 for X-Ray Camera**
                    if (cfg.type === 'sample') {
                        obj.layers.enable(1);
                        sampleRef.current = obj; // Assign to sampleRef

                        // **If the sample is an Object3D (e.g., FBX), ensure all child meshes are on Layer 1**
                        if (obj instanceof THREE.Object3D) {
                            obj.traverse((child) => {
                                if (child instanceof THREE.Mesh) {
                                    child.layers.enable(1);
                                }
                            });
                        }
                    }

                    // Store in objectMapRef
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
                        if (obj instanceof THREE.Mesh) {
                            obj.material.opacity = cfg.shutterOpen ? 0.5 : 1;
                            obj.material.transparent = true;
                            obj.material.needsUpdate = true;
                            obj.castShadow = true;
                            obj.receiveShadow = true;
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

                    default:
                        break;
                }
            }
        });

        // Clean up objects that are no longer in the config
        Object.keys(objectMapRef.current).forEach((id) => {
            if (!currentConfigIds.has(id)) {
                const obj = objectMapRef.current[id];
                if (obj.parent) {
                    obj.parent.remove(obj);
                }
                // Dispose geometry and material to free resources
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    if (Array.isArray(obj.material)) {
                        obj.material.forEach((mat) => mat.dispose());
                    } else {
                        obj.material.dispose();
                    }
                } else if (obj instanceof THREE.Group || obj instanceof THREE.Object3D) {
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
                delete objectMapRef.current[id];
            }
        });

        // No need to re-render the entire scene; only added/updated objects are handled above
    }, [configs, geometries, materials, xRayMaterial, topTexture, sideTexture]);

    /********************************************************
     * Animation Loop: rotate stage + photon stream + beam adjustments + X-Ray rendering
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

        // Assign the X-Ray texture to the shader material
        xRayMaterial.uniforms.xRayTexture.value = xRayRenderTarget.texture;

        const clock = new THREE.Clock();

        const animate = () => {
            requestRef.current = requestAnimationFrame(animate);

            const delta = clock.getDelta();

            // 1) Render the scene from the X-Ray camera to the render target
            renderer.setRenderTarget(xRayRenderTarget);
            renderer.render(scene, xRayCamera);
            renderer.setRenderTarget(null); // Reset to default

            // 2) If playing, rotate the stage
            if (isPlaying && stageRef.current) {
                stageRef.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed

                // Throttle the update to playAngle so the slider stays in sync
                const now = performance.now();
                if (now - lastAngleSyncRef.current > 100) {
                    lastAngleSyncRef.current = now;
                    // Convert to degrees
                    const deg = THREE.MathUtils.radToDeg(stageRef.current.rotation.y) % 360;
                    handleStageRotationChange(deg);
                }
            }

            // 3) Handle beam modes
            const beamCfg = configs.find((c) => c.type === 'beam');
            const beamModes = beamCfg?.beamModes || [];
            const beamPower = beamCfg?.beamPower || 25; // Default to 25 keV if undefined

            // **Update Beam Emissive Intensity Based on Beam Power**
            materials.beam.emissiveIntensity = beamPower / 10; // Normalize (0-50 keV to 0-5)
            materials.beam.needsUpdate = true;

            // 3a) If 'photonStream' is active, emit photons at intervals
            if (beamModes.includes('photonStream') && beamCfg?.visible) {
                const now = performance.now();
                // Adjust emission interval based on beam power (higher power -> more frequent)
                const emissionInterval = Math.max(50, 200 - beamPower * 3); // 50ms to 200ms
                if (now - lastPhotonEmitRef.current > emissionInterval) { // Emit based on interval
                    lastPhotonEmitRef.current = now;
                    // Emit a new photon
                    const photons = photonsRef.current;
                    const availableIndex = photons.findIndex(p => !p.active);
                    if (availableIndex !== -1) {
                        const photon = photons[availableIndex];
                        photon.active = true;
                        photon.position.set(-4, 0, 0); // Starting position
                        // Adjust velocity based on beam power (higher power -> faster photons)
                        const baseSpeed = 0.05;
                        photon.velocity.set(1, 0, 0).multiplyScalar(baseSpeed + beamPower * 0.001); // Speed varies with power

                        // Update the InstancedMesh matrix for this photon
                        const matrix = new THREE.Matrix4();
                        matrix.setPosition(photon.position);
                        instancedMesh.setMatrixAt(availableIndex, matrix);
                        instancedMesh.instanceMatrix.needsUpdate = true;

                        console.log(`Photon emitted at index ${availableIndex}`);
                    }
                }
            }

            // 3b) Update active photons
            const photons = photonsRef.current;
            const instancedMatrix = new THREE.Matrix4();
            let maxActiveIndex = -1;

            photons.forEach((photon, index) => {
                if (photon.active) {
                    // Update position based on velocity and delta time
                    photon.position.add(photon.velocity.clone().multiplyScalar(delta * 60)); // Adjust multiplier as needed

                    // Check bounds to deactivate photon
                    const beamStopCfg = configs.find((c) => c.type === 'beamStop');
                    const shutterOpen = beamStopCfg?.shutterOpen || false;

                    if (
                        (!shutterOpen && photon.position.x >= -2) || // Shutter closed: remove at beamStop position
                        (shutterOpen && photon.position.x >= 4) // Shutter open: remove at detector position
                    ) {
                        photon.active = false;
                        return;
                    }

                    // Set instance matrix
                    instancedMatrix.setPosition(photon.position);
                    instancedMesh.setMatrixAt(index, instancedMatrix);

                    if (index > maxActiveIndex) {
                        maxActiveIndex = index;
                    }

                    console.log(`Photon ${index} position: ${photon.position.x.toFixed(2)}, ${photon.position.y.toFixed(2)}, ${photon.position.z.toFixed(2)}`);
                }
            });

            // Set count to the highest active index +1
            instancedMesh.count = maxActiveIndex + 1;
            instancedMesh.instanceMatrix.needsUpdate = true;

            // 4) Adjust beam length based on beamStop's shutter state
            const beamGroup = scene.getObjectByName('beam') as THREE.Group | null;
            const beamStopCfg = configs.find((c) => c.type === 'beamStop');
            const shutterOpen = beamStopCfg?.shutterOpen || false;

            if (beamGroup) {
                const beamCylinder = beamGroup.getObjectByName('beam-cylinder') as THREE.Mesh | null;
                if (beamCylinder) {
                    if (!shutterOpen) {
                        // Shutter is closed: shorten the beam to stop at beamStop's position (-2, 0, 0)
                        beamCylinder.scale.x = 0.25; // 8 * 0.25 = 2
                        beamCylinder.position.x = -3; // Shift to center between -4 and -2
                    } else {
                        // Shutter is open: extend the beam fully
                        beamCylinder.scale.x = 1; // Restore original scale
                        beamCylinder.position.x = 0; // Center at origin
                    }
                }
            }

            // 5) Render the main scene with post-processing
            composer.render();
        };

        animate();

        return () => {
            cancelAnimationFrame(requestRef.current);
            clock.stop();
        };
    }, [isPlaying, configs, handleStageRotationChange, geometries, materials, xRayMaterial]);

    /********************************************************
     * Synchronize 'configs' with 'playAngle'
     ********************************************************/
    useEffect(() => {
        // Update the 'stage' config with the current 'playAngle'
        setConfigs((prevConfigs) =>
            prevConfigs.map((cfg) =>
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

    // If the user moves the slider, we set the stage's rotation directly
    // plus update the context's playAngle so the label remains in sync.
    const handleManualAngleChange = useCallback(
        (val: number) => {
            handleStageRotationChange(val);
            if (stageRef.current) {
                stageRef.current.rotation.y = THREE.MathUtils.degToRad(val);
            }

            // **Update the 'configs' with the new rotation**
            setConfigs((prevConfigs) =>
                prevConfigs.map((cfg) =>
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

    // Updated handler to toggle multiple beam modes
    const handleBeamModeToggle = useCallback(
        (mode: 'cylinder' | 'photonStream') => {
            setConfigs((prev) =>
                prev.map((cfg) => {
                    if (cfg.type === 'beam') {
                        const currentModes = cfg.beamModes || [];
                        if (currentModes.includes(mode)) {
                            // Remove the mode
                            return { ...cfg, beamModes: currentModes.filter((m) => m !== mode) };
                        } else {
                            // Add the mode
                            return { ...cfg, beamModes: [...currentModes, mode] };
                        }
                    }
                    return cfg;
                })
            );
        },
        []
    );

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

    // Handler for toggling the shutter state
    const toggleShutter = useCallback(() => {
        setConfigs((prev) =>
            prev.map((cfg) =>
                cfg.type === 'beamStop' ? { ...cfg, shutterOpen: !cfg.shutterOpen } : cfg
            )
        );

        // Find the beamStop object in the scene
        const scene = sceneRef.current;
        if (!scene) return;

        const beamStop = scene.getObjectByName('beamStop-shutter') as THREE.Mesh | null;
        if (beamStop && beamStop.material instanceof THREE.MeshPhongMaterial) {
            // Determine the new shutter state
            const beamStopCfg = configs.find((c) => c.type === 'beamStop');
            const newShutterState = beamStopCfg ? !beamStopCfg.shutterOpen : true;

            // Set opacity based on the new shutter state
            beamStop.material.opacity = newShutterState ? 0.5 : 1;
            beamStop.material.transparent = true; // Ensure transparency is enabled
            beamStop.material.needsUpdate = true; // Inform Three.js to update the material

            // **Update the X-Ray Shader's shutterOpen uniform**
            xRayMaterial.uniforms.shutterOpen.value = newShutterState;

            // **Toggle Layer 1 visibility on the sample based on shutter state**
            if (sampleRef.current) {
                if (newShutterState) {
                    sampleRef.current.layers.enable(1); // Show sample to X-Ray camera
                } else {
                    sampleRef.current.layers.disable(1); // Hide sample from X-Ray camera
                }
            }
        }
    }, [configs, xRayMaterial]);

    /********************************************************
     * Handlers for Stage Movement
     ********************************************************/
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

    /********************************************************
     * Assign X-Ray Shader Uniforms Based on Shutter State
     ********************************************************/
    useEffect(() => {
        const beamStopCfg = configs.find((c) => c.type === 'beamStop');
        const shutterOpen = beamStopCfg?.shutterOpen || false;
        xRayMaterial.uniforms.shutterOpen.value = shutterOpen;

        // Toggle Layer 1 visibility on the sample based on shutter state
        if (sampleRef.current) {
            if (shutterOpen) {
                sampleRef.current.layers.enable(1); // Show sample to X-Ray camera
            } else {
                sampleRef.current.layers.disable(1); // Hide sample from X-Ray camera
            }
        }
    }, [configs, xRayMaterial]);

    /********************************************************
     * Layout / Panel Styles
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
        width: panelOpen ? '320px' : '0px', // Set to 0px when closed
        minWidth: panelOpen ? '320px' : '0px', // Ensures a minimum width when open
        maxWidth: panelOpen ? '320px' : '0px', // Ensures a maximum width when open
        overflowY: 'auto',
        borderLeft: panelOpen ? '1px solid #ccc' : 'none',
        backgroundColor: '#C1D3E3',
        transition: 'width 0.3s ease',
        boxShadow: panelOpen ? '2px 0 5px rgba(0,0,0,0.1)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // For toggle button positioning
        color: '#464B53',
        flexShrink: 0, // Prevent the panel from shrinking
    };
    const panelContentStyle: CSSProperties = {
        display: panelOpen ? 'flex' : 'none', // Hide content when panel is closed
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

    /********************************************************
     * Render
     ********************************************************/
    return (
        <div style={outerStyle}>
            <div style={panelStyle}>
                {panelOpen && (
                    <div style={panelContentStyle}>
                        <button
                            onClick={togglePanel}
                            style={{ ...buttonStyle, alignSelf: 'flex-end', backgroundColor: '#dc3545' }}
                            onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#c82333')}
                            onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#dc3545')}
                        >
                            Hide Panel
                        </button>
                        <h2 style={{ marginTop: '1rem', marginBottom: '1rem', color: '#07304B' }}>Controls</h2>

                        <button
                            onClick={handlePlayPause}
                            style={buttonStyle}
                            onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0056b3')}
                            onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#007bff')}
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

                        <div style={sectionStyle}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Beam Mode</h3>
                            <label style={checkboxLabelStyle}>
                                <input
                                    type="checkbox"
                                    name="beamMode"
                                    value="cylinder"
                                    checked={configs.find((c) => c.type === 'beam')?.beamModes?.includes('cylinder') || false}
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
                                    checked={configs.find((c) => c.type === 'beam')?.beamModes?.includes('photonStream') || false}
                                    onChange={() => handleBeamModeToggle('photonStream')}
                                    style={{ marginRight: '0.5rem' }}
                                />
                                Photon Stream
                            </label>
                        </div>

                        {/* New "Beam Power" Section */}
                        <div style={sectionStyle}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Beam Power</h3>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="range"
                                    min={0}
                                    max={50}
                                    step={0.1}
                                    value={configs.find((c) => c.type === 'beam')?.beamPower || 25}
                                    onChange={(e) => {
                                        const newPower = Number(e.target.value);
                                        setConfigs((prev) =>
                                            prev.map((cfg) =>
                                                cfg.type === 'beam'
                                                    ? { ...cfg, beamPower: newPower }
                                                    : cfg
                                            )
                                        );
                                    }}
                                    style={{ flex: 1, marginRight: '1rem' }}
                                />
                                <span>{configs.find((c) => c.type === 'beam')?.beamPower.toFixed(1) || 25} keV</span>
                            </div>
                        </div>

                        <div style={sectionStyle}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#555555' }}>Beam Stop</h3>
                            <button
                                onClick={toggleShutter}
                                style={{ ...buttonStyle, backgroundColor: '#28a745' }}
                                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#218838')}
                                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#28a745')}
                            >
                                {configs.find((c) => c.type === 'beamStop')?.shutterOpen ? 'Close Shutter' : 'Open Shutter'}
                            </button>
                        </div>

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
