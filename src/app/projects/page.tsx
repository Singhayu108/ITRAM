'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCloud, FaShieldAlt, FaDatabase, FaMobile, FaBrain, FaChartLine, FaArrowRight } from 'react-icons/fa'
import ProjectDetailsModal from '@/components/ProjectDetailsModal'
import AnimatedBackground from '@/components/AnimatedBackground'

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

const projects = [
  {
    title: "Enterprise Cloud Solution",
    description: "A comprehensive cloud infrastructure solution for large-scale enterprises, featuring automated scaling, real-time monitoring, and advanced security protocols.",
    image: "/images/projects/project1.jpg",
    icon: <FaCloud className="w-8 h-8" />,
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
    features: [
      "Auto-scaling infrastructure",
      "Real-time monitoring",
      "Disaster recovery",
      "Cost optimization"
    ],
    results: "Reduced infrastructure costs by 40% while improving system reliability to 99.99% uptime."
  },
  {
    title: "Secure Payment Gateway",
    description: "A PCI-compliant payment processing system with advanced fraud detection capabilities and support for multiple payment methods and currencies.",
    image: "/images/projects/project2.jpg",
    icon: <FaShieldAlt className="w-8 h-8" />,
    technologies: ["Node.js", "PostgreSQL", "Redis", "Stripe API", "Docker"],
    features: [
      "Multi-currency support",
      "Fraud detection",
      "Payment analytics",
      "Automated reconciliation"
    ],
    results: "Processed over $10M in transactions with 0% fraud rate and 99.9% uptime."
  },
  {
    title: "IoT Management Platform",
    description: "A scalable IoT device management platform enabling real-time monitoring, data analytics, and remote device control for industrial applications.",
    image: "/images/projects/project3.jpg",
    icon: <FaDatabase className="w-8 h-8" />,
    technologies: ["React", "Node.js", "MongoDB", "MQTT", "WebSocket"],
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Device management",
      "Data visualization"
    ],
    results: "Managing 10,000+ connected devices with real-time data processing and analytics."
  },
  {
    title: "Mobile Banking App",
    description: "A secure and user-friendly mobile banking application with features like biometric authentication, instant transfers, and investment tracking.",
    image: "/images/projects/project4.jpg",
    icon: <FaMobile className="w-8 h-8" />,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
    features: [
      "Biometric security",
      "Instant transfers",
      "Investment tracking",
      "Bill payments"
    ],
    results: "4.8/5 star rating with 1M+ downloads and 500K active monthly users."
  },
  {
    title: "AI-Powered Analytics",
    description: "An advanced analytics platform leveraging machine learning for predictive insights and automated decision-making in business operations.",
    image: "/images/projects/project5.jpg",
    icon: <FaBrain className="w-8 h-8" />,
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    features: [
      "Predictive analytics",
      "Automated reporting",
      "Custom dashboards",
      "Data integration"
    ],
    results: "Improved decision accuracy by 35% and reduced analysis time by 60%."
  },
  {
    title: "Business Intelligence Dashboard",
    description: "A comprehensive BI solution providing real-time insights, custom reporting, and data visualization for enterprise decision-making.",
    image: "/images/projects/project6.jpg",
    icon: <FaChartLine className="w-8 h-8" />,
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Python"],
    features: [
      "Real-time analytics",
      "Custom reporting",
      "Data visualization",
      "Export capabilities"
    ],
    results: "Enabled data-driven decisions resulting in 25% revenue growth for clients."
  }
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <main className="min-h-screen">
      <AnimatedBackground title="Our Featured Projects">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-white/90 mt-6 mb-8 max-w-2xl mx-auto font-light"
            >
              Innovative solutions that drive business transformation and growth
            </motion.p>
      </AnimatedBackground>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => handleOpenModal(project)}
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="absolute top-4 right-4 text-brand-orange bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                    >
                    {project.icon}
                    </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="bg-brand-orange/10 text-brand-orange text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-brand-orange font-medium">
                      <span>View Details</span>
                      <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-orange-dark via-brand-orange to-brand-orange-light">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Have a Project in Mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Let's discuss how we can help bring your vision to life.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block bg-white text-brand-orange-dark px-8 py-3 rounded-full font-semibold 
                hover:bg-brand-orange-light hover:text-white transform transition-all duration-300 
                hover:shadow-lg hover:shadow-white/20"
            >
              Start a Project
            </motion.a>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  )
} 