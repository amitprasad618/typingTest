import React, { useState } from "react";

export default function HeroIllustration({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative flex justify-center items-center self-center max-h-[320px] pointer-events-none select-none ${className}`}
    >
      {failed ? (
        <div
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--muted)] text-sm w-32 h-40 max-h-[320px]"
          aria-hidden
        >
          Illustration
        </div>
      ) : (
        <div className="relative w-full max-h-[320px] flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="w-full h-full max-h-[320px] object-contain"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </div>
  );
}
