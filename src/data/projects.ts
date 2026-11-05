// Portfolio content. Every figure here is taken from the Engineering Brain vault
// (project Overview notes) or resume-tailor/resume_data.yaml. Do not add numbers
// that are not in those sources.
import type { ImageMetadata } from 'astro';
import becEvtol from '../assets/figures/bec-evtol.png';
import evtolLinkagePod from '../assets/figures/evtol-linkage-pod.png';
import fftPsd from '../assets/figures/fft-psd.png';
import gnssRtkPpk from '../assets/figures/gnss-rtk-ppk.png';
import tgTiltAssembled from '../assets/figures/tg-tilt-assembled.png';
import tgTiltExploded from '../assets/figures/tg-tilt-exploded.png';
import bergrSystem from '../assets/figures/bergr-system.jpg';
import bergrScout from '../assets/figures/bergr-scout.png';
import bergrRover from '../assets/figures/bergr-rover.png';
import bergrDock from '../assets/figures/bergr-dock.png';
import bergrScoutCad from '../assets/figures/bergr-scout-cad.png';
import bergrRetrievalCad from '../assets/figures/bergr-retrieval-cad.png';
import bergrScoutFea from '../assets/figures/bergr-scout-fea.jpg';
import bergrRetrievalFea from '../assets/figures/bergr-retrieval-fea.jpg';
import bergrWindTunnel from '../assets/figures/bergr-wind-tunnel.jpg';
import vtiMcity from '../assets/figures/vti-mcity.jpg';
import vtiMounted from '../assets/figures/vti-mounted.png';
import vtiHullCad from '../assets/figures/vti-hull-cad.jpg';
import vtiAltaxCad from '../assets/figures/vti-altax-cad.png';
import vtiLayout from '../assets/figures/vti-layout.png';
import foCellPhoto from '../assets/figures/fo-cell-photo.jpg';
import foAlphaTop from '../assets/figures/fo-alpha-top.png';
import foAlphaUnder from '../assets/figures/fo-alpha-under.png';
import foReachTest from '../assets/figures/fo-reach-test.png';
import foAlphaCell from '../assets/figures/fo-alpha-cell.png';
import foNesting from '../assets/figures/fo-nesting.png';
import foRailSpacing from '../assets/figures/fo-rail-spacing.png';

export const profile = {
  name: 'David Angelou',
  statement:
    'Mechanical engineer who designs, analyzes and tests drone and eVTOL hardware.',
  school: 'University of Michigan, B.S.E. Mechanical Engineering, Class of 2027',
  email: 'djangel@umich.edu',
  linkedin: 'https://www.linkedin.com/in/david-angelou',
  github: 'https://github.com/angeloudavidj-png',
};

export type Status = 'complete' | 'in progress';

