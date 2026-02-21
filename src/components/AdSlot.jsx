import React from "react";

export default function AdSlot({ position, width, height }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg border-2 border-dashed border-[var(--border)] bg-[var(--surface)]/50 text-[var(--muted)] text-sm font-medium"
      style={{ width, height, maxWidth: "100%", maxHeight: "100%" }}
    >
      Ad Space
    </div>
  );
}
