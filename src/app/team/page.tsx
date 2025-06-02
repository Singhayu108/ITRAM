'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
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

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/images/team/member1.jpg",
    bio: "20+ years of experience in IT management and enterprise solutions.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "/images/team/member2.jpg",
    bio: "Expert in cloud architecture and cybersecurity solutions.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "/images/team/member3.jpg",
    bio: "Full-stack developer with expertise in modern web technologies.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Emily Brown",
    role: "Project Manager",
    image: "/images/team/member4.jpg",
    bio: "Certified PMP with experience in agile methodologies.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "David Wilson",
    role: "Security Specialist",
    image: "/images/team/member5.jpg",
    bio: "CISSP certified with focus on enterprise security solutions.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Lisa Anderson",
    role: "UX Designer",
    image: "/images/team/member6.jpg",
    bio: "Creating intuitive and beautiful user experiences for enterprise applications.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  }
]

export default function TeamPage() {
  const headingText = "Meet Our Team".split(" ")

  return (
    <main className="min-h-screen">
      <AnimatedBackground title="Meet Our Team">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-white/90 mt-6 mb-8 max-w-2xl mx-auto font-light"
            >
              Dedicated professionals committed to delivering excellence in IT solutions
            </motion.p>
      </AnimatedBackground>

      {/* Team Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-20 blur-lg group-hover:opacity-30 transition duration-300" />
                <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                  <div className="p-8">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                    {member.name}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.4 }}
                      className="text-brand-orange font-medium mb-4"
                    >
                    {member.role}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.5 }}
                      className="text-gray-600 dark:text-gray-300 mb-6"
                    >
                    {member.bio}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.6 }}
                      className="flex space-x-4"
                    >
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-orange transition-colors duration-300 transform hover:scale-110"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-orange transition-colors duration-300 transform hover:scale-110"
                    >
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-orange transition-colors duration-300 transform hover:scale-110"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
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
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              We're always looking for talented individuals to join our growing team.
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
              View Open Positions
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  )
} 