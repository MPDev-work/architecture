import { Project, ServiceStep } from "./types";

export const projects: Project[] = [
  {
    id: "01",
    title: "KRONOS MONOLITH",
    category: "RESIDENTIAL / BRUTALIST",
    location: "VALS, SWITZERLAND",
    year: "2024",
    scale: "840 SQM",
    materials: ["Cored Concrete", "Brushed Basalt", "Acid-Etched Glass"],
    description: "An uncompromising residential monolith carved directly into the alpine bedrock. The structure behaves as a geological extension of the mountain itself, using raw raw-boarded concrete to register shadow and seasonal shifts.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    challenge: "Negotiating an active thermal spring flow beneath the granite bedrock without disrupting the local hydrosystem, while maintaining structural performance for a 30-meter structural cantilever.",
    solution: "We engineered a dual-chamber pneumatic compression foundation that floats on basalt piers, letting sub-strata water move freely while using tension cables anchored 15 meters deep into solid rock.",
    details: [
      "Subterranean thermal gallery utilizing naturally heated water loops.",
      "Frameless 4-meter glass panes flush with raw concrete cast-ins.",
      "Off-grid thermal mass storage with basalt rock core batteries."
    ]
  },
  {
    id: "02",
    title: "AETHER PAVILION",
    category: "CULTURAL / MINIMALIST",
    location: "NAOSHIMA, JAPAN",
    year: "2025",
    scale: "1,200 SQM",
    materials: ["Pre-cast Terrazzo", "Oxidized Copper", "Water"],
    description: "A cultural gallery designed to amplify absolute silence. Constructed through three intersecting rectangular prisms, the building captures light through a singular roof fissure, throwing dynamic daggers of illumination upon concrete walls.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    challenge: "Achieving a jointless terrazzo floor spanning 600 square meters that remains stable under harsh marine humidity shifts.",
    solution: "Our team developed a custom high-elasticity resinous volcanic ash binder poured continuously, incorporating micro-expansion joints hidden along natural light-shadow thresholds.",
    details: [
      "Centripetal rainwater collection pool acting as acoustic dampener.",
      "Acoustic lining embedded with aggregate-baffled volcanic pumice.",
      "Invisible floor-edge HVAC distribution mimicking geothermal draft."
    ]
  },
  {
    id: "03",
    title: "NEXUS METROPOLIS",
    category: "INSTITUTIONAL / CHROME",
    location: "BERLIN, GERMANY",
    year: "2025",
    scale: "14,500 SQM",
    materials: ["Polished Carbon-Steel", "Self-Healing Concrete", "Double-Glazed Quartz"],
    description: "A high-density research hub built on a former industrial rail yard. Taking cues from historical railway trusses, the mass uses a dramatic structural steel skeleton wrapped in sound-refracting brutalist concrete panels.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    challenge: "Mitigating high-frequency vibration from nearby railway lines which would disrupt sensitive laser laboratory instruments.",
    solution: "The building was designed as a dual-hull shell. The entire inner diagnostic block sits on heavy-duty elastomeric isolation bearings, completely isolated from outer seismic oscillations.",
    details: [
      "Vibration isolation coefficient exceeding laboratory Grade-A standards.",
      "Kinetic solar shadow trackers forged from sand-blasted aluminum.",
      "Greywater filtration garden running vertically down the south facade."
    ]
  },
  {
    id: "04",
    title: "VOXEL COOPERATIVE",
    category: "COLLECTIVE HOUSING",
    location: "COPENHAGEN, DENMARK",
    year: "2026",
    scale: "6,800 SQM",
    materials: ["Cross-Laminated Timber (CLT)", "Raw Cast Iron", "Bio-Cement"],
    description: "A prototype for modular high-density cooperative living. By stacking interlocking modular pods, the cooperative builds a highly porous volume filled with community open terraces, gardens, and light shafts.",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    challenge: "Ensuring acoustic privacy between timber modules without adding non-recyclable synthetic insulation materials.",
    solution: "We engineered a pressurized air-pocket decoupling collar between timber modules, using compressed wool-cement composites as raw vibration absorbers.",
    details: [
      "Zero-carbon structural framework entirely bolted for future disassembly.",
      "Porous facade maximizing passive cross-ventilation in all units.",
      "Shared automated rooftop greenhouse heated by data servers below."
    ]
  }
];

export const services: ServiceStep[] = [
  {
    phase: "I",
    title: "PRESECTION & CONCEPT",
    description: "Deconstruct the programmatic requirements. We conduct intensive geographic, historical, and geological surveys of the site to establish the structural narrative.",
    duration: "4 - 6 Weeks",
    deliverables: ["Geological site analysis", "Structural spatial mapping", "Monolithic clay scale models"],
    technicalDetails: "Formulating physical relationships with materials, checking subsoil density and solar path mappings."
  },
  {
    phase: "II",
    title: "SCHEMATIC DESIGN",
    description: "Translating the narrative into volumetric masses. We create initial conceptual frameworks emphasizing dramatic light voids, tactile material pairings, and raw scale.",
    duration: "6 - 8 Weeks",
    deliverables: ["Volumetric space diagrams", "Raw physical renders", "Material tactile samples"],
    technicalDetails: "Iterative physical volume testing, preliminary mechanical spatial allocation, and parametric shadow studies."
  },
  {
    phase: "III",
    title: "DOCUMENT DESIGN",
    description: "Drafting the granular structural reality. Every raw weld, concrete joint, glass seal, and embedded channel is systematically resolved.",
    duration: "10 - 12 Weeks",
    deliverables: ["Structural framing sheets", "Concrete joint maps", "Custom millwork details"],
    technicalDetails: "Coordination of seismic isolators, custom cast concrete formwork design, and high-performance glaze specs."
  },
  {
    phase: "IV",
    title: "PROCUREMENT MANAGEMENT",
    description: "Sourcing uncompromising craft. We coordinate directly with quarries, concrete mix specialists, custom blacksmiths, and artisanal fabricators global-wide.",
    duration: "Ongoing",
    deliverables: ["Contractor verification", "Custom quarry stone inspection", "Full-scale mockup testing"],
    technicalDetails: "On-site quality monitoring, chemical tracking of self-healing concrete mixes, and metallurgy reviews."
  },
  {
    phase: "V",
    title: "CONSTRUCTION WITNESS",
    description: "The physical execution of the vision. We oversee the pouring, assembly, and alignment of every component to guarantee absolute spatial precision.",
    duration: "12 - 24 Months",
    deliverables: ["On-site alignment logs", "Casting quality logs", "As-built documentation"],
    technicalDetails: "3D laser scans of formwork, real-time heat curing analysis of structural concrete pours, and micro-tension test witness."
  }
];
