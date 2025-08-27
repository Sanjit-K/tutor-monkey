"use client";

import Navigation from "@/components/Navigation";
import React from "react";

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

          {/* New resource card: AP Calculus BC Limits Review */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-start">
            <h2 className="text-xl font-semibold mb-2">
              AP Calculus BC Limits Review
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Unit 1 review for limits
            </p>
            <a
              href="https://drive.google.com/file/d/1FNq46-rMfjQJdkoH7dM9_09dcYq_qi4y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View PDF
            </a>
            <a
              href="https://drive.google.com/file/d/1VcbykiwHt6-4fw1gi4TV_atsV7b3i6H_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Key
            </a>
          </div>          
        </div>
      </section>
    </main>
  );
}