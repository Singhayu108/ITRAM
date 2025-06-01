'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: 'easeOut'
    }
  })
}

const scrollingTextVariants = {
  animate: {
    x: [0, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
}

export default function Hero() {
  const headingText = "Transform Your Digital Presence".split(" ")
  
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-brand-orange-dark via-brand-orange to-brand-orange-light overflow-hidden">
      {/* Scrolling Background Text */}
      <div className="absolute inset-0 opacity-5 whitespace-nowrap overflow-hidden pointer-events-none">
        <motion.div
          variants={scrollingTextVariants}
          animate="animate"
          className="text-[200px] font-bold text-white"
        >
          ITRAM MANAGEMENT ITRAM MANAGEMENT
        </motion.div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="flex flex-wrap justify-center">
          {headingText.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold mx-2 text-white"
            >
              {word}
            </motion.span>
          ))}
        </div>
        
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={headingText.length + 1}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto mt-6 text-white/90"
        >
          We create stunning websites and digital experiences that help your business grow
        </motion.p>
        
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={headingText.length + 2}
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
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
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
      </div>
    </section>
  )
} 