import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-8 relative">
      <div className="max-w-4xl mx-auto text-center relative">

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/book">
              <Button 
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--textLight)',
                }}
                className="px-8 py-4 text-lg rounded-lg transition-all duration-300 font-medium hover:opacity-90"
              >
                Book a Session
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/subjects">
              <Button
                variant="outline"
                style={{
                  borderColor: 'var(--borderLight)',
                  color: 'var(--textDark)',
                }}
                className="px-8 py-4 text-lg rounded-lg transition-all duration-300 font-medium hover:bg-opacity-10"
              >
                Explore Subjects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll prompt */}
        <motion.div 
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            className="w-6 h-6 mx-auto" 
            style={{ color: 'var(--textMuted)' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}