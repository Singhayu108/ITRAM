'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedBackground from '@/components/AnimatedBackground'

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  })
}

export default function Hero() {
  return (
    <AnimatedBackground title="Transform Your Digital Presence">
      <motion.p
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={4}
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto mt-6 text-white/90 font-light"
      >
        We create stunning websites and digital experiences that help your business grow
      </motion.p>
      
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        custom={5}
        className="space-x-4"
      >
        <Link 
          href="/contact" 
          className="inline-block px-8 py-3 bg-white text-brand-orange-dark font-semibold rounded-full 
          hover:bg-brand-orange-light hover:text-white transform hover:scale-105 transition-all duration-300 
          hover:shadow-lg hover:shadow-white/20"
        >
          Get Started
        </Link>
        <a 
          href="#services" 
          className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full 
          hover:bg-white hover:text-brand-orange-dark transform hover:scale-105 transition-all duration-300 
          hover:shadow-lg hover:shadow-white/20"
        >
          Our Services
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#services" className="text-white hover:text-brand-orange-light transition-colors">
            <svg 
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </AnimatedBackground>
  )
} 