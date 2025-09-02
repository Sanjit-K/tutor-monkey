"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import AutoPlayTextSequence from '@/components/AutoPlayTextSequence';
import TutorsSection from '@/components/TutorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsClient } from '@/hooks/useIsClient';


export default function Home() {
  const isClient = useIsClient();

  if (!isClient) {
    return <main className="min-h-screen bg-white opacity-0" />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ backgroundColor: 'var(--bgMain)', color: 'var(--textDark)' }}
        className="min-h-screen"
      >
        <Navigation />
        <AutoPlayTextSequence />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.0 }}>
          <TutorsSection />
          <TestimonialsSection />
          <Footer />
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}