// Replaced file with framer-motion-powered version, using isClient guard, and removing Tailwind animation classes.
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import Navigation from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useIsClient } from "@/hooks/useIsClient";

export default function ContactPage() {
  const isClient = useIsClient?.() ?? true;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
  } as const;

  const slideInLeft = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  } as const;

  const slideInRight = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 24 },
  } as const;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  } as const;

  if (!isClient) return null;

  return (
    <main 
        className="min-h-screen"
        style={{ backgroundColor: 'var(--bgMain)' }}
      >
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-6"
        style={{ backgroundColor: 'var(--bgSection)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-light text-gray-900 mb-8 font-display"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8 font-display">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-900 font-medium">
                      First Name
                    </Label>
                    <Input id="firstName" type="text" className="mt-2" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-900 font-medium">
                      Last Name
                    </Label>
                    <Input id="lastName" type="text" className="mt-2" placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 font-medium">
                    Email Address
                  </Label>
                  <Input id="email" type="email" className="mt-2" placeholder="Enter your email address" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-900 font-medium">
                    Phone Number (Optional)
                  </Label>
                  <Input id="phone" type="tel" className="mt-2" placeholder="Enter your phone number" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-900 font-medium">
                    Subject
                  </Label>
                  <select
                    id="subject"
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="tutoring">Tutoring Information</option>
                    <option value="join">Join as Tutor</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-900 font-medium">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3 rounded-lg transition-all duration-300 font-medium">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8 font-display">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 font-light">info@tutormonkey.co</p>
                    <p className="text-sm text-gray-500 font-light">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 font-light">(469) 609-7184</p>
                    <p className="text-sm text-gray-500 font-light">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 font-light">Plano, Texas</p>
                    <p className="text-sm text-gray-500 font-light">Serving Plano ISD students</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-medium text-gray-900 mb-4 font-display">Business Hours</h3>
                <div className="space-y-2 text-gray-600 font-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <AnimatePresence>
              {[
                {
                  q: "How much do tutoring sessions cost?",
                  a:
                    "All tutoring sessions are $20 per hour, regardless of subject or tutor. We believe in keeping education accessible and affordable.",
                },
                {
                  q: "Do you offer online tutoring?",
                  a:
                    "Yes! We offer both in-person and online tutoring sessions. Online sessions are conducted via Zoom or Google Meet for your convenience.",
                },
                {
                  q: "How do I book a session?",
                  a:
                    "You can book a session by filling out our booking form on the website, calling us, or sending us an email. We'll get back to you within 24 hours to confirm details.",
                },
                {
                  q: "What subjects do you offer?",
                  a:
                    "We offer tutoring in all major subjects including Mathematics, Science, English, History, Test Preparation, and Computer Science. All tutoring is aligned with Plano ISD curriculum.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.q}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  variants={fadeInUp}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-4 font-display">{item.q}</h3>
                  <p className="text-gray-600 font-light">{item.a}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-12 font-light"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.07 }}
          >
            Book your first tutoring session today and start achieving your academic goals
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp}>
              <Link href="/book">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover-lift font-medium">
                  Book a Session
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/tutors">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover-lift font-medium"
                >
                  Meet Our Tutors
                </Button>
              </Link>
            </motion.div>
          </motion.div>
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
                <li>
                  <Link href="/subjects" className="hover:text-white transition-colors font-light">
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="hover:text-white transition-colors font-light">
                    Book a Session
                  </Link>
                </li>
                <li>
                  <Link href="/tutors" className="hover:text-white transition-colors font-light">
                    Meet Tutors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors font-light">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors font-light">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="hover:text-white transition-colors font-light">
                    Join as Tutor
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors font-light">
                    Contact Us
                  </Link>
                </li>
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
  );
}