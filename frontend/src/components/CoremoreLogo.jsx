import React from "react";
import logoImg from "../assets/coremore-logo.png";

// Coremore brand logo (uploaded mark)
export const CoremoreLogo = ({ size = 28, className = "" }) => (
  <img
    src={logoImg}
    width={size}
    height={size}
    alt="Coremore"
    className={`object-contain transition-all duration-300 ease-out ${className}`}
    style={{ width: size, height: size }}
  />
);

export const Wordmark = ({ className = "" }) => (
  <span className={`font-display font-bold tracking-[-0.02em] text-white ${className}`}>
    Coremore<span className="text-[#2563EB]">.</span>
  </span>
);
