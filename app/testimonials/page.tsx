"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from 'react'
import Navigation from "@/components/Navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { useIsClient } from '@/hooks/useIsClient';

export default function TestimonialsPage() {
  const isClient = useIsClient();
  const testimonials = [
    {
      quote: "My daughter's math grades improved dramatically after just a few sessions. The tutors really understand what's being taught in class.",
      author: "S.M.",
      role: "Plano West Parent",
      rating: 5,
      category: "parent"
    },
    {
      quote: "Being a tutor has been amazing. I love helping other students and it's great experience for college applications.",
      author: "J.W.",
      role: "Junior at Plano West",
      rating: 5,
      category: "tutor"
    },
    {
      quote: "The SAT prep sessions were incredibly helpful. I improved my score by 200 points!",
      author: "A.K.",
      role: "Senior at Plano West",
      rating: 5,
      category: "student"
    },
    {
      quote: "My son was struggling with chemistry, but after working with his tutor, he's now getting A's. Highly recommend!",
      author: "M.L.",
      role: "Plano Senior Parent",
      rating: 5,
      category: "parent"
    },
    {
      quote: "I joined as a tutor because I wanted to give back to my community. The leadership opportunities are incredible.",
      author: "R.T.",
      role: "Junior at Plano West",
      rating: 5,
      category: "tutor"
    },
    {
      quote: "The AP Calculus help was exactly what I needed. My tutor explained concepts in ways that actually made sense.",
      author: "L.C.",
      role: "Senior at Plano East",
      rating: 5,
      category: "student"
    },
    {
      quote: "Affordable, flexible, and effective. My daughter can schedule sessions around her busy schedule.",
      author: "D.P.",
      role: "Plano West Parent",
      rating: 5,
      category: "parent"
    },
    {
      quote: "I love seeing the 'aha' moments when students finally understand a difficult concept.",
      author: "E.C.",
      role: "Junior at Plano West",
      rating: 5,
      category: "tutor"
    },
    {
      quote: "The English essay help was fantastic. I went from a C to an A in just a few weeks.",
      author: "K.M.",
      role: "Junior at Plano Senior",
      rating: 5,
      category: "student"
    }
  ];

  if (!isClient) {
    return <main className="min-h-screen bg-white opacity-0" />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="testimonials-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white"
      >
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-32 pb-20 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-light text-gray-900 mb-8 font-display"
            >
              What People Say
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
            >
              Real stories from students, parents, and tutors about their Tutor Monkey experience
            </motion.p>
          </div>
        </motion.section>

        {/* Testimonials Grid */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 font-light italic text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600 font-light">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="py-20 px-6 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display">
                Our Impact in Numbers
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Students Helped" },
                { number: "5.0", label: "Average Rating" },
                { number: "2000+", label: "Hours of Tutoring" },
                { number: "98%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="text-4xl font-light text-gray-900 mb-2 font-display">{stat.number}</div>
                  <div className="text-gray-600 font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="py-20 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display"
            >
              Join Our Success Stories
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="text-xl text-gray-600 mb-12 font-light"
            >
              Start your academic journey with Tutor Monkey today
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/book">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg font-medium">
                  Book a Session
                </Button>
              </Link>
              <Link href="/tutors">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-md font-medium">
                  Meet Our Tutors
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="py-12 px-6 bg-gray-900 text-white"
        >
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
        </motion.footer>
      </motion.main>
    </AnimatePresence>
  );
}
