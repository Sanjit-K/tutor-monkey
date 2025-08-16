"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const subjects = [
  {
    name: "Mathematics",
    description: "Algebra, Geometry, Calculus, Statistics, and more",
    icon: "📐",
    levels: ["9th Grade", "10th Grade", "11th Grade", "12th Grade", "AP Courses"]
  },
  {
    name: "Science",
    description: "Biology, Chemistry, Physics, Environmental Science",
    icon: "🔬",
    levels: ["9th Grade", "10th Grade", "11th Grade", "12th Grade", "AP Courses"]
  },
  {
    name: "English & Literature",
    description: "Reading comprehension, writing, grammar, literature analysis",
    icon: "📚",
    levels: ["9th Grade", "10th Grade", "11th Grade", "12th Grade", "AP Courses"]
  },
  {
    name: "History & Social Studies",
    description: "World History, US History, Government, Economics",
    icon: "🏛️",
    levels: ["9th Grade", "10th Grade", "11th Grade", "12th Grade", "AP Courses"]
  },
  {
    name: "Test Preparation",
    description: "SAT, ACT, AP Exams, STAAR, and other standardized tests",
    icon: "✏️",
    levels: ["All Grade Levels"]
  },
  {
    name: "Computer Science",
    description: "Programming, Computer Science Principles, AP Computer Science",
    icon: "💻",
    levels: ["9th Grade", "10th Grade", "11th Grade", "12th Grade", "AP Courses"]
  }
];

export default function SubjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 animate-fade-in-up font-display">
            Our Subjects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto font-light">
            Comprehensive tutoring in all major subjects aligned with Plano ISD curriculum
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{subject.icon}</div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3 font-display">
                  {subject.name}
                </h3>
                <p className="text-gray-600 mb-4 font-light">
                  {subject.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Grade Levels:</h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display">
            Simple, Transparent Pricing
          </h2>
          <div className="text-4xl font-light text-gray-900 mb-2 font-display">$20</div>
          <div className="text-lg text-gray-600 mb-8">per hour, any subject, any grade</div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">1-on-1 Tutoring</h3>
              <p className="text-gray-600 mb-2">Personalized sessions tailored to your needs</p>
              <p className="text-gray-900 font-bold">$20/hr</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Group Sessions</h3>
              <p className="text-gray-600 mb-2">Study with friends and save</p>
              <p className="text-gray-900 font-bold">$15/hr per student</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
