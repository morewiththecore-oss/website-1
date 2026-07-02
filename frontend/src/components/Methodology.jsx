import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    label: "Diagnose",
    overline: "Phase 01",
    body:
      "Cold-eyed assessment of operations, capital, culture and market reality — separating the symptom from the cause.",
    artifacts: ["Operating audit", "Cashflow model", "Stakeholder mapping"],
  },
  {
    label: "Design",
    overline: "Phase 02",
    body:
      "We architect the spine — governance, cadence, accountability — that makes execution inevitable rather than optional.",
    artifacts: ["Operating model", "RACI & cadence", "North-star metrics"],
  },
  {
    label: "Deliver",
    overline: "Phase 03",
    body:
      "Sleeves rolled, in the trenches. We don't hand off PowerPoints — we run sprints with your team until the work ships.",
    artifacts: ["Embedded teams", "Weekly delivery", "Risk burndown"],
  },
  {
    label: "Drive Value",
    overline: "Phase 04",
    body:
      "Outcomes that move the P&L. We measure value created, transfer the playbook, and exit only when the system runs without us.",
    artifacts: ["Outcome report", "Capability transfer", "Sustained metrics"],
  },
];

export default function Methodology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="method"
      data-testid="methodology-section"
      className="relative py-24 md:py-36 bg-[#0a1020] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-[#2563EB]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#60A5FA]">
              How We Do
            </span>
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
            A pipeline, not a deck.
          </h2>
          <p className="font-body text-lg text-white/65 mt-8 leading-relaxed">
            Four phases. Linear when they need to be, recursive when reality
            demands. Every engagement at Coremore runs this spine.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-[#2563EB] shadow-[0_0_12px_rgba(37,99,235,0.6)]"
          />

          <ol className="space-y-20 md:space-y-32">
            {STEPS.map((s, i) => {
              const onRight = i % 2 === 1;
              return (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`method-step-${i}`}
                  className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16 md:items-center"
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-[#050914] border border-[#2563EB] flex items-center justify-center shadow-[0_0_18px_rgba(37,99,235,0.45)]">
                      <span className="font-mono text-xs text-[#60A5FA] font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`${onRight ? "md:col-start-2" : ""}`}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#60A5FA]">
                      {s.overline}
                    </div>
                    <h3 className="font-display font-bold text-white text-3xl md:text-5xl mt-3 tracking-tight">
                      {s.label}
                    </h3>
                    <p className="font-body text-white/65 text-base md:text-lg mt-5 leading-relaxed max-w-md">
                      {s.body}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {s.artifacts.map((a) => (
                        <li
                          key={a}
                          className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 flex items-center gap-2"
                        >
                          <span className="w-2 h-px bg-white/30" /> {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Counterweight side – architectural marker */}
                  <div
                    className={`hidden md:block ${
                      onRight ? "md:col-start-1 md:row-start-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      {!onRight && <div className="flex-1" />}
                      <div className="border border-white/10 p-8 max-w-xs w-full">
                        <div className="font-display text-[72px] leading-none text-white/10 font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mt-2">
                          {onRight ? "Inbound" : "Outbound"} signal
                        </div>
                      </div>
                      {onRight && <div className="flex-1" />}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
