This is a prototype digital twin web app for visualizing synchrotron endstation hardware configurations and realtime motor positions.

- Quickly see if the beam is in line with the sample and detector
- At a glance check the current beam status
- Check motor positions


Future ideas:
- support multiple beamlines (tomo, ptycho, scattering ...), get feedback from a few BL scientists who are interested in having this developed further for their endstation
- "simulation" mode (preview motor settings) vs "realtime" mode (see current state of the system)
- find a balance between "cartoon" look and scientific accuracy
    - Does proportion matter so much as the validation (i.e. will the beam hit the sample and the detector)?
- receive motor positions from bluesky/epics/labview somehow (arroyo?)
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


beamline documentation for reference and ideas:
- 8.3.2 https://docs.google.com/document/d/1HS1JGa5g1Q6tOlsdKt3GT6ZP9WKGtlbVj1CCzGv92Fk/edit?tab=t.0
    - Source Size: ~220 x 30 μm fwhm
    - Beam size at sample: 40 mm x ~4.6mm (2 x 0.23 mr @ 20 m)
    - source-monochromator (14 m)
    - beryllium window (few cm before sample)
    - source-sample (20 m)
    - horizontal and vertical tiling
    - sample-detector distance can be varied from ~1.5 cm to 1.5 m
    - lenses
    - 3 monochromator options
    - camera rail system
    - mirror after scintillator @ 60 degrees
    - EPS interface
    - BCS vs ACQ computers



Feedback:

- Liz: That just made my day! This will be great for presentations. One use case is making the sample alignment process more user friendly. Show how the two motors are nested together.
- Dula: Sees an impact for remote-access and visualization, stage alignment, and thinks it would be useful for other endstations where the equipment is completely shielded. In "test" mode we should be able to use the EPICS bridge to capture motor values, etc.
- Alex: The x-ray texture should stay the same size (orthographic camera). Different colored beam based on monochromator that is selected (white, pink, ...). A slider that moves the camera upstream and downstream. The beamstop should move out of the way.
- Seij: Connect with beamline in a box
- Garrett: Connect with radius 


related work:

https://controlssoftware.sns.ornl.gov/css_phoebus/
https://www.sirepo.com/srw#/beamline/huSxLxoc?tab=beamline3d
