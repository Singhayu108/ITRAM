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

const backgroundVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}

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
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-[length:400%_400%]"
      >
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </motion.div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute rounded-full bg-brand-orange/5 backdrop-blur-3xl"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-orange-light via-white to-brand-orange-light opacity-20 blur-lg" />
            <div className="relative">
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
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project)}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-20 blur-lg group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute top-4 right-4 text-brand-orange bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                  >
                    {project.icon}
                  </motion.div>
                </div>
                <div className="p-6 border-t-2 border-transparent group-hover:border-brand-orange transition-colors duration-300">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2"
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (techIndex * 0.1) }}
                        className="bg-brand-orange/10 text-brand-orange text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className="flex items-center justify-between text-brand-orange font-medium"
                  >
                    <span>View Details</span>
                    <FaExternalLinkAlt className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
} 