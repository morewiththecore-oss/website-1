import React from "react";

export default function MidCTA() {
  const go = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const phrases = [
    "Diagnosis to Delivery",
    "Strategy to Results",
    "Move Decisively",
    "Integrity of Execution",
    "More with the Core",
  ];
  return (
    <section
      data-testid="mid-cta-section"
      className="relative bg-[#2563EB] text-[#050914] overflow-hidden"
    >
      {/* Marquee strip */}
      <div className="relative border-y border-[#050914]/15 py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap cm-marquee no-scrollbar">
          {[...phrases, ...phrases, ...phrases].map((p, i) => (
            <span
              key={i}
              className="font-display font-bold uppercase text-2xl md:text-4xl tracking-tight text-[#050914] flex items-center gap-12"
            >
              {p}
              <span className="text-[#050914]/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#050914]/70 mb-8">
              The Invitation
            </div>
            <h2 className="font-display font-black text-[#050914] text-5xl sm:text-6xl md:text-7xl lg:text-[112px] leading-[0.9] tracking-[-0.04em]">
              Let's Create
              <br />
              Value Together.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <p className="font-body text-lg text-[#050914]/80 max-w-sm leading-relaxed">
              If you have an outcome that won't wait — bring it to a partner who
              moves at the same speed.
            </p>
            <button
              onClick={go}
              data-testid="mid-cta-button"
              className="inline-flex items-center gap-3 bg-[#050914] text-white hover:bg-[#0f172a] px-8 py-5 font-display font-semibold uppercase tracking-[0.15em] text-sm transition-all hover:-translate-y-0.5"
            >
              Start the Conversation
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
