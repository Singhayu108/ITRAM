'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "ITRAM Management transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations.",
    image: "/images/testimonial-1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "Working with ITRAM has been a game-changer for our business. Their team's expertise in digital solutions is unmatched.",
    image: "/images/testimonial-2.jpg"
  },
  {
    name: "Emma Davis",
    role: "Startup Founder",
    content: "The level of professionalism and creativity that ITRAM brings to the table is exceptional. They're truly partners in our success.",
    image: "/images/testimonial-3.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                  {/* Placeholder for testimonial image */}
                  <div className="w-full h-full bg-brand-orange/20" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-orange">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 