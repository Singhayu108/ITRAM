'use client'

import { motion } from 'framer-motion'
import { FaServer, FaLaptopCode, FaShieldAlt, FaCloud, FaMobile, FaDatabase, FaCogs, FaNetworkWired, FaUsersCog, FaRobot } from 'react-icons/fa'

const services = [
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Software Development",
    description: "Custom software solutions, web applications, and enterprise systems tailored to your business needs.",
    features: ["Full-stack Development", "API Integration", "Legacy System Modernization", "Custom CRM Solutions"]
  },
  {
    icon: <FaCloud className="w-8 h-8" />,
    title: "Cloud Services",
    description: "Comprehensive cloud solutions for business scalability and digital transformation.",
    features: ["Cloud Migration", "AWS/Azure/GCP Solutions", "Cloud Architecture", "SaaS Implementation"]
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your digital assets and infrastructure.",
    features: ["Security Audits", "Threat Detection", "Data Encryption", "Security Training"]
  },
  {
    icon: <FaNetworkWired className="w-8 h-8" />,
    title: "Network Solutions",
    description: "Enterprise networking and infrastructure management services.",
    features: ["Network Design", "VPN Setup", "Network Security", "Infrastructure Monitoring"]
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["iOS/Android Apps", "Cross-platform Development", "Mobile UI/UX", "App Maintenance"]
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "Data Management",
    description: "Comprehensive data solutions from storage to analytics and visualization.",
    features: ["Database Design", "Data Analytics", "Big Data Solutions", "Data Warehousing"]
  },
  {
    icon: <FaUsersCog className="w-8 h-8" />,
    title: "IT Consulting",
    description: "Strategic IT consulting to align technology with business objectives.",
    features: ["Digital Strategy", "IT Assessment", "Process Optimization", "Technology Roadmap"]
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: "IT Infrastructure",
    description: "End-to-end infrastructure solutions and management services.",
    features: ["Server Management", "Hardware Solutions", "Backup Solutions", "Disaster Recovery"]
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: "IT Support",
    description: "24/7 technical support and maintenance services for your IT systems.",
    features: ["Help Desk Support", "System Maintenance", "Technical Training", "Remote Support"]
  },
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: "Emerging Technologies",
    description: "Cutting-edge solutions using AI, ML, and IoT technologies.",
    features: ["AI Implementation", "IoT Solutions", "Blockchain", "AR/VR Development"]
  }
]

export default function Services() {
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
            Our IT Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Comprehensive IT solutions to drive your business forward
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="p-8 border-t-2 border-transparent group-hover:border-brand-orange transition-colors duration-300">
                <div className="text-brand-orange mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 transition-transform duration-300 group-hover:scale-125"></span>
                      <span className="transition-colors duration-300 hover:text-brand-orange">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 