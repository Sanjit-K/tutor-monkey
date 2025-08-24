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
        {/* Placeholder resource card */}
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Resources Coming Soon</h2>
            <p className="text-gray-600 mb-4 text-sm">We&apos;re working on adding free study and review materials. Check back soon!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
