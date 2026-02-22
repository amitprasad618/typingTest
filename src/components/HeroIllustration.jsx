import React, { useState } from "react";

export default function HeroIllustration({ src, alt, className = "", loading = "eager" }) {
  const [failed, setFailed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`relative flex justify-center items-center self-center max-h-[320px] pointer-events-none select-none rounded-2xl border border-[var(--border)] bg-[var(--surface)] w-32 h-40 text-[var(--muted)] text-sm ${className}`}
        aria-hidden
      >
        Illustration (Unavailable)
      </div>
    );
  }

  return (
    <div
      className={`relative flex justify-center items-center self-center max-h-[320px] pointer-events-auto select-none cursor-pointer overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full max-h-[320px] object-contain transition-transform duration-300 ease-out ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
