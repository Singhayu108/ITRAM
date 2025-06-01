'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaCloud, FaShieldAlt, FaDatabase } from 'react-icons/fa'
import ProjectModal from './ProjectModal'
import { Project } from '@/types/project'

const featuredProjects: Project[] = [
  {
    title: "Enterprise Cloud Solution",
    description: "Cloud-based enterprise resource planning system with real-time analytics and reporting.",
    image: "/images/projects/project1.jpg",
    icon: <FaCloud className="w-8 h-8" />,
    technologies: ["React", "Node.js", "AWS"],
    links: {
      github: "https://github.com/project1",
      live: "https://project1.com"
    }
  },
  {
    title: "Secure Payment Gateway",
    description: "PCI-compliant payment processing system with fraud detection and multi-currency support.",
    image: "/images/projects/project2.jpg",
    icon: <FaShieldAlt className="w-8 h-8" />,
    technologies: ["Python", "Django", "PostgreSQL"],
    links: {
      github: "https://github.com/project2",
      live: "https://project2.com"
    }
  },
  {
    title: "IoT Management Platform",
    description: "Scalable IoT device management platform with real-time monitoring and analytics.",
    image: "/images/projects/project3.jpg",
    icon: <FaDatabase className="w-8 h-8" />,
    technologies: ["Angular", "MongoDB", "MQTT"],
    links: {
      github: "https://github.com/project3",
      live: "https://project3.com"
    }
  }
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Discover how we deliver innovative solutions for our clients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 text-brand-orange bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                  {project.icon}
                </div>
              </div>
              <div className="p-6 border-t-2 border-transparent group-hover:border-brand-orange transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full transition-colors duration-300 hover:bg-brand-orange hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
} 