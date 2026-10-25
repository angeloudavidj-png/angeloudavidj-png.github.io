// Portfolio content. Every figure here is taken from the Engineering Brain vault
// (project Overview notes) or resume-tailor/resume_data.yaml. Do not add numbers
// that are not in those sources.
import type { ImageMetadata } from 'astro';
import archerPareto from '../assets/figures/archer-pareto.png';
import becEvtol from '../assets/figures/bec-evtol.png';
import fftPsd from '../assets/figures/fft-psd.png';
import gnssRtkPpk from '../assets/figures/gnss-rtk-ppk.png';
import bergrSystem from '../assets/figures/bergr-system.jpg';
import bergrScout from '../assets/figures/bergr-scout.png';
import bergrRover from '../assets/figures/bergr-rover.png';
import bergrDock from '../assets/figures/bergr-dock.png';
import vtiMcity from '../assets/figures/vti-mcity.jpg';
import vtiMounted from '../assets/figures/vti-mounted.png';
import vtiHullCad from '../assets/figures/vti-hull-cad.jpg';
import vtiAltaxCad from '../assets/figures/vti-altax-cad.png';
import vtiLayout from '../assets/figures/vti-layout.png';
import foCamSide from '../assets/figures/fo-cam-side.png';
import foCamCloseup from '../assets/figures/fo-cam-closeup.png';
import foCamCell from '../assets/figures/fo-cam-cell.png';
import foInsole from '../assets/figures/fo-insole.jpg';

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
  did: string[];
  results: { value: string; label: string }[];
  figure?: Figure;
  gallery?: Figure[];
  links?: { label: string; href: string }[];
  outcome?: string;
}

