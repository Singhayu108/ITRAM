'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronDown, FaComments, FaHeadset } from 'react-icons/fa'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  })
}

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

const scrollingTextVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 30,
        ease: "linear",
      },
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const headingText = "Let's Start a Conversation".split(" ")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mjkwqkza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          preferredContact: 'email'
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Support",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Available round the clock for urgent assistance"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      details: "singhayu108@gmail.com",
      link: "mailto:singhayu108@gmail.com",
      description: "Get in touch via email for detailed inquiries"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Business Street, Tech City, TC 12345",
      link: "https://maps.google.com",
      description: "Come meet us at our office location"
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const faqs = [
    {
      question: 'What services does ITRAM Management offer?',
      answer: 'We offer a comprehensive range of IT solutions including software development, cloud services, cybersecurity, and IT consulting.'
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We aim to respond to all support requests within 2-4 business hours. For critical issues, we provide 24/7 emergency support.'
    },
    {
      question: 'Do you offer custom software development?',
      answer: 'Yes, we specialize in custom software development tailored to your specific business needs and requirements.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, education, retail, and manufacturing.'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          variants={backgroundVariants}
          animate="animate"
          className="absolute inset-0 bg-gradient-to-br from-brand-orange-dark via-brand-orange to-brand-orange-light bg-[length:400%_400%]"
        >
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </motion.div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="absolute rounded-full bg-white/5 backdrop-blur-3xl"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Scrolling Background Text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-1/2 whitespace-nowrap opacity-[0.03]">
            <motion.div
              variants={scrollingTextVariants}
              animate="animate"
              className="inline-block text-[250px] font-black tracking-tight text-white"
            >
              CONTACT ITRAM CONTACT ITRAM
            </motion.div>
          </div>
          <div className="absolute top-1/2 whitespace-nowrap opacity-[0.03]">
            <motion.div
              variants={scrollingTextVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="inline-block text-[250px] font-black tracking-tight text-white"
            >
              CONTACT ITRAM CONTACT ITRAM
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-orange-light via-white to-brand-orange-light opacity-20 blur-lg" />
            <div className="relative">
              <div className="flex flex-wrap justify-center">
                {headingText.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-6xl font-bold mx-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={headingText.length + 1}
                className="text-xl md:text-2xl text-white/90 mt-6 mb-8 max-w-2xl mx-auto font-light"
              >
                We're here to help and answer any questions you might have.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-20 blur group-hover:opacity-30 transition duration-300" />
                <div className="relative bg-white dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-xl shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-light text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {info.icon}
                </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {info.title}
                </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {info.description}
                  </p>
                  <p className="text-brand-orange font-medium">
                  {info.details}
                </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-10 blur-lg dark:opacity-20" />
              <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-light">
                    <FaComments className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h3>
              </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200"
                  />
                    </motion.div>
                </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="preferredContact" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-200 resize-none"
                />
                  </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 dark:bg-green-900/30 backdrop-blur-xl border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg flex items-center"
                    >
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                  Thank you for your message! We'll get back to you soon.
                    </motion.div>
              )}
              {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 dark:bg-red-900/30 backdrop-blur-xl border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg flex items-center"
                    >
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                  There was an error sending your message. Please try again later.
                    </motion.div>
              )}

                  <motion.button
                type="submit"
                disabled={isSubmitting}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className={`relative w-full group ${
                      isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
                    <div className={`relative w-full px-8 py-4 bg-white dark:bg-gray-800 rounded-lg font-medium transform transition-all duration-200 ${
                      !isSubmitting && 'group-hover:-translate-y-1'
                    }`}>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-light opacity-0 group-hover:opacity-100 transition duration-200" />
                      <span className="relative text-brand-orange group-hover:text-white transition-colors duration-200">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </div>
                  </motion.button>
                </form>
          </div>
            </motion.div>

            {/* Right Column - Office Hours & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-10 blur-lg dark:opacity-20" />
                <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-light">
                      <FaClock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Office Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{schedule.day}</span>
                        <span className="text-brand-orange font-semibold">{schedule.hours}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-10 blur-lg dark:opacity-20" />
                <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={false}
                        animate={{ 
                          backgroundColor: expandedFaq === index 
                            ? 'rgba(255, 125, 0, 0.05)' 
                            : 'transparent',
                          scale: expandedFaq === index ? 1.02 : 1
                        }}
                        transition={{ duration: 0.2 }}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                      >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                        >
                          <span className="text-gray-900 dark:text-white font-medium pr-8">{faq.question}</span>
                          <motion.div
                            animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="w-4 h-4 text-brand-orange" />
                          </motion.div>
                    </button>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: expandedFaq === index ? 'auto' : 0,
                            opacity: expandedFaq === index ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-dark to-brand-orange-light opacity-10 blur-lg dark:opacity-20" />
            <div className="relative bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0167601300953!2d77.5907873!3d12.971598799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167b0bf30b6f%3A0x9b55fd8293fc2bdf!2sBrigade%20Rd%2C%20Bengaluru%2C%20Karnataka%20560001%2C%20India!5e0!3m2!1sen!2sin!4v1709754563014!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 