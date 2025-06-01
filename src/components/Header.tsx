'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/app/providers'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-brand-purple-dark via-brand-purple to-brand-purple-light shadow-lg'
          : 'bg-gradient-to-r from-brand-purple-dark via-brand-purple to-brand-purple-light'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <div className="relative w-60 h-24 flex items-center justify-start">
                <Image
                  src="/images/RAM.png"
                  alt="ITRAM Management"
                  fill
                  className="object-contain object-left"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  priority
                  sizes="(max-width: 768px) 180px, 240px"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-white hover:text-brand-gold-light hover:bg-brand-purple-light/50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full text-brand-gold hover:text-brand-gold-light hover:bg-brand-purple-light/50 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-brand-gold hover:text-brand-gold-light hover:bg-brand-purple-light/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-brand-purple-dark to-brand-purple rounded-lg shadow-lg">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-brand-gold-light hover:bg-brand-purple-light/50 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    toggleTheme()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-brand-gold hover:text-brand-gold-light hover:bg-brand-purple-light/50 transition-all duration-200"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="h-5 w-5 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 