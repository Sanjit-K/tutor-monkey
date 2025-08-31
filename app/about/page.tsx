"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from 'react'
import Navigation from "@/components/Navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { useIsClient } from '@/hooks/useIsClient';

export default function AboutPage() {
  const isClient = useIsClient();

  if (!isClient) {
    return <main className="min-h-screen bg-white opacity-0" />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
        style={{ backgroundColor: 'var(--bgMain)' }}
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
              className="text-5xl md:text-7xl font-light mb-8 font-display"
              style={{ color: 'var(--textHeading)' }}
            >
              About Tutor Monkey
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light"
              style={{ color: 'var(--textDark)' }}
            >
              Our story, mission, and commitment to student success
            </motion.p>

          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="py-20 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <h2 className="text-4xl font-light text-gray-900 mb-6 font-display">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 font-light">
                  Tutor Monkey was founded by students who recognized a crucial gap in education support. 
                  We believe that peer-to-peer tutoring creates a unique learning environment where students 
                  feel comfortable asking questions and sharing their challenges.
                </p>
                <p className="text-lg text-gray-600 font-light">
                  What started as a small group of students helping their peers has grown into a 
                  community-wide initiative that has helped hundreds of students achieve their academic goals.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <h2 className="text-4xl font-light text-gray-900 mb-6 font-display">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 font-light">
                  We&apos;re committed to making quality tutoring accessible to every student. By connecting 
                  students with peer tutors who have recently mastered the same subjects, we create 
                  relatable and effective learning experiences.
                </p>
                <p className="text-lg text-gray-600 font-light">
                  As a nonprofit organization, we reinvest every dollar back into our programs and platform, and we donate a portion of proceeds to education initiatives and classroom grants in our community.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="py-20 px-6 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="text-4xl font-light text-gray-900 mb-16 text-center font-display"
            >
              Our Values
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Student-Centered",
                  description: "We put students' needs first, creating personalized learning experiences that work for them."
                },
                {
                  title: "Peer Support",
                  description: "We believe in the power of peer-to-peer learning to create comfortable and effective tutoring sessions."
                },
                {
                  title: "Community Impact",
                  description: "We're committed to building a strong educational community, reinvesting in our programs, and donating to education initiatives."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 + (index * 0.1) }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 font-light">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="py-20 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display"
            >
              Join Our Mission
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="text-xl text-gray-600 mb-12 font-light"
            >
                                Whether you&apos;re a student looking for help or want to become a tutor, we&apos;d love to have you join us
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/book">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg font-medium">
                  Book a Session
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-md font-medium">
                  Become a Tutor
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.4 }}
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