export interface Figure {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  context: string;
  dates: string;
  status: Status;
  role: string;
  summary: string;
  goal: string;
  progress: string[];
  did: string[];
  next: string[];
  results: { value: string; label: string; check?: string }[];
  building?: { title: string; detail: string }[];
  challenges?: { title: string; detail: string }[];
  figure?: Figure;
  gallery?: Figure[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: 'bergr',
    title: 'BERGR',
    context: 'Rover and drone retrieval system, Belcan Aerospace sponsored program',
    dates: 'Aug 2025 to May 2026',
    status: 'complete',
    role: 'Only mechanical engineer on a 15-person team',
    summary:
      'A ground rover that hosts, charges and talks to two autonomous drones: a scout that searches an area for targets and a heavy-lift drone that retrieves them. The full system did not fly integrated: the scout’s power board failed about an inch off the ground, and the test data went to the next cohort.',
    goal:
      'Give Belcan a rover that hosts, charges and talks to a fleet of drones that scout a 930 m² area in 7 minutes, find targets and retrieve payloads up to 1 lb, for under $10,000 a year. BERGR was year two of a three-year program: add a scout drone, integrate the heavy-lift drone inherited from the year before, build the rover’s power and communications module, and give all three one user interface.',
    progress: [
      'Took the system through four gate reviews, SRR to FRR, peaking at 70% green requirements at CDR.',
      'Rover module built and structurally tested, with its power system installed.',
      'Retrieval drone arm and end effector working.',
      'Wind tunnel, structural FEA and magnetic take-off tests closed out.',
      'All three subsystems finished under budget: rover $2,624 of $3,095, scout $1,467 of $1,905, retrieval $281 of $1,000.',
      'The scout drone lifted about an inch before its power board failed, so the full system did not fly integrated by semester end. Documentation and component test data went to the next cohort.',
    ],
    did: [
      'Ran Ansys structural FEA on both drones to set landing limits against Al 6061-T6 yield.',
      'Designed the magnetic charging alignment with 8-pin pogo-pin docking connectors.',
      'Ran the scout drone body in the U-M 2x2 ft wind tunnel and compared measured drag with CFD.',
      'Contributed to the full Siemens NX models of both drones and designed structural components in NX.',
      'Machined structural brackets on mill and lathe, and designed gear train components using GD&T and tolerance stack-ups.',
      'Built the Cameo MBSE model and carried requirement traceability through SRR, PDR, CDR and FRR.',
    ],
    next: [
      'Replace the scout drone’s power board, rewire it to match the retrieval drone’s working layout, then check its speed controllers.',
      'Fit replacement speed controllers to the retrieval drone and flight test it.',
      'Finish the rover’s funnel mechanism and clean up its power layout (excess wire length, component placement).',
      'Year three (2026-27 cohort): add a third drone and make the rover mobile, within the mass, propeller and footprint limits set at CDR.',
    ],
    results: [
      { value: '280 N', label: 'vertical impact at which the scout frame yields (4.94 m/s)', check: 'Ansys static FEA, Al 6061-T6' },
      { value: '1.5 m/s', label: 'horizontal touchdown limit for the retrieval drone' },
      { value: '±8 mm', label: 'charging dock alignment tolerance, ±15° in rotation, 3.81 cm capture range' },
      { value: 'Cd ≈ 1.0', label: 'scout drone drag coefficient from wind tunnel data', check: 'U-M 2x2 ft wind tunnel, compared with CFD' },
      { value: '119 → 38', label: 'system risk priority number from PDR to CDR, through FMEA-driven fixes', check: 'FMEA across four gate reviews' },
    ],
    challenges: [
      {
        title: 'Landing loads that came from the side, not from above',
        detail:
          'The obvious landing case is a hard vertical drop, and the scout frame handled that well: in Ansys it only reached the Al 6061-T6 yield at 280 N, a 4.94 m/s fall, with a safety factor of 5.4 at its normal weight. The combined case told a different story. Adding just 25 N of sideways load to a 50 N touchdown pushed the leg to 431 MPa, a safety factor of 0.64. Drift at touchdown, not drop height, was what would break the drone. That became a requirement on the autopilot (DRNSTR.10): the scout must touch down below 0.742 m/s horizontal, and the heavier retrieval drone, whose combined case reached a safety factor of 1.01 at 1.54 m/s, below 1.5 m/s.',
      },
      {
        title: 'Docking magnets that also had to let go',
        detail:
          'The rover charges each drone through an 8-pin pogo-pin connector, and the pins only work if the drone lands within a few millimeters of the dock. Magnets pull the drone into place, giving a 3.81 cm capture range and tolerating ±8 mm of offset and ±15° of rotation. But the same magnets add a force the drone has to break at takeoff. Our first approach was to design the dock around the magnets we had, which was backwards. We sized the magnets to fit the system instead, then ran a magnetic take-off test: both drones cleared the dock at flight throttle without running out of propulsion margin.',
      },
      {
        title: 'No drag data for the scout drone',
        detail:
          'Belcan required the system to work in winds up to a set limit, but the scout drone had no drag data to check that against. I ran its body in the U-M 2x2 ft wind tunnel at 10 to 40 mph and measured drag from 0.48 N to 5.65 N, which gave a drag coefficient of about 1.0, and compared it with CFD. Feeding that into a takeoff-deflection model gave a maximum launch wind of 91.6 km/h for the scout and 84.2 km/h for the retrieval drone. With a safety factor of 2.5 on the lower limit, the operational limit came out at about 33.6 km/h, well above Ann Arbor\'s 26.9 km/h average, which closed the environmental requirement.',
      },
    ],
    figure: {
      src: bergrSystem,
      alt: 'Lab photo of the rover module: an aluminum rail frame with landing pads, the heavy-lift hexacopter on one pad and the scout quadcopter on another.',
      caption: 'The rover module frame in the lab, with the retrieval hexacopter and the scout quadcopter on their pads.',
    },
    gallery: [
      {
        src: bergrScoutCad,
        alt: 'Siemens NX CAD model of the scout quadcopter in isometric view, with landing gear and avionics on the center plate.',
        caption: 'Scout drone in Siemens NX, from the preliminary design review.',
      },
      {
        src: bergrRetrievalCad,
        alt: 'Siemens NX CAD model of the retrieval hexacopter in isometric view, with its arm and soft end effector hanging below the frame.',
        caption: 'Retrieval drone with arm and end effector in Siemens NX, from the preliminary design review.',
      },
      {
        src: bergrScoutFea,
        alt: 'Ansys total deformation plot of the scout drone landing gear, with its legend showing a maximum of 0.0085428 m at the skid.',
        caption: 'Scout landing gear in Ansys under a 50 N touchdown plus 25 N sideways: 8.54 mm of lateral lean.',
      },
      {
        src: bergrRetrievalFea,
        alt: 'Ansys von Mises stress plot of the retrieval drone landing gear, with its legend showing a maximum of 2.7538e8 Pa.',
        caption: 'Retrieval landing gear in Ansys under a 12 kN vertical load: 275 MPa peak stress, about the Al 6061-T6 yield.',
      },
      {
        src: bergrWindTunnel,
        alt: 'Scout drone mounted in the test section of the University of Michigan 2 by 2 foot wind tunnel, seen through the glass.',
        caption: 'Scout drone in the U-M 2x2 ft wind tunnel, tested at 10 to 40 mph.',
      },
      {
        src: bergrScout,
        alt: 'Close-up of the scout drone avionics: power distribution board, speed controller wiring and a telemetry radio labelled Mason.',
        caption: 'Scout drone avionics: power board, ESC wiring and the 915 MHz telemetry radio.',
      },
      {
        src: bergrRover,
        alt: 'Rover module base on the floor: three aluminum pads joined by parallel aluminum rails.',
        caption: 'Rover module base: aluminum pads on rails, before the drones and electronics were mounted.',
      },
      {
        src: bergrDock,
        alt: 'CAD render of a cylindrical charging dock with four threaded posts on top and side bolt holes.',
        caption: 'Charging dock CAD from the critical design review.',
      },
    ],
  },
  {
    slug: 'vti-payload',
    title: 'VTI Aerospace Payload',
    context: 'Sensor payload for voice-commanded drones, University of Michigan research',
    dates: 'Jan 2026 to present',
    status: 'in progress',
    role: 'Physical payload lead on a 6-person team',
    summary:
      'A payload that lets an emergency dispatcher send a drone to a scene by voice, so it arrives before responders and streams what it sees.',
    goal:
      'Cut the dispatch delay in cardiac emergencies, where every minute without defibrillation lowers survival by 7 to 10%. A dispatcher speaks the mission in plain English, the drone flies to the scene ahead of responders, and the payload streams live video with detected objects back to dispatch. The payload is meant to bring that autonomy to any drone.',
    progress: [
      'Boat-hull payload designed, built and mounted on the Freefly Alta X. A preliminary payload box flew on the Alta X at MCity.',
      'GPS and landmark navigation working in simulation.',
      'OpenCV object detection working in simulation.',
      'Voice commands partly working in simulation (Whisper speech-to-text into GPT-4o command parsing).',
      'Basic drone commands and instant handoff to the RC pilot working.',
      'Trade study for an AED delivery module: lower a defibrillator on a tether from 10 to 15 m, sense touchdown with a load cell, with a weak link and powered tether cutter as failsafes.',
    ],
    did: [
      'Designed a PETG boat-hull enclosure (210 x 165 x 130 mm) targeting 30 to 45% drag reduction, mounted to the Freefly Alta X rail with Adel clamps.',
      'Designed the 44.4 V to 12 V DC-DC power conversion for the Jetson Orin NX.',
      'Selected rubber-in-shear isolation mounts meant to decouple compute and camera from rotor vibration above about 50 Hz.',
      'Led the PETG, ABS and aluminum material trade at the Jetson’s 10 to 40 W heat load.',
      'Wrote the team’s technical reference covering structural, thermal, vibration and aerodynamic analysis.',
    ],
    next: [
      'Flight test the boat-hull enclosure.',
      'Autonomous search pattern.',
      'Autonomous navigation to a detected object.',
      'More robust object detection.',
      'Build and test the AED delivery module as a separate unit, so it does not change the sensing payload’s aero, thermal or vibration design.',
    ],
    results: [
      { value: '≤ 1.16 kg', label: 'estimated payload mass (0.76 to 1.16 kg) on a 35 lb capacity octorotor' },
      { value: '30 to 45%', label: 'targeted drag reduction from the boat-hull form' },
      { value: '~50 Hz', label: 'design target: the mounts decouple the enclosure from rotor vibration above this frequency' },
    ],
    challenges: [
      {
        title: 'About 50 W of heat in a one-liter box',
        detail:
          'The Jetson Orin NX and its power converter put out about 50 W inside an enclosure of roughly one liter, so the air inside heats up fast. That ruled out PLA, the default printing plastic: its heat deflection temperature of 55 to 60°C is about what the Jetson\'s surface reaches. I led a material trade across PLA, PETG, ABS, ASA, nylon and aluminum and chose PETG (75 to 80°C), which prints reliably, paired with a 40 mm blower that pulls air over the heatsink and out through side vents. We also fixed an early stacking mistake that had the Jetson above the DC-DC converter. Heat rises, so the corrected stack puts the Jetson below and the converter above, which also made it easier to service. The planned bench test is 20 minutes under load with the junction kept below 85°C.',
      },
      {
        title: 'Rotor vibration blurring the camera',
        detail:
          'Even with the Alta X\'s ActiveBlade system cutting peak vibration to a fifth, residual vibration at motor frequencies and airframe resonances remains. The ZED X One camera blurs and shows shutter artifacts above about 50 Hz. I isolated the whole enclosure from its clamp plate with four rubber-in-shear grommets, one per corner, intended to decouple everything above about 50 Hz, so the camera and compute ride on their own soft mount instead of the frame.',
      },
      {
        title: 'Mounting to a drone we couldn’t modify',
        detail:
          'The payload had to go onto the Freefly Alta X without drilling or changing the airframe, and it had to sit on the centerline. A payload off center by more than 1 to 2 cm would upset the flight controller. I mounted it to the Alta X\'s 12 mm rails with MS21919 cushioned aerospace clamps, matched to the rail diameter within ±0.5 mm and spaced 149 to 150 mm apart, torqued to spec and safety-wired. The enclosure itself is a boat-hull shape (210 x 165 x 130 mm) to cut drag over a plain box. The enclosure was mounted this way. The MCity flight carried a preliminary payload box.',
      },
    ],
    figure: {
      src: vtiMcity,
      alt: 'Freefly Alta X octorotor on an asphalt test track with its propellers removed and a red payload box attached beneath the frame.',
      caption: 'Preliminary payload box attached under the Freefly Alta X at MCity, with propellers removed for ground testing.',
    },
    gallery: [
      {
        src: vtiMounted,
        alt: 'Close-up of a black payload enclosure mounted beneath the Alta X carbon frame, indoors on a workbench.',
        caption: 'Payload enclosure mounted beneath the Alta X frame.',
      },
      {
        src: vtiHullCad,
        alt: 'CAD render of the boat-hull payload enclosure, a rounded box with vent holes along the upper edge.',
        caption: 'Boat-hull enclosure CAD, shaped to cut drag over a square box.',
      },
      {
        src: vtiAltaxCad,
        alt: 'CAD render of the Alta X octorotor with the payload enclosure mounted beneath the center frame.',
        caption: 'The payload integrated on the Alta X in CAD.',
      },
      {
        src: vtiLayout,
        alt: 'Section diagram of the enclosure: DC-DC converter above the Jetson, a blower fan pulling air from an inlet to side exhaust vents, and a downward-facing camera.',
        caption: 'Internal layout: blower airflow over the Jetson and DC-DC converter, camera looking down.',
      },
    ],
  },
  {
    slug: 'truegrade',
    title: 'Project TrueGrade',
    context: 'Construction-site mapping drone, UM Mapping Drone Team',
    dates: '2026 to present',
    status: 'in progress',
    role: 'Positioning subsystem (receiver bring-up, field testing, test report) and concept airframe CAD',
    summary:
      'A student team building an autonomous drone that maps construction progress with LiDAR, a 4K camera and a thermal imager. Version 1, a single drone, is targeted for April 2027.',
    goal:
      'Track construction progress from the air. LiDAR builds a georeferenced 3D model of the site over time, a 4K camera checks rebar and concrete placement against the blueprints, and a thermal imager records concrete curing on designated pours. Version 1 is one drone producing an accuracy-quantified site model (10 mm horizontal RMSE target) by April 2027. Version 2 adds a second drone for speed and coverage.',
    progress: [
      'Needs and leveled requirements at v0.3, with a verification and validation pathway.',
      'Trade studies on RTK against PPK, arm and motor, GNSS to flight controller integration, and LQR against PID control.',
      'GNSS receiver brought up and field tested. Test report at revision E.',
      'Concept airframe CAD at Rev J, plus the tilted-LiDAR variant. Tilting the LiDAR 38° makes its steepest clear ray go from 52° below horizontal to straight down, cuts blocked rays from 11.3% to 4.2%, and raises the dark-target height ceiling from about 29 m to about 37 m, for 49 g more mass.',
    ],
    did: [
      'Brought up a u-blox RTK/PPK receiver and wrote the logging and analysis tools.',
      'Ran static, walking and roof-mounted drive tests, including a 67 minute drive.',
      'Traced a 65.6 mm RTK against PPK height offset to missing antenna calibration data and brought the two within 0.6 mm.',
      'Wrote the test report TG-GNSS-TR-001, now at revision E.',
      'Built the concept airframe in SolidWorks (221 bodies) and a variant with the Livox Mid-360 LiDAR tilted 38° on a printed wedge, so it scans both the building below and obstacles in the drone’s path while minimizing how much of the scan hits the drone.',
      'Ray-cast the LiDAR scan against the airframe to compare the level and tilted mounts, and checked the new parts for clashes, mass and CG shift.',
    ],
    next: [
      'Data filtration: filter and thin the LiDAR point clouds so they open in survey software. A working surveyor told us clouds over 50 million points freeze Civil 3D, so the delivered model has to be thinned and classified.',
      'Flight controller customization: bring the firmware up in simulation and then on the bench, tune it, and implement the failsafes, geofence and correction-age check.',
      'Mass budget and motor tests: bring down the concept’s estimated 3.1 kg all-up mass and measure real thrust from the motor options on a test stand.',
      'Build the v1 drone and test it in a live environment: bench, tethered and simulation tests first, then autonomous mapping flights with an accuracy report against independent checkpoints, by April 2027.',
      'Move the battery bay about 11 mm forward to bring the CG back to center with the tilted LiDAR.',
      'Swap the PETG wedge for metal: Livox recommends mounting the LiDAR on metal for heat. A pocketed 6061 wedge would meet that, at more mass.',
      'Calibrate the 38° tilt into the LiDAR-to-IMU boresight once, and lock it.',
      'Lock the remaining placeholder requirement numbers and freeze them at SRR.',
    ],
    building: [
      {
        title: 'A custom flight controller',
        detail:
          'We are building a custom flight controller for the mission. It has to run the survey autonomously and fail safely: geofence, operator override, health monitoring of every critical subsystem, and defined responses to faults such as losing the command link. It also carries a lesson from our own GNSS testing: the receiver can report a FIXED solution while its position drifts, so anything using position data checks correction age as well.',
      },
      {
        title: 'Ground control stations',
        detail:
          'We are also building the ground control stations the operator flies the mission from. The operator can upload, start, pause and recall a mission, and sees live battery charge, link status, flight mode, mission progress, altitude and position. The ground side also delivers the RTK corrections that keep the drone’s positioning accurate across a session.',
      },
    ],
    results: [
      { value: '3.8 mm', label: 'horizontal RMSE in static RTK, against a 10 mm requirement (precision only; accuracy needs a surveyed truth point)', check: 'Two static sessions of 38 and 51 min on consecutive days' },
      { value: '65.6 → 0.6 mm', label: 'RTK against PPK height difference, after tracing it to a missing L5 antenna calibration', check: 'Nine reprocessing runs of the same 51-minute log' },
      { value: '11.3% → 4.2%', label: 'LiDAR rays blocked by the airframe, level against tilted mount', check: '432-ray cast from the LiDAR optical origin in the CAD model' },
    ],
    challenges: [
      {
        title: 'A 65.6 mm height disagreement between two positioning methods',
        detail:
          'The first time we post-processed a log (PPK) and compared it with live RTK on the same data, the two agreed horizontally within 2 to 4 mm but differed by 65.6 mm in height, more than three times the 20 mm vertical requirement. I reprocessed the same 51-minute log nine times, changing one setting each time. The antenna calibration file had no L5-band values for the Michigan DOT reference station antenna, and the processing software silently used zero, which accounted for 42 mm. The remaining 23 mm came only from the L5 signals, most likely from our own uncalibrated rover antenna. With a complete calibration file and L1 plus L2 signals, RTK and PPK heights now agree to 0.6 mm.',
      },
      {
        title: '“FIXED” that wasn’t fixed',
        detail:
          'During four correction dropouts of 38 to 55 seconds, the receiver kept reporting a FIXED solution while its position drifted up to 148 mm, and the drift rate changed about fivefold between days, so it could not be predicted. That means the fix flag alone can’t be trusted for photo geotagging or flight software. I proposed a derived requirement that anything using positions also check correction age, with a 5-second limit, and added link-event logging to our tools. On the next field day that log explained all 15 dropouts: the internet path dropped and the reconnect took 60 to 77 seconds.',
      },
      {
        title: 'The airframe blocking the LiDAR’s scan',
        detail:
          'In the level-mounted design, a ray cast from the Livox Mid-360’s optical origin showed 11.3% of its rays hitting the drone’s own belly and landing gear, and its steepest clear ray only reached 52° below horizontal, so it could never see straight down. I built a variant that tips the LiDAR 38° on a printed wedge, opened the belly shell around it with 2 mm clearance, and checked every new part and fastener against the rest of the assembly, with zero clashes. Blocked rays fell to 4.2%, the scan now reaches straight down, and the height ceiling for dark targets rose from about 29 m to about 37 m, for 49 g more mass.',
      },
    ],
    figure: {
      src: tgTiltAssembled,
      alt: 'CAD render of the TrueGrade quadcopter with the tilted LiDAR under the belly and its scan cone shown as a shaded fan.',
      caption: 'Concept airframe with the LiDAR tilted 38°. The shaded fan is the scan cone, which now reaches straight down.',
    },
    gallery: [
      {
        src: tgTiltExploded,
        alt: 'Exploded CAD view of the TrueGrade drone: canopy, electronics stack, frame plates and arms, belly shell, LiDAR on its wedge, camera gimbal and landing gear.',
        caption: 'Exploded assembly, from the canopy and electronics stack down to the belly, LiDAR wedge and landing gear.',
      },
      {
        src: gnssRtkPpk,
        alt: 'Two time series of the difference between live RTK and post-processed PPK positions, horizontal and vertical, with correction dropouts highlighted.',
        caption: 'Live RTK against post-processed PPK over 50 minutes. Red points are correction dropouts.',
      },
    ],
  },
  {
    slug: 'foot-orthosis',
    title: 'Foot Orthosis Project',
    context: 'Milling custom foot orthoses in-house, ME 450 capstone sponsored by the UM Orthotics and Prosthetics Center',
    dates: 'Fall 2026',
    status: 'in progress',
    role: 'Team member, team of four',
    summary:
      'Setting up the clinic’s Vorum Forma ST carver, built for polyurethane mold blocks, to mill EVA foam insoles in-house instead of sending them out with a 4 to 6 week lead time.',
    goal:
      'The UM Orthotics and Prosthetics Center outsources its custom foot orthoses at $75 to $130 a pair and waits 4 to 6 weeks for them, even though it already owns a Vorum Forma ST robotic mill. The clinic gets 1 to 2 orthosis orders a day and wants one milling run a week, with about eight orthoses carved from one standard EVA sheet. The deliverable is not a new product but a validated manufacturing process: the EVA starting block defined in VorumCAM, a fixture that holds the sheet on the mill’s rotary table, and a standard procedure that lets clinic technicians run it on their own after the team leaves.',
    progress: [
      'DR1 presented and reported (Oct 1 and Oct 8). DR2 presented Oct 15, report written Oct 27.',
      'Set specifications with the sponsor and Vorum: within ±1 mm of the STL, carve time of 30 min or less per orthosis, setup of 5 min or less, at least 8 orthoses per run, hold-down above 2.5 N/cm², more than 10 mm tool clearance, and a procedure trained staff can follow alone in under an hour.',
      'A live reach test in VorumCAM with Vorum showed the robot cannot reach every corner of a flat sheet, so where the sheet mounts became the main design decision.',
      'Filtered 60+ concepts through machine-rule, sponsor-scope, crash-safety and feasibility gates to two mount options. A full sheet flat on a riser beat an inclined fixture, 3.95 to 3.55.',
      'Built six new system concepts from the sponsor, instructor and reviewer feedback after DR2. The two-rail riser scored highest again, 4.00 against 3.80 for a full perimeter frame.',
      'Alpha design: an aluminum base plate clamped to the rotary table’s T-slots, two 1.5 x 3 in 80-20 rails spaced 8.36 in apart with 3.32 in overhangs (set by the deflection analysis), a ¾ in MDF waste board faced flat in place by the robot, and the EVA held with carpet tape. It takes adhesive or mechanical clamping without a redesign.',
      'Scope settled with the sponsor: use the standard EVA sheet and the existing 12 mm carbide ball-nose cutter, cut perpendicular to the block only, and leave spindle speed and feed tuning to clinic staff.',
    ],
    did: [
      'Generated 20 of the team’s 60+ fixture concepts using brainstorming, a morphological chart, Design Heuristics and TRIZ.',
      'Built the pass/fail filtration and morphological chart that took the concepts down to two mount options, with every removal traced to a written source.',
      'Modeled the mount options inside the Forma ST cell from Vorum’s cell geometry to check robot reach and crash clearance.',
      'Ran both weighted decision matrices and wrote the concept generation and selection sections of the DR2 report.',
    ],
    next: [
      'Get Vorum’s approval to face MDF in the cell, since the Forma ST manual lists carving wood as a prohibited use.',
      'Confirm how much weight the rotary table can carry and a technician can lift into place, which may change the alpha design.',
      'Choose the tape (carpet tape, 3M 9415PC or 410M, or Nitto 5000NS) and force-gauge test its hold-down. Confirm the hold method with the sponsor.',
      'FEA of the fixture in SolidWorks to back up the hand deflection calcs, and research Amfit’s EVA fixtures per the DR2 reviewer.',
      'Simulate every carve in VorumCAM and review it with Vorum, then build the fixture and submit the ME 450 safety plan before any cutting.',
      'Mill one orthosis under clinic supervision, scan it against the STL for geometry and surface finish, then carve all 8 from one sheet.',
      'Write the standard procedure. DR3 Nov 10, Design Expo Dec 10, final report Dec 18.',
    ],
    results: [
      { value: '8', label: 'men’s US 10 insoles nested on one standard 457 x 914 mm EVA sheet, meeting the sponsor’s target', check: 'Nesting layout, insole size assumed until the sponsor’s STL files arrive' },
      { value: '0.10 mm', label: 'worst-case waste board deflection under a 50 N cutting load, ¾ in MDF', check: 'Beam deflection hand calcs, rails placed so mid-span and overhang deflect equally' },
      { value: '60+ → 1', label: 'brainstormed fixture concepts narrowed to the alpha design', check: 'Pass/fail gates, then two weighted decision matrices' },
    ],
    challenges: [
      {
        title: 'A robot that can’t reach every corner of the sheet',
        detail:
          'The obvious plan was to lay the full EVA sheet flat in the cell, but a live reach test in VorumCAM with Vorum’s CAM specialist threw unreachable-position errors over parts of the sheet. That made where the sheet sits, not how it is held, the decision with the biggest consequence. We filtered 60+ concepts through pass/fail gates for machine rules, sponsor scope, crash safety and feasibility, which left four mount families, then removed the half sheet (half the insoles per run) and the vertical sheet (a 900 mm tall flexible sheet is hard to support). The flat riser on the rotary table won both scoring rounds.',
      },
      {
        title: 'A sheet twice as long as the table it sits on',
        detail:
          'The standard 457 x 914 mm sheet is about twice as long as the 450 mm rotary table, so the fixture overhangs it, by 125 mm on one side and 339 mm on the other, and has to stay flat under cutting loads. We placed the two 80-20 rails so the deflection between them equals the deflection at the overhangs, which gives an 8.36 in span with 3.32 in overhangs on the 18 in board. Hand calculations for 15, 25 and 50 N loads across four MDF thicknesses showed ¾ in MDF deflects at most 0.10 mm at 50 N, well inside the ±1 mm tolerance, at a reasonable cost and weight.',
      },
      {
        title: 'Holding ±1 mm through a stack of parts',
        detail:
          'The insole bottom sits on the waste board, so every thickness error in the table, base plate, rails and MDF adds up in the height of the cut, and the DR2 reviewer warned that a stack like that makes ±1 mm very hard to hold. The fix is to have the robot face the MDF flat in place and then update the fixture model in VorumCAM. Once the board is faced, the errors of everything underneath drop out of the stack. Because the Forma ST manual lists carving wood as a prohibited use, Vorum has to approve that step before we rely on it.',
      },
    ],
    figure: {
      src: foCellPhoto,
      alt: 'The Vorum Forma ST cell at the clinic: an ABB robot arm with the spindle, behind glass, over the aluminum rotary table with its orange T-slot clamp handles and a mandrel clamp, with foam chips on the bed.',
      caption: 'The Forma ST cell at the UM Orthotics and Prosthetics Center. The fixture clamps to this rotary table through its T-slots with the orange handles.',
    },
    gallery: [
      {
        src: foAlphaTop,
        alt: 'CAD render of the alpha design fixture: EVA foam sheet over an MDF board on two 80-20 rails, an aluminum base plate below with adjustable handles, labeled.',
        caption: 'Alpha design: EVA held with carpet tape on a ¾ in MDF waste board, two 80-20 rails, and an aluminum base plate that clamps to the rotary table with the stock handles.',
      },
      {
        src: foAlphaUnder,
        alt: 'Underside CAD view of the alpha design showing the aluminum base plate, fasteners, adjustable handle, 80-20 rails and MDF board.',
        caption: 'Underside of the alpha design: the rails bolt to the base plate through counterbored 5/16-18 fasteners into T-slot nuts.',
      },
      {
        src: foAlphaCell,
        alt: 'Elevation drawing of the alpha design on the rotary table between the cell posts, showing a 125 mm cantilever on one side and 339 mm on the other.',
        caption: 'The alpha design on the rotary table in the Forma ST cell. The full sheet overhangs the table by 125 mm on one side and 339 mm on the other.',
      },
      {
        src: foRailSpacing,
        alt: 'Cross-section diagram of the 18 in MDF board on two 1.5 in rails, with 3.32 in overhangs and an 8.36 in span between rails.',
        caption: 'Rail spacing from the deflection analysis: 3.32 in overhangs and an 8.36 in span make the mid-span and overhang deflect equally.',
      },
      {
        src: foNesting,
        alt: 'Layout of eight insole outlines nested on a 457 x 914 mm sheet.',
        caption: 'Eight men’s US 10 insoles nested on one standard sheet, meeting the sponsor’s target.',
      },
      {
        src: foReachTest,
        alt: 'VorumCAM screenshot of the robot over a flat EVA sheet with toolpath lines and a list of unreachable-position errors.',
        caption: 'Live reach test in VorumCAM with Vorum. The error list marks parts of a flat sheet the robot could not reach, which made mount location the key decision.',
      },
    ],
  },
  {
    slug: 'battery-endurance',
    title: 'Battery Endurance Calculator',
    context: 'Rotorcraft endurance and range model, independent project',
    dates: '2026',
    status: 'complete',
    role: 'Sole author',
    summary:
      'A Python model that predicts hover endurance, forward-flight range and power curves for multirotors and eVTOLs, from rotor momentum theory plus a wing-borne cruise model.',
    goal:
      'Predict how long and how far a rotorcraft can fly, from a consumer quadcopter up to a passenger eVTOL, with one model, and compare every prediction with published figures. Battery capacity for three of the eVTOLs and one takeoff mass are engineering estimates, and each eVTOL’s Cd₀ is back-solved to match its published range.',
    progress: [
      'Six versions: v1 hover-only momentum theory, v2 rotor profile drag, v3 wing-borne cruise, v4 four eVTOL architectures, v5 physics extensions, v6 design-your-own-aircraft mode and a compare tab.',
      'v5 added seven opt-in extensions, all backward compatible: smooth transition, μ-scaling, voltage sag, ground effect, cooling, wind and vortex ring state.',
      'Compared with seven aircraft with full source citations, covered by 33 regression tests, and live as a Streamlit app under the MIT license.',
    ],
    did: [
      'Built it up over six versions, from hover-only momentum theory to a design-your-own-aircraft mode.',
      'Compared the model with seven real aircraft, from a 0.9 kg DJI Mavic 3 to the 2,948 kg Archer Midnight.',
      'Covered four eVTOL architectures (tilt-rotor, lift+cruise, lift+pusher, tilt+lift) with one code path.',
      'Shipped an interactive Streamlit app and a regression test suite.',
    ],
    next: [
      'Battery capacity for three of the eVTOLs, and one takeoff mass, are engineering estimates. Only Joby’s 165 kWh pack is public. Swap in real figures as manufacturers publish them.',
      'Bring the README and deploy notes up to the v6 numbers (they still quote older test counts and accuracy).',
    ],
    results: [
      { value: '−4.7% to +4.8%', label: 'DJI Mavic 3 max range and flight time against published specs', check: 'Comparison with 30 km and 46 min published figures' },
      { value: '±0.1%', label: 'eVTOL cruise range after calibration: each aircraft’s Cd₀ is back-solved to match the published figure, so this is a fit, not an independent check', check: 'Comparison with the same published range figures used for the fit' },
      { value: '29% → 0.64%', label: 'largest hover endurance error, default parameters against per-aircraft tuned ones', check: 'Seven aircraft. eVTOL references are derived from rotor theory and battery capacity, since makers don’t publish hover endurance' },
      { value: '3,300x', label: 'takeoff mass range covered by the comparison set' },
    ],
    figure: {
      src: becEvtol,
      alt: 'Power required against cruise speed for four eVTOLs, and a bar chart of predicted against published range.',
      caption: 'One model, four eVTOL architectures, predicted range against each manufacturer’s published figure, with Cd₀ back-solved to match it.',
    },
    links: [
      { label: 'Live app', href: 'https://david-angelou-bec.streamlit.app' },
      { label: 'Source code', href: 'https://github.com/angeloudavidj-png/battery-endurance-calculator' },
    ],
  },
  {
    slug: 'px4-vibration-fft',
    title: 'PX4 Vibration FFT',
    context: 'Multirotor vibration diagnostics, independent project',
    dates: 'May 2026',
    status: 'complete',
    role: 'Sole author',
    summary:
      'A Python pipeline that takes raw PX4 IMU logs, computes Welch PSDs and spectrograms, and classifies each spectral peak against expected rotor signatures to flag faults.',
    goal:
      'Show the frequency-domain checks a production multirotor or tilt-rotor program relies on (notch filter tuning, bearing health monitoring, fatigue accounting) working end to end, from raw flight log to diagnostic verdict.',
    progress: [
      'Four-stage pipeline built: log loader, Welch PSD and STFT spectrograms, peak classification, diagnostic verdict.',
      'Validated on a synthetic Alta X hover with an injected rotor imbalance and bearing race defect.',
      'Rerun on a real public PX4 log from a 200 mm quadrotor using its native-rate accelerometer stream.',
      'Real-log limitations written up: the default PX4 logging profile is not vibration-grade, and gaps in the sample stream have to be interpolated.',
    ],
    did: [
      'Built a four-stage chain: log loader, spectral estimation, peak classification, diagnostic verdict.',
      'Validated on a synthetic Alta X hover with injected rotor imbalance and bearing race defects.',
      'Extended the loader to the native-rate accelerometer stream and ran it on a real public PX4 log.',
      'Documented the real-log limitations, including a sub-synchronous classifier edge case.',
    ],
    next: [
      'Fix the classifier edge case that mislabels a sub-synchronous 1/3-P peak at 33.2 Hz on the real log.',
      'Test on logs recorded with a vibration-grade logging profile.',
      'It is a portfolio demonstration, not flight-cleared software.',
    ],
    results: [
      { value: '< 1%', label: 'error recovering 75 Hz motor 1P and 150 Hz blade-pass in the synthetic case', check: 'Synthetic faults plus a real PX4 log' },
      { value: '2 of 2', label: 'injected faults flagged: rotor imbalance and bearing race defect' },
      { value: '99 Hz', label: 'motor 1P pulled from a real 200 mm quadrotor log, blade-pass at 195 Hz' },
    ],
    figure: {
      src: fftPsd,
      alt: 'Three stacked power spectral density plots for x, y and z acceleration, nominal and fault cases overlaid.',
      caption: 'Nominal against fault PSDs. The extra peaks are the injected bearing defect and imbalance.',
    },
    links: [{ label: 'Source code', href: 'https://github.com/angeloudavidj-png/px4-vibration-fft' }],
  },
  {
    slug: 'evtol-tilt-rotor',
    title: 'eVTOL Tilt-Rotor Demonstrator',
    context: 'Subscale tilt-rotor aircraft, independent project',
    dates: '2026 to present',
    status: 'in progress',
    role: 'Solo project',
    summary:
      'A personal project to design and build a subscale eVTOL tilt-rotor with four tilting rotors, a V-tail and a span of about 1.2 m. The first rack-and-pinion tilt pod is modeled in SolidWorks and checked against its design targets.',
    goal:
      'Design a tilt pod that swings a rotor from hover to cruise with one servo, stays within 160° of servo travel, holds at least a 35° link-to-crank angle, and keeps the prop disc 15 mm from the pod and wing.',
    progress: [
      'One tilt pod assembled in SolidWorks. All eight first-target checks passed at 0° to 90° of tilt.',
      'Motor height and servo dimensions are placeholders until measured, so the pod is not ready to print.',
      'Wing, V-tail, rear pods and hover balance are calculated only. No hardware yet.',
    ],
    did: [
      'Found that the earlier rack travel equation only worked with an 8 mm crank, while the design called for 22 mm.',
      'Resized the linkage to a 14 mm crank and 35 mm link, then checked it in a SolidWorks assembly.',
      'Grew the pod from Ø55 to Ø67 so the servo, gears and twin links fit with room for the frame.',
      'Moved the front rotors ahead of the wing, because a disc under it could not clear both the pod and the wing by 15 mm.',
      'Changed hover balance to thrust-weighted, so the V-tail rotors can sit far aft. Predicted hover load at 2.5 kg is about 0.75 kg per front motor and 0.50 kg per rear motor.',
    ],
    next: [
      'Measure the real motor and servo, update the model and re-run the checks.',
      'Solve the outer link fastener, since a socket head M3 hits the shell by hand calculation.',
      'Run a SolidWorks Motion Study and add bearings and bolts.',
      'Print the mechanism and measure its travel on the bench.',
      'Build the wing, V-tail and rear pods, then check tail volume and pitch stability.',
    ],
    results: [
      {
        value: '21.30 mm',
        label: 'Rack travel in the SolidWorks assembly',
        check: 'Measured in the assembly. Target 21.3 ± 0.1 mm.',
      },
      {
        value: '152.55°',
        label: 'Servo rotation from hover to cruise',
        check: 'Measured in the assembly. Limit 160°.',
      },
      {
        value: '51.18°',
        label: 'Minimum link-to-crank angle',
        check: '1° stepped sweep of the assembly. Limit 35°.',
      },
      {
        value: '18.23 mm',
        label: 'Closest prop disc to pod',
        check: '1° stepped sweep of the assembly. Limit 15 mm.',
      },
    ],
    figure: {
      src: evtolLinkagePod,
      alt: 'Two technical plots: the tilt linkage drawn at 0, 45 and 90 degrees of tilt beside the pinion, and a pod cross section showing the rack, pinion, twin links and servo body inside a 67 mm shell.',
      caption: 'Tilt linkage at 0°, 45° and 90° (crank 14 mm, link 35 mm), and the pod section at Ø67.',
    },
  },
];

