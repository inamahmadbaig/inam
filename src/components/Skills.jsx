import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './Reveal'

const skillData = [
  { name: 'Java', icon: 'fab fa-java', color: 'text-red-400', level: 90 },
  { name: 'Spring Boot', icon: 'fas fa-leaf', color: 'text-green-400', level: 85 },
  { name: 'Spring Data JPA', icon: 'fas fa-database', color: 'text-blue-400', level: 80 },
  { name: 'MySQL', icon: 'fas fa-server', color: 'text-orange-400', level: 85 },
  { name: 'REST API', icon: 'fas fa-plug', color: 'text-purple-400', level: 88 },
  { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', level: 80 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500', level: 75 },
  { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400', level: 70 },
  { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600', level: 80 },
  { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-300', level: 85 },
  { name: 'Data Structures', icon: 'fas fa-sitemap', color: 'text-pink-400', level: 75 },
]

function useCountUp(target, delay = 0) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= target) {
            clearInterval(interval)
            return target
          }
          return prev + 1
        })
      }, 20)
      return () => clearInterval(interval)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [started, target, delay])

  return { count, ref }
}

const SkillCard = ({ skill, index }) => {
  const { count, ref } = useCountUp(skill.level, 0.3 + index * 0.05)

  return (
    <StaggerItem>
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.05, y: -6 }}
        className="bg-dark rounded-xl p-6 border border-gray-700/50 group cursor-default relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`skill-icon text-3xl ${skill.color}`}
            >
              <i className={skill.icon}></i>
            </motion.div>
            <h3 className="text-white font-semibold">{skill.name}</h3>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
              className="gradient-bg rounded-full h-2 relative"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/30 rounded-full"
              />
            </motion.div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xs mt-2 block text-right font-mono"
          >
            {count}%
          </motion.span>
        </div>
      </motion.div>
    </StaggerItem>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-skills py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto"></div>
          </div>
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
