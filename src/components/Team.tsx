'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

const teamMembers = [
  {
    name: "John Smith",
    role: "Chief Technology Officer",
    image: "/images/team/member1.jpg",
    bio: "15+ years of experience in enterprise software architecture and digital transformation.",
    expertise: ["Cloud Architecture", "Digital Strategy", "Enterprise Solutions"],
    social: {
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
      email: "john@itram.com"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Lead Software Developer",
    image: "/images/team/member2.jpg",
    bio: "Full-stack developer specialized in modern web technologies and cloud solutions.",
    expertise: ["Full-stack Development", "Cloud Services", "API Design"],
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahj",
      email: "sarah@itram.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Cybersecurity Expert",
    image: "/images/team/member3.jpg",
    bio: "Security specialist with expertise in threat detection and system hardening.",
    expertise: ["Security Audits", "Penetration Testing", "Security Training"],
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/mchen",
      email: "michael@itram.com"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    image: "/images/team/member4.jpg",
    bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
    expertise: ["UI/UX Design", "User Research", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: "https://github.com/emilyr",
      email: "emily@itram.com"
    }
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    image: "/images/team/member5.jpg",
    bio: "Infrastructure specialist with expertise in automation and cloud deployment.",
    expertise: ["CI/CD", "Container Orchestration", "Infrastructure as Code"],
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidk",
      email: "david@itram.com"
    }
  },
  {
    name: "Lisa Wang",
    role: "Data Scientist",
    image: "/images/team/member6.jpg",
    bio: "Data expert specialized in machine learning and predictive analytics.",
    expertise: ["Machine Learning", "Data Analytics", "AI Implementation"],
    social: {
      linkedin: "https://linkedin.com/in/lisawang",
      github: "https://github.com/lisaw",
      email: "lisa@itram.com"
    }
  }
]

export default function Team() {
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
            Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Meet our expert team of IT professionals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t-2 border-transparent group-hover:border-brand-orange transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-brand-orange font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full transition-colors duration-300 hover:bg-brand-orange hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                  >
                    <FaEnvelope className="w-5 h-5" />
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