export const projects: Project[] = [
  {
    slug: 'bergr',
    title: 'Rover and drone retrieval system',
    context: 'Belcan Aerospace sponsored program (BERGR)',
    dates: 'Aug 2025 to May 2026',
    status: 'complete',
    role: 'Only mechanical engineer on a 15-person team',
    summary:
      'A ground rover that hosts, charges and talks to two autonomous drones: a scout that searches an area for targets and a heavy-lift drone that retrieves them.',
    did: [
      'Ran Ansys structural FEA on both drones to set landing limits against Al 6061-T6 yield.',
      'Designed the magnetic charging alignment with 8-pin pogo-pin docking connectors.',
      'Ran the scout drone body in the U-M 2x2 ft wind tunnel and compared measured drag with CFD.',
      'Machined structural brackets on mill and lathe, and designed gear train components using GD&T and tolerance stack-ups.',
      'Built the Cameo MBSE model and carried requirement traceability through SRR, PDR, CDR and FRR.',
    ],
    results: [
      { value: '280 N', label: 'vertical impact at which the scout frame yields (4.94 m/s)' },
      { value: '1.5 m/s', label: 'horizontal touchdown limit for the retrieval drone' },
      { value: '±8 mm', label: 'charging dock alignment tolerance, ±15° in rotation, 3.81 cm capture range' },
      { value: 'Cd ≈ 1.0', label: 'scout drone drag coefficient from wind tunnel data' },
      { value: '117 → 38', label: 'system risk priority number over seven months of FMEA-driven fixes' },
    ],
    figure: {
      src: bergrSystem,
      alt: 'Lab photo of the rover module: an aluminum rail frame with landing pads, the heavy-lift hexacopter on one pad and the scout quadcopter on another.',
      caption: 'The rover module frame in the lab, with the retrieval hexacopter and the scout quadcopter on their pads.',
    },
    gallery: [
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
    outcome:
      'Structural and analysis work closed. Speed controller and power board failures kept the full system from flying integrated by semester end, and the documentation was handed to the next cohort.',
  },
  {
    slug: 'vti-payload',
    title: 'Sensor payload for voice-commanded drones',
    context: 'VTI Aerospace research, University of Michigan',
    dates: 'Jan 2026 to present',
    status: 'in progress',
    role: 'Physical payload lead on a 6-person team',
    summary:
      'A payload that lets an emergency dispatcher send a drone to a scene by voice, so it arrives before responders and streams what it sees.',
    did: [
      'Designed a PETG boat-hull enclosure (210 x 165 x 130 mm) targeting 30 to 45% drag reduction, mounted to the Freefly Alta X rail with Adel clamps.',
      'Designed the 44.4 V to 12 V DC-DC power conversion for the Jetson Orin NX.',
      'Selected rubber-in-shear isolation mounts tuned above 50 Hz to protect compute and camera from rotor vibration.',
      'Led the PETG, ABS and aluminum material trade at the Jetson’s 10 to 40 W heat load.',
      'Wrote the team’s technical reference covering structural, thermal, vibration and aerodynamic analysis.',
    ],
    results: [
      { value: '≤ 1.16 kg', label: 'estimated payload mass (0.76 to 1.16 kg) on a 35 lb capacity octorotor' },
      { value: '30 to 45%', label: 'targeted drag reduction from the boat-hull form' },
      { value: '> 50 Hz', label: 'isolation frequency of the vibration mounts' },
    ],
    figure: {
      src: vtiMcity,
      alt: 'Freefly Alta X octorotor on an asphalt test track with its propellers removed and a red payload box attached beneath the frame.',
      caption: 'Payload attached under the Freefly Alta X at MCity, with propellers removed for ground testing.',
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
    slug: 'archer-midnight-fea',
    title: 'Beam FEA of an eVTOL airframe',
    context: 'Independent project, Archer Midnight public data',
    dates: '2026',
    status: 'complete',
    role: 'Sole author',
    summary:
      'A 3D Euler-Bernoulli beam FEA solver written from scratch in base MATLAB, used to size the Archer Midnight airframe and landing gear against four flight load cases and a FAR 23.473 hard landing.',
    did: [
      'Built and verified the element, assembly and solver against analytical solutions.',
      'Found the landing gear failing the 3g hard landing and resized the strut.',
      'Added modal analysis, a Newmark drop test, and Tsai-Wu and Hashin ply checks on the composite boom.',
      'Swept 1,400 boom and strut section combinations to map mass against reserve factor.',
      'Exported the model to Nastran and Ansys APDL for cross-checking (runs still pending).',
    ],
    results: [
      { value: '1.87', label: 'drop test dynamic factor, showing the static envelope is unconservative' },
      { value: 'RF 1.18', label: 'landing gear reserve factor after resize, at 427.9 MPa peak von Mises' },
      { value: '−137 kg', label: 'lighter design found by the sweep, at a higher reserve factor of 1.60' },
    ],
    figure: {
      src: archerPareto,
      alt: 'Scatter plot of 1,400 designs, structural mass against minimum reserve factor, with the Pareto frontier and the 312 kg design marked.',
      caption: 'Parametric sweep: the 312 kg design clears the 1.5 reserve factor target that the current 449 kg design misses.',
    },
    links: [
      { label: 'Technical report', href: 'https://angeloudavidj-png.github.io/archer-midnight-fea/' },
      { label: 'Source code', href: 'https://github.com/angeloudavidj-png/archer-midnight-fea' },
    ],
  },
  {
    slug: 'battery-endurance',
    title: 'Rotorcraft endurance and range model',
    context: 'Independent project',
    dates: '2026',
    status: 'complete',
    role: 'Sole author',
    summary:
      'A Python model that predicts hover endurance, forward-flight range and power curves for multirotors and eVTOLs, from rotor momentum theory plus a wing-borne cruise model.',
    did: [
      'Built it up over six versions, from hover-only momentum theory to a design-your-own-aircraft mode.',
      'Validated against seven real aircraft, from a 0.9 kg DJI Mavic 3 to the 2,948 kg Archer Midnight.',
      'Covered four eVTOL architectures (tilt-rotor, lift+cruise, lift+pusher, tilt+lift) with one code path.',
      'Shipped an interactive Streamlit app and a regression test suite.',
    ],
    results: [
      { value: '±0.5%', label: 'every eVTOL cruise range prediction against the published figure' },
      { value: '0.43%', label: 'largest tuned hover endurance error' },
      { value: '3,300x', label: 'takeoff mass range covered by the validation set' },
    ],
    figure: {
      src: becEvtol,
      alt: 'Power required against cruise speed for four eVTOLs, and a bar chart of predicted against published range.',
      caption: 'One model, four eVTOL architectures, predicted range against each manufacturer’s published figure.',
    },
    links: [
      { label: 'Live app', href: 'https://david-angelou-bec.streamlit.app' },
      { label: 'Source code', href: 'https://github.com/angeloudavidj-png/battery-endurance-calculator' },
    ],
  },
  {
    slug: 'px4-vibration-fft',
    title: 'Multirotor vibration diagnostics',
    context: 'Independent project',
    dates: 'May 2026',
    status: 'complete',
    role: 'Sole author',
    summary:
      'A Python pipeline that takes raw PX4 IMU logs, computes Welch PSDs and spectrograms, and classifies each spectral peak against expected rotor signatures to flag faults.',
    did: [
      'Built a four-stage chain: log loader, spectral estimation, peak classification, diagnostic verdict.',
      'Validated on a synthetic Alta X hover with injected rotor imbalance and bearing race defects.',
      'Extended the loader to the native-rate accelerometer stream and ran it on a real public PX4 log.',
      'Documented the real-log limitations, including a sub-synchronous classifier edge case.',
    ],
    results: [
      { value: '< 1%', label: 'error recovering 75 Hz motor 1P and 150 Hz blade-pass in the synthetic case' },
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
    slug: 'truegrade',
    title: 'Construction-site mapping drone',
    context: 'Project TrueGrade, UM Mapping Drone Team',
    dates: '2026 to present',
    status: 'in progress',
    role: 'Positioning subsystem: receiver bring-up, field testing and test report',
    summary:
      'A student team building an autonomous drone that maps construction progress with LiDAR, a 4K camera and a thermal imager. Version 1, a single drone, is targeted for April 2027.',
    did: [
      'Brought up a u-blox RTK/PPK receiver and wrote the logging and analysis tools.',
      'Ran static, walking and roof-mounted drive tests, including a 67 minute drive.',
      'Traced a 65.6 mm RTK against PPK height offset to missing antenna calibration data.',
      'Wrote the test report TG-GNSS-TR-001, now at revision E.',
    ],
    results: [
      { value: '10 mm', label: 'horizontal RMSE requirement the positioning work is testing against' },
      { value: '42 of 65.6 mm', label: 'height offset explained by a missing L5 antenna calibration' },
    ],
    figure: {
      src: gnssRtkPpk,
      alt: 'Two time series of the difference between live RTK and post-processed PPK positions, horizontal and vertical, with correction dropouts highlighted.',
      caption: 'Live RTK against post-processed PPK over 50 minutes. Red points are correction dropouts.',
    },
  },
  {
    slug: 'quadcopter-fmea',
    title: 'Quadcopter failure mode analysis',
    context: 'Independent project',
    dates: 'May 2026',
    status: 'complete',
    role: 'Sole author',
    summary:
      'A formal 30-line FMEA for a small reconnaissance quadcopter, built bottom-up per MIL-STD-1629A and scored on AIAG-VDA severity, occurrence and detection scales.',
    did: [
      'Broke the aircraft into eight subsystems and 30 failure modes.',
      'Ranked risks with a Pareto and an action priority overlay that catches high-severity modes the RPN threshold misses.',
      'Wrote design, process and verification mitigations for the top five.',
    ],
    results: [
      { value: '240 → 48', label: 'RPN of the top risk, a misconfigured return-to-launch failsafe' },
      { value: '2 of 3', label: 'top risks that are operations failures, not hardware' },
    ],
  },
  {
    slug: 'me350-linkage',
    title: 'Sensor-actuated linkage',
    context: 'ME 350, Design and Manufacturability',
    dates: 'Jan to Apr 2026',
    status: 'complete',
    role: 'Hardware lead',
    summary:
      'A multi-bar linkage driven by DC motors, with encoder and proximity sensor feedback closed through PID control on an Arduino.',
    did: [
      'Designed the linkage, gear train and transmission in SolidWorks and checked gear bending with the Lewis equation.',
      'Machined links, shafts and gears on manual mill and lathe to GD&T drawings.',
      'Wired motors, quadrature encoders and proximity sensors, and tuned PID per joint.',
    ],
    results: [],
  },
  {
    slug: 'foot-orthosis',
    title: 'Milling custom foot orthoses in-house',
    context: 'ME 450 capstone, sponsored by the UM Orthotics and Prosthetics Center',
    dates: 'Fall 2026',
    status: 'in progress',
    role: 'Team member, team of four',
    summary:
      'Setting up the clinic’s Vorum Forma ST carver, built for polyurethane mold blocks, to mill EVA foam insoles in-house instead of sending them out with a 4 to 6 week lead time.',
    did: [
      'Defining the EVA starting block, fixture and orientation the CAM software is missing.',
      'Planning cut tests to set spindle speed, feed and tooling for soft EVA foam.',
      'Writing a standard procedure so technicians get repeatable results after the team leaves.',
    ],
    results: [],
    figure: {
      src: foCamSide,
      alt: 'VorumCAM simulation of the Forma ST robot cell: a white robot arm beside a translucent purple EVA sheet standing upright on a red fixture.',
      caption: 'VorumCAM collision check: the EVA sheet (purple) modeled upright on the fixture inside the Forma ST cell.',
    },
    gallery: [
      {
        src: foCamCloseup,
        alt: 'Close view of the robot spindle next to the upright purple EVA sheet and the red fixture.',
        caption: 'Spindle clearance to the sheet and fixture.',
      },
      {
        src: foCamCell,
        alt: 'Wide view of the full robot cell with the upright EVA sheet on the turntable fixture.',
        caption: 'The full cell, to check the robot can reach the whole sheet.',
      },
      {
        src: foInsole,
        alt: 'A hand holding a finished custom foot orthosis with a cork base, blue EVA layer and tan top cover.',
        caption: 'A finished custom orthosis at the clinic, the kind of layered insole the mill is being set up to carve.',
      },
    ],
  },
];

export const experience = [
  { org: 'VTI Aerospace Research', role: 'Researcher, physical payload lead', dates: 'Jan 2026 to present', where: 'Ann Arbor, MI' },
  { org: 'ME 350 project', role: 'Hardware lead', dates: 'Jan to Apr 2026', where: 'Ann Arbor, MI' },
  { org: 'Belcan Aerospace (BERGR)', role: 'Mechanical engineer', dates: 'Aug 2025 to May 2026', where: 'Ann Arbor, MI' },
  { org: 'Welding certification program', role: 'MIG, TIG and stick', dates: 'Summer 2025', where: 'Long Island, NY' },
];

export const skills = [
  { group: 'Design', items: ['SolidWorks', 'Siemens NX', 'GD&T and tolerance stack-ups'] },
  { group: 'Analysis', items: ['Ansys FEA and CFD', 'HyperWorks / OptiStruct', 'MATLAB', 'Python (NumPy, SciPy, Pandas)'] },
  { group: 'Systems', items: ['Cameo SysML / MBSE', 'FMEA', 'SRR through FRR gate reviews'] },
  { group: 'Test', items: ['Wind tunnel testing', 'Vibration analysis', 'RTK/PPK GNSS testing'] },
  { group: 'Fabrication', items: ['Mill and lathe', 'MIG, TIG and stick welding', '3D printing', 'Soldering and avionics wiring'] },
];
