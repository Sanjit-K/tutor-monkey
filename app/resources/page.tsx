"use client";

import Navigation from "@/components/Navigation";
import React, { useState } from "react";

function FolderSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
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

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 animate-fade-in-up font-display">
            Free Study & Review Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto font-light">
            Access free study guides, review sheets, and practice materials for a variety of subjects. More coming soon!
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <FolderSection title="AP Calculus BC" defaultOpen={true}>
            {/* Limits card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-start">
              <h2 className="text-xl font-semibold mb-2">AP Calculus BC Limits Review</h2>
              <p className="text-gray-600 mb-4 text-sm">Unit 1 review for limits</p>

              <a
                id="calc-bc-limits-pdf"
                href="https://drive.google.com/file/d/1FNq46-rMfjQJdkoH7dM9_09dcYq_qi4y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline mb-2"
                data-gtm="download"
                data-gtm-label="AP Calculus BC Limits Review PDF"
                aria-label="Open AP Calculus BC Limits Review PDF"
              >
                View PDF
              </a>

              <a
                id="calc-bc-limits-key"
                href="https://drive.google.com/file/d/1VcbykiwHt6-4fw1gi4TV_atsV7b3i6H_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
                data-gtm="download"
                data-gtm-label="AP Calculus BC Limits Review Key"
                aria-label="Open AP Calculus BC Limits Review Key"
              >
                View Key
              </a>
            </div>

            {/* Derivatives card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-start">
              <h2 className="text-xl font-semibold mb-2">AP Calculus BC Derivatives Review</h2>
              <p className="text-gray-600 mb-4 text-sm">Units 2.1-2.5 review for derivatives</p>

              <a
                id="calc-bc-deriv-2-1"
                href="https://drive.google.com/file/d/1qMhl0h9R0uZZyJVLIwMsTL0ArH_35Vp_/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline mb-2"
                data-gtm="download"
                data-gtm-label="AP Calculus BC Derivatives Review 2.1"
                aria-label="Open AP Calculus BC Derivatives Review 2.1"
              >
                Review 2.1
              </a>

              <a
                id="calc-bc-deriv-2-2-2-5"
                href="https://drive.google.com/file/d/1_kXDl4BmCaOBegT4lRYh9EQE3Bsle_uj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
                data-gtm="download"
                data-gtm-label="AP Calculus BC Derivatives Review 2.2-2.5"
                aria-label="Open AP Calculus BC Derivatives Review 2.2-2.5"
              >
                Review 2.2-2.5
              </a>
            </div>
          </FolderSection>
        </div>
      </section>
    </main>
  );
}
