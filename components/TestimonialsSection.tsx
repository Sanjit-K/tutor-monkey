import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

const testimonials = [
  {
  quote: "We are so grateful for Matthew's support! His patience, knowledge, and engaging teaching style have greatly impacted my learning. He explains concepts clearly and makes lessons enjoyable, which has boosted my confidence and progress.",
  author: "J.H.",
  role: "Sophomore at Greenhill High School",
  rating: 5,
  category: "student"
},
{
  quote: "The AP Calculus help was exactly what I needed. My tutor walked me through tough problems and made sure I understood each step.",
  author: "L.C.",
  role: "Sophomore at Jasper High School",
  rating: 5,
  category: "student"
},
{
  quote: "I used to struggle in chemistry, but tutoring sessions made it much clearer. My grades improved and I feel more confident in class.",
  author: "M.L.",
  role: "Junior at Plano Senior",
  rating: 5,
  category: "student"
}
];

export default function TestimonialsSection() {
  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: 'var(--bgSection)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl font-light mb-6 font-display"
            style={{ color: 'var(--textHeading)' }}
          >
            Why Students Trust Us
          </h2>
        </motion.div>
        
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="flex-shrink-0 w-96 snap-start"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="p-8 rounded-2xl shadow-sm border h-full"
                style={{
                  backgroundColor: 'var(--bgLight)',
                  borderColor: 'var(--borderLight)'
                }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex" style={{ color: 'var(--primary)' }}>
                    {[...Array(5)].map((_, i) => (
                      <motion.svg 
                        key={i} 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
                <p 
                  className="mb-6 font-light text-lg"
                  style={{ color: 'var(--textDark)' }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--textMuted)' }}
                >
                  <span className="font-medium">{testimonial.author}</span> • {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/book">
              <Button 
                className="px-8 py-4 text-lg rounded-lg transition-all duration-300 font-medium"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--textLight)'
                }}
              >
                Book a Session
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 