import { motion } from 'framer-motion'
import { FaCloud, FaShieldAlt, FaDatabase, FaMobile, FaCode, FaChartLine } from 'react-icons/fa'

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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Comprehensive IT solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-brand-orange mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-brand-orange rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Contact us today to discuss how we can help you achieve your IT goals.
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