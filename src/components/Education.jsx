import { motion } from 'framer-motion'
import { FadeUp } from './Reveal'

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University',
    year: '2024 - 2026',
    description:
      'Specialized in advanced computing, software development, and database management systems.',
    icon: 'fas fa-graduation-cap',
  },
  {
    degree: 'Full Stack Java Course',
    institution: 'Naresh IT',
    year: '2026',
    description:
      'Comprehensive full stack Java development training covering Core Java, Spring Boot, Hibernate, JPA, REST APIs, React, MySQL, and project deployment.',
    icon: 'fas fa-laptop-code',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-education py-20 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto"></div>
          </div>
        </FadeUp>

        <div className="max-w-2xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-8"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute left-[7px] top-3 w-[2px] bg-gradient-to-b from-primary to-secondary rounded-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400, delay: 0.2 }}
                className="absolute -left-3 top-0 w-[18px] h-[18px] rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <i className={`${edu.icon} text-white text-[8px]`}></i>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5, borderColor: '#8b5cf6' }}
                className="bg-dark-card rounded-lg p-5 border border-gray-700/30 transition-all duration-300"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-primary text-sm font-medium"
                >
                  {edu.year}
                </motion.span>
                <motion.h4
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-white font-semibold mt-1"
                >
                  {edu.degree}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-500 text-sm mt-1"
                >
                  {edu.institution}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-400 text-sm mt-2"
                >
                  {edu.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
