'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaMobileAlt, FaDatabase, FaCloud, FaShieldAlt, FaRobot, FaChartLine } from 'react-icons/fa'

const projects = [
  {
    title: "Enterprise Cloud Solution",
    description: "Cloud-based enterprise resource planning system with real-time analytics and reporting.",
    image: "/images/projects/project1.jpg",
    icon: <FaCloud className="w-8 h-8" />,
    technologies: ["React", "Node.js", "AWS", "Docker"],
    features: [
      "Real-time data processing",
      "Multi-tenant architecture",
      "Advanced analytics dashboard",
      "Automated scaling"
    ],
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
    technologies: ["Python", "Django", "PostgreSQL", "Redis"],
    features: [
      "Fraud detection system",
      "Multi-currency support",
      "Real-time transaction monitoring",
      "Automated reconciliation"
    ],
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
    technologies: ["Angular", "MongoDB", "MQTT", "Kubernetes"],
    features: [
      "Device fleet management",
      "Real-time monitoring",
      "Predictive maintenance",
      "Custom dashboards"
    ],
    links: {
      github: "https://github.com/project3",
      live: "https://project3.com"
    }
  },
  {
    title: "AI-Powered Analytics",
    description: "Machine learning platform for business intelligence and predictive analytics.",
    image: "/images/projects/project4.jpg",
    icon: <FaRobot className="w-8 h-8" />,
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    features: [
      "Predictive modeling",
      "Automated reporting",
      "Custom ML models",
      "Data visualization"
    ],
    links: {
      github: "https://github.com/project4",
      live: "https://project4.com"
    }
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application with advanced features.",
    image: "/images/projects/project5.jpg",
    icon: <FaMobileAlt className="w-8 h-8" />,
    technologies: ["React Native", "Node.js", "MongoDB", "Redis"],
    features: [
      "Biometric authentication",
      "Real-time transactions",
      "Bill payments",
      "Investment tracking"
    ],
    links: {
      github: "https://github.com/project5",
      live: "https://project5.com"
    }
  },
  {
    title: "Business Intelligence Dashboard",
    description: "Comprehensive BI solution for data-driven decision making.",
    image: "/images/projects/project6.jpg",
    icon: <FaChartLine className="w-8 h-8" />,
    technologies: ["Vue.js", "Python", "PostgreSQL", "Tableau"],
    features: [
      "Custom reporting",
      "Data integration",
      "Interactive visualizations",
      "Export capabilities"
    ],
    links: {
      github: "https://github.com/project6",
      live: "https://project6.com"
    }
  }
]

export default function ExtendedProjects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
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
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 transition-transform duration-300 group-hover:scale-125"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
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
                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 