"use client";

import { useState } from "react";

interface ResourceFolderProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ResourceFolder({ title, children, defaultOpen = false }: ResourceFolderProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 focus:outline-none"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <span className={`inline-block transition-transform ${open ? "rotate-90" : "rotate-0"}`} aria-hidden>
            ▶
          </span>
          <span className="text-lg font-semibold text-gray-900">{title}</span>
        </div>
        <span className="text-sm text-gray-500">{open ? "Hide" : "Show"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <div className="flex flex-col gap-6">{children}</div>
        </div>
      )}
    </div>
  );
}
