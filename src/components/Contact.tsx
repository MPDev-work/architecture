import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, FileText, CheckCircle2, Coins, CalendarDays, Compass, HelpCircle } from "lucide-react";

export default function Contact() {
  // Contact Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Proposal State Builders
  const [projectType, setProjectType] = useState("BRUTALIST RESIDENCE");
  const [siteZone, setSiteZone] = useState("GRANITE BEDROCK");
  const [scaleSqm, setScaleSqm] = useState(350);
  const [primaryMaterial, setPrimaryMaterial] = useState("Rough Cast Concrete");
  const [proposalBrief, setProposalBrief] = useState<any | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 5000);
  };

  const handleGenerateBrief = () => {
    // Math simulations for project estimations based on user choices
    const basePricePerSqm = projectType === "CULTURAL PAVILION" ? 4200 : 3500;
    const foundationBonusMultiplier = siteZone === "SEISMIC GRANITE Bedrock" ? 1.25 : 1.1;
    const estimatedCost = scaleSqm * basePricePerSqm * foundationBonusMultiplier;
    
    const cementRequired = Math.round(scaleSqm * 0.95);
    const timelineWeeks = Math.round(18 + (scaleSqm / 15));

    const briefData = {
      specId: `SPEC_${Date.now().toString().slice(-6)}`,
      projectType,
      siteZone,
      scaleSqm,
      primaryMaterial,
      estimatedCostLabel: `$${(estimatedCost / 1000000).toFixed(2)}M - $${((estimatedCost * 1.3) / 1000000).toFixed(2)}M USD`,
      cementRequired,
      timelineWeeks,
      draftingDate: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
    };

    setProposalBrief(briefData);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-dark text-light py-24 md:py-36 px-6 md:px-12 border-t border-light/10"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-light/15 pb-8 mb-20 font-mono">
          <div className="text-[10px] tracking-[0.25em] text-[#FF4D00] font-bold">
            [TRANSMISSION TERMINAL]
          </div>
          <div className="text-light/50 text-[10px] tracking-widest mt-2 md:mt-0">
            06 // ESTABLISH PROJECT SCOPE FOR INDISPENSABLE COMMISSIONS
          </div>
        </div>

        {/* Massive call to action */}
        <div className="mb-20">
          <h2 className="font-syne font-black text-[12vw] sm:text-[9vw] leading-none text-light uppercase select-none tracking-tighter">
            LET'S <br />
            <span className="text-[#FF4D00]">BUILD</span>
          </h2>
          <p className="font-mono text-xs text-light/45 max-w-md mt-4 tracking-wider uppercase">
            We are currently accepting a selective cohort of 4 sovereign spatial commissions for the 2026/2027 fiscal block.
          </p>
        </div>

        {/* Main layout split: Left standard form with feedback validation, Right interactive brief cost generator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sleek minimal Form */}
          <div className="lg:col-span-5 bg-concrete-dark border border-light/10 p-6 md:p-8 space-y-6 relative rounded">
            
            <div className="border-b border-light/10 pb-4 mb-4">
              <span className="font-mono text-[9px] text-[#FF4D00] block tracking-widest uppercase">
                SECURE DATA PORTAL
              </span>
              <span className="font-mono text-[11px] text-light block font-semibold">
                DIRECT SECURE SUBMITTAL
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Field 1: Name */}
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-light/50 tracking-widest block uppercase">
                  01_CORRESPONDENT NAME:
                </label>
                <input
                  type="text"
                  placeholder="e.g. MARCUS THREAD"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-concrete-mid border border-light/15 px-4 py-3 text-sm font-mono text-light focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-light/50 tracking-widest block uppercase">
                  02_ELECTRONIC MAIL:
                </label>
                <input
                  type="email"
                  placeholder="e.g. CLIENT@DOMAIN.NET"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-concrete-mid border border-light/15 px-4 py-3 text-sm font-mono text-light focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              {/* Field 3: Inquiry context */}
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-light/50 tracking-widest block uppercase">
                  03_COMMISSION CONCEPT BRIEF:
                </label>
                <textarea
                  rows={4}
                  placeholder="State geographic constraints, physical parameters, material biases or programmatic requirements or leave empty."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-concrete-mid border border-light/15 px-4 py-3 text-sm font-sans text-light focus:border-brand focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Form trigger submission with feedback banner */}
              <button
                type="submit"
                className="w-full bg-light text-dark hover:bg-brand hover:text-dark py-3 text-center font-mono text-xs font-bold tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2 border border-transparent"
              >
                <span>TRANSMIT STRUCTURAL PROPOSAL</span>
                <Send className="h-3 w-3" />
              </button>

            </form>

            {/* Simulated success alert banner */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 bg-[#FF4D00]/10 border border-[#FF4D00] text-light space-y-2 font-mono text-[10px]"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FF4D00]" />
                    <span className="font-bold">TRANSMISSION ENCRYPTED & SUBMITTED</span>
                  </div>
                  <p className="text-[9px] text-light/75 leading-relaxed">
                    Hello <span className="text-[#FF4D00] font-bold">{name}</span>. Your portal packet has been compiled. 
                    Our representative based in Zurich will establish secure terminal comms within 48 circadian hours. Code: SEC-{Math.floor(1000 + Math.random() * 9000)}.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Dynamic Project Brief Specifier */}
          <div className="lg:col-span-7 bg-concrete-dark border border-light/10 p-6 md:p-8 space-y-6 rounded">
            
            <div className="border-b border-light/10 pb-4">
              <span className="font-mono text-[9px] text-light/50 block tracking-widest uppercase">
                COOPERATIVE UTILITY
              </span>
              <span className="font-mono text-[11px] text-[#FF4D00] block font-bold">
                COMMISSION SPECTRAL BRIEF COMPILER
              </span>
            </div>

            {/* Inputs list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[10px]">
              
              {/* Type selector */}
              <div className="space-y-2">
                <span className="text-light/55 uppercase block">PROJECT COMPOSITION CODE:</span>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-concrete-mid border border-light/15 py-2 px-3 text-[10px] text-light focus:border-brand focus:outline-none"
                >
                  <option value="BRUTALIST RESIDENCE">MONOLIT RESIDENCE (3.5K/SQM)</option>
                  <option value="CULTURAL PAVILION">CULTURAL SILENT PAVILION (4.2K/SQM)</option>
                  <option value="METROPOLIS RESEARCH CENTRE">HIGH DENSITY LAB HUB (3.8K/SQM)</option>
                  <option value="MODULAR WOOD HOUSING CO-OP">CROSS-LAMIN TIMBER POD CO-OP (3.1K/SQM)</option>
                </select>
              </div>

              {/* Site bedrock geology */}
              <div className="space-y-2">
                <span className="text-light/55 uppercase block">SOCIETY GEOLOGY RETAIN:</span>
                <select
                  value={siteZone}
                  onChange={(e) => setSiteZone(e.target.value)}
                  className="w-full bg-concrete-mid border border-light/15 py-2 px-3 text-[10px] text-light focus:border-brand focus:outline-none"
                >
                  <option value="GRANITE BEDROCK">ALPINE SOLID BEDROCK (VALS BASELINE)</option>
                  <option value="COASTAL MARINE SAND">COASTAL SILT SOIL (HIGH PILE REQ)</option>
                  <option value="URBAN STRUCT SLATE">BERLIN RAILWAYS (VIBRATION-DECOUPLED)</option>
                  <option value="SEISMIC FAULT VALLEY">SAN ANDREAS SLATE (SEISMIC ISO REQ)</option>
                </select>
              </div>

              {/* Primary binding element materials */}
              <div className="space-y-2">
                <span className="text-light/55 uppercase block">PRIMARY TACTILE COMPOSITE:</span>
                <select
                  value={primaryMaterial}
                  onChange={(e) => setPrimaryMaterial(e.target.value)}
                  className="w-full bg-concrete-mid border border-light/15 py-2 px-3 text-[10px] text-light focus:border-brand focus:outline-none"
                >
                  <option value="Boarded Raw Concrete">SELF-HEALING BOARDED CONCRETE</option>
                  <option value="Acid-Etched Basalt">ACID-ETCHED BASALT ROCK PILES</option>
                  <option value="Polished Carbon Steel">POLISHED CHROME STRUCT STEEL</option>
                  <option value="Cross Laminated Timber">CLT STACKED BLOCK SECTORS</option>
                </select>
              </div>

              {/* Footprint dimensions Sqm */}
              <div className="space-y-2">
                <div className="flex justify-between text-light/55">
                  <span>SCALE SIZE FOOTPRINT:</span>
                  <span className="text-brand font-bold">{scaleSqm} SQM</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3500"
                  step="50"
                  value={scaleSqm}
                  onChange={(e) => setScaleSqm(Number(e.target.value))}
                  className="w-full accent-brand bg-concrete-mid h-1 cursor-ew-resize mt-2.5"
                />
              </div>

            </div>

            {/* Blueprint Compiler Trigger */}
            <button
              onClick={handleGenerateBrief}
              className="w-full bg-transparent border border-[#FF4D00] text-[#FF4D00] hover:bg-[#FF4D00] hover:text-dark py-2.5 text-center font-mono text-[10px] font-bold tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>COMPILE DIGITAL BRIEF PROPOSAL</span>
            </button>

            {/* Compiled Spec Receipt Sheet */}
            <AnimatePresence>
              {proposalBrief && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-concrete-mid border border-[#FF4D00]/25 p-5 md:p-6 space-y-4 font-mono text-[10px] text-light relative overflow-hidden"
                >
                  {/* Decorative faint layout guidelines */}
                  <div className="absolute top-2 right-2 text-brand text-[8px] font-bold">
                    {proposalBrief.specId}
                  </div>

                  <div className="border-b border-light/10 pb-2 flex justify-between items-center text-[9px] text-[#FF4D00]">
                    <span className="font-bold uppercase tracking-wider">PROJECT STATEMENT RECEIPT</span>
                    <span>OFFICIAL DATUM RE-2026</span>
                  </div>

                  {/* Fact Sheets */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[9.5px]">
                    
                    <div className="space-y-1.5 text-light/80">
                      <div>TYPOLOGY SPEC: <span className="text-light font-bold">{proposalBrief.projectType}</span></div>
                      <div>GEOLOGY ZONE: <span className="text-light font-bold">{proposalBrief.siteZone}</span></div>
                      <div>TARGET MASS: <span className="text-light font-bold">{proposalBrief.scaleSqm} SQ METER MAPPED</span></div>
                      <div>MAT COMPOSITION: <span className="text-light font-bold uppercase">{proposalBrief.primaryMaterial}</span></div>
                    </div>

                    <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-light/10 pt-3 md:pt-0 pl-0 md:pl-4">
                      <div className="flex justify-between items-center font-mono text-[#FF4D00] font-bold">
                        <span>EST. DEV TIMELINE:</span>
                        <span>{proposalBrief.timelineWeeks} WEEKS</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>EST. REDUCTION RAW BINDER:</span>
                        <span>{proposalBrief.cementRequired} CUBIC M</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pt-2 border-t border-light/5 text-light font-bold">
                        <span>FEE FORECAST:</span>
                        <span>{proposalBrief.estimatedCostLabel}</span>
                      </div>
                    </div>

                  </div>

                  <div className="pt-2 border-t border-light/5 flex flex-wrap justify-between items-center text-[8.5px] text-light/40 font-mono">
                    <span>DATE COMPILED: {proposalBrief.draftingDate}</span>
                    <span>AUTHORIZATION SIGN: [MONOLITH ZURICH SWISS]</span>
                  </div>

                  {/* Footnote button to automatically transfer proposal block to inquiry field */}
                  <button
                    onClick={() => {
                      setMessage(
                        `Project Concept Brief compiled on ${proposalBrief.draftingDate}.\nTypology Code: ${proposalBrief.projectType}\nBedrock Geology: ${proposalBrief.siteZone}\nCustom Scale: ${proposalBrief.scaleSqm} SQM\nPrimary composite element focus: ${proposalBrief.primaryMaterial}.\nFee forecast bounds: ${proposalBrief.estimatedCostLabel}.\nReady for immediate architectural review.`
                      );
                      // Scroll slightly to let the user see prompt injected
                      const contactBox = document.querySelector('textarea');
                      if (contactBox) contactBox.focus();
                    }}
                    className="w-full bg-[#FF4D00]/10 border border-[#FF4D00]/20 text-[#FF4D00] hover:bg-[#FF4D00] hover:text-dark py-1.5 text-center text-[8px] tracking-widest font-bold block transition-all"
                    title="Append brief statistics directly into the message text box"
                  >
                    APPEND SPECIFICATIONS TO DIRECT MESSAGE INQUIRY BOX ABOVE
                  </button>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
