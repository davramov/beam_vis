This is a prototype web app for visualizing synchrotron endstation hardware configurations and realtime motor positions.

- Quickly see if the beam is in line with the sample and detector
- At a glance check the current beam status


Future ideas:
- support multiple beamlines (tomo, ptycho, scattering ...), get feedback from a few BL scientists who are interested in having this developed further for their endstation
- "simulation" mode (preview motor settings) vs "realtime" mode (see current state of the system)
- find a balance between "cartoon" look and scientific accuracy
    - Does proportion matter so much as the validation (i.e. will the beam hit the sample and the detector)?
- receive motor positions from bluesky/epics/labview somehow
- integrate beam characteristics (power, flux, brightness, shape)
- alerts/warnings/sanity check -- provide some indication that the beam is out of alignment, shutter is closed, experiment is running
- user testing and evaluation
- camera controls. should the user be able to change the view, or would one perspective be fine? Options for a few views
    - worried about making it too cluttered/complicated. Could depend on how detailed users would want their diagram. Isolate the moving/critical components
- how do motor values translate to physical distances?
- if getting values directly from beamline controls software, there should be some indicator of connectivity or errors
- handle reflection modes (scattering techniques)
- beamline specific environment conditions, if applicable (ie temperature, pressure, humidity ...)
- include relevant text labels in the visualization (i.e. PV channel, detector, stage, ...)