import { motion } from 'framer-motion'
import { FadeUp, FadeLeft, FadeRight } from './Reveal'

export default function About() {
  return (
    <section id="about" className="section-about py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink/10 rounded-full blur-[80px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto"></div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeLeft>
            <div className="relative flex justify-center">
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl gradient-bg glow p-1"
              >
                <motion.div
                  initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                  whileInView={{ clipPath: 'circle(100% at 50% 50%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-full h-full rounded-2xl overflow-hidden"
                >
                  <img
                    src="/inam.jpeg"
                    alt="Inam Ahmad Baig"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-secondary/30"
              >
                <div className="text-center">
                  <span className="block text-2xl">MCA</span>
                  <span>Master's</span>
                </div>
              </motion.div>
            </div>
          </FadeLeft>

          <FadeRight>
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-white mb-4"
              >
                Backend Developer from{' '}
                <span className="gradient-text">Seoni, MP</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 leading-relaxed mb-6"
              >
                I am an MCA graduate with a strong passion for backend development.
                My expertise lies in building scalable and efficient backend systems
                using Java, Spring Boot, and REST APIs. I enjoy solving complex
                problems and creating clean, maintainable code.
              </motion.p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Java', sub: 'Primary Language', color: 'text-primary' },
                  { label: 'Spring Boot', sub: 'Framework', color: 'text-secondary' },
                  { label: 'REST APIs', sub: 'Web Services', color: 'text-primary' },
                  { label: 'MySQL', sub: 'Database', color: 'text-secondary' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.05, borderColor: '#6366f1', y: -3 }}
                    className="bg-dark-card rounded-lg p-4 border border-gray-700/30 transition-all duration-300 cursor-default"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className={`${item.color} text-xl font-bold`}
                    >
                      {item.label}
                    </motion.span>
                    <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  )
}
