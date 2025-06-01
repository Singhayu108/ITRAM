'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCloud, FaShieldAlt, FaDatabase, FaMobile, FaBrain, FaChartLine } from 'react-icons/fa'

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
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Innovative solutions that drive business transformation and growth
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 text-brand-orange bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-brand-orange rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Results
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Let's discuss how we can help transform your business with our innovative solutions.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block bg-brand-orange text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  )
} 