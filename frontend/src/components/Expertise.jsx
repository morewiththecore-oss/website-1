import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  ArrowsClockwise,
  ChartLineUp,
  Megaphone,
} from "@phosphor-icons/react";

const PILLARS = [
  {
    id: "pm",
    icon: Compass,
    number: "01",
    title: "Project Management",
    focus: "Delivery Certainty · Structural Oversight",
    body:
      "We install the operating spine — cadence, ownership, risk visibility — so complex programs land on time, on scope, with the integrity of execution intact.",
    keywords: ["Cadence", "Ownership", "Risk"],
  },
  {
    id: "turnaround",
    icon: ArrowsClockwise,
    number: "02",
    title: "Business Turnaround",
    focus: "Acting Early · Sustainable Recovery",
    body:
      "Recovery is engineered, not improvised. We move decisively at the first warning signs — restructuring operations, cash and conviction toward a durable comeback.",
    keywords: ["Cashflow", "Restructure", "Stabilize"],
  },
  {
    id: "cost",
    icon: ChartLineUp,
    number: "03",
    title: "Cost Optimization",
    focus: "Competitive Advantage, Not Cuts",
    body:
      "Cost is a strategic lever. We re-architect spend to fund growth — separating fuel from friction — turning margin into a competitive moat.",
    keywords: ["Margin", "Re-architect", "Advantage"],
  },
  {
    id: "brand",
    icon: Megaphone,
    number: "04",
    title: "Branding & Communications",
    focus: "Narratives that Strengthen Strategy",
    body:
      "Strategy that cannot be told cannot be sold. We craft narratives that align stakeholders, customers and teams behind the work that matters most.",
    keywords: ["Narrative", "Alignment", "Voice"],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      data-testid="expertise-section"
      className="relative py-24 md:py-36 bg-[#050914]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#2563EB]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#60A5FA]">
                Four Disciplines · One Operating System
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Where strategy meets Results.
            </h2>
          </div>
          <p className="font-body text-lg text-white/65 max-w-md leading-relaxed">
            Each engagement is shaped around the same conviction: that the
            distance from boardroom intent to operational truth must be walked,
            not delegated.
          </p>
        </div>

        {/* Grid Borders — naked architectural look */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10"
          data-testid="expertise-grid"
        >
          {PILLARS.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              data-testid={`expertise-card-${p.id}`}
              className="group relative border-r border-b border-white/10 p-8 md:p-10 min-h-[420px] flex flex-col transition-colors duration-500 hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
                  {p.number}
                </span>
                <p.icon
                  size={32}
                  weight="thin"
                  className="text-white/70 group-hover:text-[#60A5FA] transition-colors"
                />
              </div>

              <h3 className="font-display font-semibold text-white text-2xl md:text-[28px] leading-tight tracking-tight">
                {p.title}
              </h3>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#60A5FA] mt-3">
                {p.focus}
              </div>

              <p className="font-body text-[15px] md:text-base text-white/65 leading-relaxed mt-6">
                {p.body}
              </p>

              <div className="mt-auto pt-8 flex flex-wrap gap-2">
                {p.keywords.map((k) => (
                  <span
                    key={k}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 border border-white/15 px-2.5 py-1"
                  >
                    {k}
                  </span>
                ))}
              </div>

              {/* hover accent line */}
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#2563EB] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
