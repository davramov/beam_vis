/**
 * @file BeamlineContainer.tsx
 * @description Loads a beamline configuration from a centralized file and renders the ThreeScene and ControlPanel.
 */

import {
    useState,
    useEffect,
    useMemo,
    ChangeEvent,
    CSSProperties,
    FC,
  } from 'react';
  import ThreeScene from './ThreeScene/ThreeScene';
  import ControlPanel from './ControlPanel/ControlPanel';
  import { ComponentConfig } from '../types/ComponentConfig';
  import { beamlineDefinitions, BeamlineDefinition } from '../beam_configs';
  
  const BeamlineContainer: FC = () => {
    // List available beamline keys from the centralized definitions.
    const availableBeamlines: string[] = useMemo(
      () => Object.keys(beamlineDefinitions),
      []
    );
  
    // Use the first available beamline as default.
    const [selectedBeamline, setSelectedBeamline] = useState<string>(
      availableBeamlines[0] || ''
    );
  
    // Current beamline definition (scene config, control layout, name).
    const [beamlineDefinition, setBeamlineDefinition] =
      useState<BeamlineDefinition | null>(null);
  
    // Local scene configuration state.
    const [configs, setConfigs] = useState<ComponentConfig[]>([]);
  
    // UI states for the control panel and animation.
    const [panelOpen, setPanelOpen] = useState<boolean>(true);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [playAngle, setPlayAngle] = useState<number>(0);
    const [cameraX, setCameraX] = useState<number>(-10);
    const [motorX, setMotorX] = useState<number>(0);
    const [motorY, setMotorY] = useState<number>(0);
    const [motorZ, setMotorZ] = useState<number>(0);
  
    // Load the beamline definition when the selected beamline changes.
    useEffect(() => {
      try {
        if (!selectedBeamline) {
          throw new Error('No beamline selected.');
        }
        const definition = beamlineDefinitions[selectedBeamline];
        if (!definition) {
          throw new Error(`Beamline definition for "${selectedBeamline}" not found.`);
        }
        setBeamlineDefinition(definition);
        setConfigs(definition.sceneConfig);
        // Reset additional states if needed.
        setPlayAngle(0);
        setMotorX(0);
        setMotorY(0);
        setMotorZ(0);
      } catch (error) {
        console.error(error);
        setBeamlineDefinition(null);
      }
    }, [selectedBeamline]);
  
    /**
     * Handler for changing the sample mesh type.
     * It updates the sample config (for type "sample") with the new mesh type and, if needed, a default meshUrl.
     */
    const handleSampleMeshChange = (meshType: 'cube' | 'cylinder' | 'fbx' | 'obj') => {
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.type === 'sample'
            ? {
                ...cfg,
                meshType,
                meshUrl:
                  meshType === 'fbx'
                    ? 'beam_vis/assets/bananas.fbx'
                    : meshType === 'obj'
                    ? 'beam_vis/assets/al-1795-0875.obj'
                    : undefined,
              }
            : cfg
        )
      );
    };
  
    /**
     * Toggles the control panel open/closed.
     */
    const togglePanel = () => setPanelOpen((prev) => !prev);
  
    /**
     * Toggles play/pause.
     */
    const handlePlayPause = () => setIsPlaying((prev) => !prev);
  
      
    /**
     * Updates the play angle and rotates the cylindrical stage.
     * @param val The new angle in degrees.
     */
    const handleManualAngleChange = (val: number) => {
      setPlayAngle(val);
      setConfigs((prev) =>
        prev.map((cfg) =>
          cfg.id === 'rotationStage'
            ? {
                ...cfg,
                transform: {
                  ...cfg.transform,
                  rotation: [0, (Math.PI * val) / 180, 0],
                },
              }
            : cfg
        )
      );
    };
  
    // Centering stage (sample parent) motor handlers.
    const handleCenteringStageXChange = (val: number) => {
      setMotorX(val);
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.id === 'centeringStage'
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
    };
  
    const handleCenteringStageYChange = (val: number) => {
      setMotorY(val);
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.id === 'centeringStage'
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
    };
  
    const handleCenteringStageZChange = (val: number) => {
      setMotorZ(val);
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.id === 'centeringStage'
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
    };
  
    /**
     * Updates the horizontal stage position along the X axis.
     * @param val - New X position.
     */
    const handleStageXChange = (val: number) => {
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.id === 'horizontalStage'
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
    };
  
    /**
     * Updates the horizontal stage position along the Y axis.
     * @param val - New Y position.
     */
    const handleStageYChange = (val: number) => {
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.id === 'horizontalStage'
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
    };
  
    /**
     * Updates the horizontal stage position along the Z axis.
     * @param val - New Z position.
     */
    const handleStageZChange = (val: number) => {
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.id === 'horizontalStage'
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
    };
  
    /**
     * Toggles the visibility of a component by its ID.
     * @param id - Component identifier.
     */
    const handleToggleVisibility = (id: string) => {
      setConfigs((prevConfigs) =>
        prevConfigs.map((cfg) =>
          cfg.id === id ? { ...cfg, visible: !cfg.visible } : cfg
        )
      );
    };
  
    /**
     * Handles beamline selection changes.
     * @param e - The change event.
     */
    const handleBeamlineChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const newBeamline = e.target.value;
      setSelectedBeamline(newBeamline);
    };
  
    // Inline styling for the right panel.
    const rightPanelStyle: CSSProperties = {
      width: 350,
      borderLeft: '1px solid #ccc',
      height: '100%',
      overflowY: 'auto',
    };
  
    if (!beamlineDefinition) {
      return <div>Loading beamline...</div>;
    }
  
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        {/* Left side: 3D Scene. The key forces a remount when the beamline changes */}
        <div style={{ flex: '1 1 auto', position: 'relative' }}>
          <ThreeScene key={selectedBeamline} sceneConfig={configs} />
        </div>
  
        {/* Right side: Beamline info, dropdown, and the ControlPanel */}
        <div style={rightPanelStyle}>
          <h2 style={{ margin: 0, padding: '8px' }}>
            Beamline: {beamlineDefinition.name}
          </h2>
          <select
            value={selectedBeamline}
            onChange={handleBeamlineChange}
            style={{ margin: '8px', marginBottom: '8px' }}
          >
            {availableBeamlines.map((beamline) => (
              <option key={beamline} value={beamline}>
                {beamline}
              </option>
            ))}
          </select>
  
          <ControlPanel
            key={selectedBeamline} // Force re-render when beamline changes
            panelOpen={panelOpen}
            togglePanel={togglePanel}
            configs={configs}
            setConfigs={setConfigs}
            isPlaying={isPlaying}
            handlePlayPause={handlePlayPause}
            playAngle={playAngle}
            handleManualAngleChange={handleManualAngleChange}
            cameraX={cameraX}
            setCameraX={setCameraX}
            motorX={motorX}
            motorY={motorY}
            motorZ={motorZ}
            handleCenteringStageXChange={handleCenteringStageXChange}
            handleCenteringStageYChange={handleCenteringStageYChange}
            handleCenteringStageZChange={handleCenteringStageZChange}
            handleStageXChange={handleStageXChange}
            handleStageYChange={handleStageYChange}
            handleStageZChange={handleStageZChange}
            handleToggleVisibility={handleToggleVisibility}
            controlLayout={beamlineDefinition.controlLayout}
            handleSampleMeshChange={handleSampleMeshChange}
          />
        </div>
      </div>
    );
  };
  
  export default BeamlineContainer;
  