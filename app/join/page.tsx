"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from 'react'
import Navigation from "@/components/Navigation";

// Define LINKS constant for application link
const LINKS = {
  tutorApplication: "https://docs.google.com/forms/d/e/1FAIpQLSdT1gBzgk3VThdKw0-bX8gq6GZ7oxgLdWx6Z04DGvSk5NwXlQ/viewform", // Replace with actual application form URL
};

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 animate-fade-in-up font-display">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto font-light">
            Become a tutor and help shape the future of education in Plano
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 animate-fade-in-up font-display">
              Why Become a Tutor?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 font-display">Leadership Experience</h3>
              <p className="text-gray-600 font-light">
                Develop leadership skills and gain valuable experience that will help with college applications and future careers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 font-display">Community Impact</h3>
              <p className="text-gray-600 font-light">
                Make a real difference in your community by helping fellow students succeed academically.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover-lift animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4 font-display">Earn While Learning</h3>
              <p className="text-gray-600 font-light">
                Get paid for sharing your knowledge while reinforcing your own understanding of subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 animate-fade-in-up font-display">
              What We&apos;re Looking For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
              <h3 className="text-2xl font-medium text-gray-900 mb-6 font-display">Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Current student at Plano West, Senior, or East</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Strong academic performance (3.5+ GPA preferred)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Excellent communication skills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Passion for helping others learn</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Reliable and punctual</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-medium text-gray-900 mb-6 font-display">What You&apos;ll Get</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Competitive pay ($20/hour)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Flexible scheduling around your classes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Leadership and teaching experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">College application boost</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Community service hours</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 mt-2"></div>
                  <span className="font-light">Networking with other high-achieving students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 animate-fade-in-up font-display">
              How to Apply
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 font-display">Submit Application</h3>
              <p className="text-gray-600 font-light">
                Fill out our online application form with your details and academic background
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 font-display">Interview</h3>
              <p className="text-gray-600 font-light">
                Meet with our team to discuss your interests and teaching approach
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 font-display">Start Tutoring</h3>
              <p className="text-gray-600 font-light">
                Begin your journey as a Tutor Monkey tutor and start making a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 animate-fade-in-up font-display">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in-up animation-delay-200 font-light">
            Join our team of dedicated tutors and help students succeed
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <Link href={LINKS.tutorApplication} target="_blank">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover-lift font-medium">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-semibold mb-4 font-display">Tutor Monkey</div>
              <p className="text-gray-400 font-light">Tutoring by students, for students</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/subjects" className="hover:text-white transition-colors font-light">Subjects</Link></li>
                <li><Link href="/book" className="hover:text-white transition-colors font-light">Book a Session</Link></li>
                <li><Link href="/tutors" className="hover:text-white transition-colors font-light">Meet Tutors</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors font-light">About</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors font-light">Testimonials</Link></li>
                <li><Link href="/join" className="hover:text-white transition-colors font-light">Join as Tutor</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition-colors font-light">Contact Us</Link></li>
                <li className="font-light">info@tutormonkey.co</li>
                <li className="font-light">Plano, TX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-light">© 2024 Tutor Monkey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 