import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = ['Backend Developer', 'Java Developer', 'Spring Boot Expert', 'REST API Specialist', 'Full Stack Java Developer', 'AI-Powered Solutions', 'Open for Remote Work Worldwide']

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words])

  return text
}

export default function Hero() {
  const typedText = useTypewriter(roles)
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.location.hash = id
    }
  }

  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-4 h-4 border-2 border-primary/60 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-[20%] w-6 h-6 border-2 border-secondary/50 rounded-lg rotate-45 animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-[25%] w-3 h-3 bg-accent/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] right-[15%] w-5 h-5 border border-accent/40 rounded-full animate-float-delayed" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <motion.span
            animate={{ boxShadow: ['0 0 0 0 rgba(124,58,237,0)', '0 0 20px 4px rgba(124,58,237,0.2)', '0 0 0 0 rgba(124,58,237,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-primary/15 text-secondary px-5 py-1.5 rounded-full text-sm font-medium border border-primary/40 inline-block"
          >
            <i className="fas fa-code mr-2"></i>
            {typedText}
            <span className="text-primary animate-pulse">|</span>
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">Inam Ahmad Baig</span>
          <span className="sr-only">— Java & Spring Boot Backend Developer from Seoni, Madhya Pradesh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          MCA Graduate | Java &amp; Spring Boot Backend Developer from Seoni, MP, India | Open for remote opportunities worldwide | Building robust REST APIs and backend systems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="gradient-bg text-white px-8 py-3 rounded-full font-semibold relative overflow-hidden group cursor-pointer"
          >
            <motion.span
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
            />
            <i className="fas fa-paper-plane mr-2 relative z-10"></i>
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('projects')}
            className="border border-gray-500 text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-primary hover:text-white hover:bg-primary/5 transition-all duration-300 cursor-pointer"
          >
            <i className="fas fa-eye mr-2"></i>
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
        >
          <motion.a
            href="https://www.linkedin.com/in/inam-ahmad-baig/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-[#0A66C2] text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-[#004182] transition-all duration-300"
          >
            <i className="fab fa-linkedin"></i>
            Connect on LinkedIn
          </motion.a>
          {[
            { href: 'https://github.com/inamahmadbaig', icon: 'fab fa-github' },
            { href: 'mailto:inamahamdbaig@gmail.com', icon: 'fas fa-envelope' },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -3 }}
              className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button onClick={() => scrollTo('about')} className="text-gray-500 hover:text-primary transition-colors flex flex-col items-center gap-1 group cursor-pointer">
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-gray-600 group-hover:text-primary transition-colors"
          >
            Scroll
          </motion.span>
          <i className="fas fa-chevron-down text-xl animate-bounce"></i>
        </button>
      </motion.div>
    </section>
  )
}
