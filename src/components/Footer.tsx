import Link from 'next/link'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const contactInfo = {
    email: "singhayu108@gmail.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Street, Tech City, TC 12345"
  }

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "#" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "#" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ITRAM Management</h3>
            <p className="text-gray-400 mb-4">
              Innovative IT solutions for modern businesses
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Cloud Solutions</li>
              <li className="text-gray-400">Cybersecurity</li>
              <li className="text-gray-400">Software Development</li>
              <li className="text-gray-400">IT Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-gray-400 hover:text-brand-orange transition-colors duration-300"
                >
                  <FaEnvelope className="w-5 h-5 mr-2" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center text-gray-400 hover:text-brand-orange transition-colors duration-300"
                >
                  <FaPhone className="w-5 h-5 mr-2" />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 mt-1" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} ITRAM Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 