import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      style={{
        backgroundColor: 'var(--bgFooter)',
        color: 'var(--textLight)',
      }}
      className="py-12 px-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4">Quick Links</h3>
            <div className="space-y-2" style={{ color: 'var(--textMuted)' }}>
              <Link href="/subjects" className="hover:text-white transition-colors font-light block">Subjects</Link>
              <Link href="/tutors" className="hover:text-white transition-colors font-light block">Tutors</Link>
              <Link href="/contact" className="hover:text-white transition-colors font-light block">Contact</Link>
              <Link href="/join" className="hover:text-white transition-colors font-light block">Join</Link>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4">Contact</h3>
            <div className="space-y-2" style={{ color: 'var(--textMuted)' }}>
              <p className="font-light">info@tutormonkey.co</p>
              <p className="font-light">(469) 609-7184</p>
              <p className="font-light">Plano, TX</p>
            </div>
          </motion.div>
          
          {/* Social Icons */}
          
        </div>

        <motion.div 
          className="border-t border-gray-800 pt-6 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-light">© 2024 Tutor Monkey. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
} 