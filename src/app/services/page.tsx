'use client'

import { motion } from 'framer-motion'
import { FaCloud, FaShieldAlt, FaDatabase, FaMobile, FaCode, FaChartLine } from 'react-icons/fa'
import AnimatedBackground from '@/components/AnimatedBackground'

const services = [
  {
    icon: <FaCloud className="w-12 h-12" />,
    title: "Cloud Solutions",
    description: "Enterprise-grade cloud infrastructure and migration services with 24/7 support and monitoring.",
    features: [
      "Cloud Migration",
      "Infrastructure Management",
      "Cloud Security",
      "Scalability Solutions"
    ]
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
    features: [
      "Threat Detection",
      "Security Audits",
      "Compliance Management",
      "Incident Response"
    ]
  },
  {
    icon: <FaDatabase className="w-12 h-12" />,
    title: "Data Management",
    description: "Advanced data management solutions for efficient storage, processing, and analytics.",
    features: [
      "Data Storage",
      "Backup Solutions",
      "Data Analytics",
      "Database Management"
    ]
  },
  {
    icon: <FaMobile className="w-12 h-12" />,
    title: "Mobile Solutions",
    description: "Custom mobile application development and management for modern businesses.",
    features: [
      "App Development",
      "Mobile Security",
      "Cross-platform Solutions",
      "App Maintenance"
    ]
  },
  {
    icon: <FaCode className="w-12 h-12" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs and objectives.",
    features: [
      "Custom Development",
      "API Integration",
      "Legacy Modernization",
      "Quality Assurance"
    ]
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: "Business Intelligence",
    description: "Data-driven insights and analytics to power your business decisions.",
    features: [
      "Data Visualization",
      "Predictive Analytics",
      "Performance Metrics",
      "Custom Reports"
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground title="Our Professional Services">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto mt-6 text-white/90 font-light"
        >
          Comprehensive IT solutions tailored to transform your business
        </motion.p>
      </AnimatedBackground>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-20 blur-lg group-hover:opacity-30 transition duration-300" />
                <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-2xl shadow-lg">
                  <div className="text-brand-orange mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-brand-orange rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Contact us today to discuss how we can help you achieve your IT goals.
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
              Get Started
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  )
} 