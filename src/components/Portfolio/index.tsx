'use client'

import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features',
    image: '/portfolio/ecommerce.jpg',
    category: 'Web Development',
  },
  {
    title: 'Brand Identity',
    description: 'Complete brand redesign for a tech startup',
    image: '/portfolio/branding.jpg',
    category: 'Design',
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application for service booking',
    image: '/portfolio/mobile-app.jpg',
    category: 'App Development',
  },
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-orange dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing our best work and successful projects
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg 
              transform hover:scale-105 transition-all duration-300 
              hover:shadow-brand-orange/30"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-brand-orange to-brand-orange-light opacity-90 
                group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 
              flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 
              transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-orange-light 
                transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-2 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                <span className="inline-block bg-brand-orange/90 text-white px-4 py-1 rounded-full 
                text-sm font-semibold transform group-hover:scale-105 transition-all duration-300 
                group-hover:bg-brand-orange">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 