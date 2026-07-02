import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden grain-overlay flex items-center"
    >
      {/* Architectural backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop"
          alt="Architectural core expanding"
          className="w-full h-full object-cover opacity-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050914] via-[#050914]/55 to-[#050914]" />
        {/* Architectural grid lines */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94A3B8 1px, transparent 1px), linear-gradient(to bottom, #94A3B8 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-12 h-px bg-[#2563EB]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#60A5FA]">
            More with the Core
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          data-testid="hero-headline"
          className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.035em] max-w-5xl"
        >
          From Strategy to Results.
          <br />
          <span className="text-white/55">From Diagnosis to Delivery.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-lg md:text-2xl text-white/75 max-w-2xl mt-10 leading-relaxed"
          data-testid="hero-subheadline"
        >
          We close the gap between ideas and measurable impact through
          disciplined execution. Not advisors — partners in the trenches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            data-testid="hero-cta-button"
            className="inline-flex items-center justify-center gap-3 bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-9 py-5 font-display font-semibold uppercase tracking-[0.15em] text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:-translate-y-0.5"
          >
            Partner With Us
            <span aria-hidden className="text-base">→</span>
          </button>
          <button
            onClick={() => scrollTo("method")}
            data-testid="hero-secondary-button"
            className="inline-flex items-center justify-center gap-3 border border-white/25 text-white hover:bg-white/5 hover:border-white/50 px-9 py-5 font-display font-semibold uppercase tracking-[0.15em] text-sm transition-all"
          >
            How We Do
          </button>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10"
          data-testid="hero-stats"
        >
          {[
            { k: "01", v: "Diagnose", note: "Read the system" },
            { k: "02", v: "Design", note: "Architect the spine" },
            { k: "03", v: "Deliver", note: "Ship the work" },
            { k: "04", v: "Drive Value", note: "Prove the outcome" },
          ].map((s) => (
            <div key={s.k} className="bg-[#050914] p-6 md:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#60A5FA]">
                {s.k}
              </div>
              <div className="font-display font-semibold text-white text-2xl md:text-3xl mt-3 tracking-tight">
                {s.v}
              </div>
              <div className="font-body text-sm text-white/55 mt-2">{s.note}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
