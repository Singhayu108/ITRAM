'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const featuredTeamMembers = [
  {
    name: "John Smith",
    role: "Chief Technology Officer",
    image: "/images/team/member1.jpg",
    expertise: ["Cloud Architecture", "Digital Strategy"],
    social: {
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Lead Software Developer",
    image: "/images/team/member2.jpg",
    expertise: ["Full-stack Development", "Cloud Services"],
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahj"
    }
  },
  {
    name: "Michael Chen",
    role: "Cybersecurity Expert",
    image: "/images/team/member3.jpg",
    expertise: ["Security Audits", "Penetration Testing"],
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/mchen"
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

export default function TeamSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-[length:400%_400%]"
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
                Meet Our Expert Team
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              >
                Driven by innovation and excellence in IT solutions
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTeamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-20 blur-lg group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 border-t-2 border-transparent group-hover:border-brand-orange transition-colors duration-300">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-orange transition-colors duration-300"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="text-brand-orange font-medium mb-4"
                  >
                    {member.role}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full transition-colors duration-300 hover:bg-brand-orange hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className="flex justify-between items-center"
                  >
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300 transform hover:scale-110"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300 transform hover:scale-110"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    </div>
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
            href="/team"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Meet the Full Team
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 