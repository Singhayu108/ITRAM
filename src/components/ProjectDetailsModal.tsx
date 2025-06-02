'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

interface ProjectDetailsModalProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 bg-white dark:bg-gray-800 rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <div className="flex-1 overflow-auto">
              {/* Header Image */}
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full">
                      {project.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="prose dark:prose-invert max-w-none"
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                    <ul className="space-y-4">
                      {project.features.map((feature: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-brand-orange rounded-full mr-3" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h3>
                    <p className="text-brand-orange font-medium text-lg">
                      {project.results}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 