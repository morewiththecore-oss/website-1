import React from "react";
import { CoremoreLogo, Wordmark } from "./CoremoreLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#030610] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <CoremoreLogo size={44} />
              <Wordmark className="text-xl" />
            </div>
            <p className="font-body text-white/55 text-base mt-6 max-w-sm leading-relaxed">
              A boutique consultancy bridging strategy and execution — in the
              trenches with leaders who need outcomes, not opinions.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#60A5FA] mt-8">
              More with the Core
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-5">
              Navigate
            </div>
            <ul className="space-y-3">
              {[
                ["expertise", "Expertise"],
                ["method", "How We Do"],
                ["contact", "Partner With Us"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    data-testid={`footer-link-${id}`}
                    className="font-display text-white/75 hover:text-white text-sm tracking-wide link-underline"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 mb-5">
              Disciplines
            </div>
            <ul className="space-y-3 font-display text-sm text-white/75 tracking-wide">
              <li>Project Management</li>
              <li>Business Turnaround</li>
              <li>Cost Optimization</li>
              <li>Branding & Communications</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
            © {year} Coremore Partners · All rights reserved
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
            Designed for outcomes · Built for delivery
          </div>
        </div>
      </div>
    </footer>
  );
}
