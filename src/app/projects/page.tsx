'use client'

import { motion } from 'framer-motion'
import ExtendedProjects from '@/components/ExtendedProjects'
import Projects from '@/components/Projects'

export default function ProjectsPage() {
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
              Our Projects Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Explore our innovative solutions that have transformed businesses across industries. From cloud infrastructure to cutting-edge applications, discover how we deliver excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                <span>Enterprise Solutions</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                <span>Cloud Infrastructure</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                <span>Custom Development</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extended Projects Section */}
      <ExtendedProjects />

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our tech stack is carefully chosen to deliver robust and scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const technologies = [
  { name: "React & Next.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Redis", icon: "🔴" }
] 