import React, { useState, useEffect } from "react";
import { CoremoreLogo, Wordmark } from "./CoremoreLogo";

const NAV_LINKS = [
  { id: "expertise", label: "Expertise" },
  { id: "method", label: "Method" },
  { id: "contact", label: "Partner" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050914]/80 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
        >
          <CoremoreLogo
            size={scrolled ? 34 : 44}
            className="group-hover:scale-110 group-hover:rotate-[8deg] group-hover:drop-shadow-[0_0_14px_rgba(96,165,250,0.55)]"
          />
          <Wordmark className="text-lg" />
        </button>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="font-display text-sm tracking-wider uppercase text-white/70 hover:text-white transition-colors link-underline"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          data-testid="nav-cta-button"
          className="hidden md:inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-5 py-2.5 transition-all shadow-[0_0_15px_rgba(37,99,235,0.25)] hover:shadow-[0_0_25px_rgba(37,99,235,0.55)]"
        >
          Partner With Us
          <span aria-hidden>→</span>
        </button>

        <button
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
        >
          <div className="w-6 h-[2px] bg-white mb-1.5" />
          <div className={`w-6 h-[2px] bg-white transition-all ${open ? "w-4" : ""}`} />
          <div className="w-6 h-[2px] bg-white mt-1.5" />
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden border-t border-white/10 bg-[#050914]/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-testid={`nav-mobile-link-${l.id}`}
                className="font-display text-base uppercase tracking-wider text-white/80 text-left"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-2 font-display text-sm uppercase tracking-wider bg-[#2563EB] text-white px-5 py-3"
            >
              Partner With Us →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
