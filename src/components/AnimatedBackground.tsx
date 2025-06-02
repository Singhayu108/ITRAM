'use client'

import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  children: React.ReactNode
  title: string
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

export default function AnimatedBackground({ children, title }: AnimatedBackgroundProps) {
  const headingText = title.split(" ")

  return (
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
            {title.toUpperCase()} {title.toUpperCase()}
          </motion.div>
        </div>
        <div className="absolute top-1/2 whitespace-nowrap opacity-[0.03]">
          <motion.div
            variants={scrollingTextVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
            className="inline-block text-[250px] font-black tracking-tight text-white"
          >
            {title.toUpperCase()} {title.toUpperCase()}
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
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 