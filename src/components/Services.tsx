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

export default function Services() {
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
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-20 blur-lg group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg">
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
                      <motion.li 
                      key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 transition-transform duration-300 group-hover:scale-125"></span>
                      <span className="transition-colors duration-300 hover:text-brand-orange">
                        {feature}
                      </span>
                      </motion.li>
                  ))}
                </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 