export const experience = [
  { org: 'VTI Aerospace Research', role: 'Researcher, physical payload lead', dates: 'Jan 2026 to present', where: 'Ann Arbor, MI' },
  { org: 'ME 350 project', role: 'Hardware lead', dates: 'Jan to Apr 2026', where: 'Ann Arbor, MI' },
  { org: 'BERGR, Belcan-sponsored student program', role: 'Mechanical engineer', dates: 'Aug 2025 to May 2026', where: 'Ann Arbor, MI' },
  { org: 'Welding certification program', role: 'MIG, TIG and stick', dates: 'Summer 2025', where: 'Long Island, NY' },
];

export const skills = [
  { group: 'Design', items: ['SolidWorks', 'Siemens NX', 'GD&T and tolerance stack-ups'] },
  { group: 'Analysis', items: ['Ansys FEA and CFD', 'HyperWorks / OptiStruct', 'MATLAB', 'Python (NumPy, SciPy, Pandas)'] },
  { group: 'Systems', items: ['Cameo SysML / MBSE', 'FMEA', 'SRR through FRR gate reviews'] },
  { group: 'Test', items: ['Wind tunnel testing', 'Vibration analysis', 'RTK/PPK GNSS testing'] },
  { group: 'Fabrication', items: ['Mill and lathe', 'MIG, TIG and stick welding', '3D printing', 'Soldering and avionics wiring'] },
];

export const coursework = [
  {
    group: 'In progress',
    items: ['ME 450 Design and Manufacturing III (capstone)', 'ME 335 Heat Transfer', 'ME 481 Manufacturing Processes'],
  },
  {
    group: 'Design',
    items: ['ME 250 Design and Manufacturing I', 'ME 350 Design and Manufacturing II', 'ME 452 Design for Manufacturability'],
  },
  {
    group: 'Analysis',
    items: ['ME 305 Finite Element Analysis', 'ME 320 Fluid Mechanics', 'ME 360 Control Systems Modeling', 'ME 382 Mechanical Behavior of Materials', 'ME 395 Laboratory I', 'MATH 425 Probability'],
  },
  {
    group: 'Systems',
    items: ['AERO 388 Systems Engineering', 'EECS 314 Circuits, Electronics and Sensors', 'NAVSCI 201 Naval Systems'],
  },
];
