'use client'

import { motion } from 'framer-motion'
import Team from '@/components/Team'

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Expert Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Meet the talented professionals behind our innovative IT solutions. Our diverse team brings together expertise in software development, cybersecurity, cloud computing, and more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                <span>Global IT Solutions</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                <span>Industry Leaders</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <Team />

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide our team in delivering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-20">
                <span className="text-2xl text-brand-orange">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                Innovation First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-20">
                <span className="text-2xl text-brand-orange">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                Client Success
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your success is our priority. We work collaboratively to understand and meet your unique needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-brand-orange bg-opacity-10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-20">
                <span className="text-2xl text-brand-orange">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards in everything we do, from code quality to client communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 