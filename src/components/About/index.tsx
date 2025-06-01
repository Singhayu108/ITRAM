'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Team Members', value: '20+' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-brand-orange dark:text-white mb-6">
              About ITRAM Management
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 group-hover:text-gray-900">
              We are a leading digital agency specializing in creating innovative web solutions
              and digital experiences. With over a decade of experience, we've helped
              businesses transform their digital presence and achieve their goals.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-900">
              Our team of experts combines creativity with technical expertise to deliver
              solutions that not only look great but also drive results. We believe in
              building long-term partnerships with our clients and helping them stay ahead
              in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg 
                transform hover:scale-105 transition-all duration-300 
                hover:shadow-brand-orange/30 border border-transparent 
                hover:border-brand-orange/20"
              >
                <div className="text-4xl font-bold text-brand-orange mb-2 
                group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 
                dark:group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 