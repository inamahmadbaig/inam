import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './Reveal'

const projects = [
  {
    title: 'Hospital Management System',
    description:
      'A full-stack hospital management system with patient records, appointment scheduling, doctor management, and billing using Spring Boot and React.',
    tech: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'React', 'REST API'],
    github: 'https://github.com/inamahmadbaig',
    icon: 'fas fa-hospital',
    color: 'from-primary to-primary-dark',
  },
  {
    title: 'Sunshine ITI & College Seoni',
    description:
      'An institutional website built for Sunshine ITI & College, Seoni — showcasing courses, faculty, admissions, and campus information with a clean, responsive design.',
    tech: ['React', 'Spring Boot', 'JPA', 'REST API', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/inamahmadbaig/sunshine-iti',
    live: 'https://sunshine-iti.vercel.app',
    icon: 'fas fa-graduation-cap',
    color: 'from-secondary to-teal-500',
  },
  {
    title: 'Employee Management System',
    description:
      'Full-stack web application for managing employee records with CRUD operations, search, and filtering capabilities using Spring Boot and React.',
    tech: ['Spring Boot', 'React', 'JPA', 'MySQL', 'HTML/CSS'],
    github: 'https://github.com/inamahmadbaig',
    icon: 'fas fa-users-cog',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive personal portfolio website built with React and Tailwind CSS showcasing projects, skills, and professional experience.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/inamahmadbaig',
    icon: 'fas fa-user-tie',
    color: 'from-accent to-orange-500',
  },
]

function TiltCard({ children }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out' }}
    >
      {children}
    </div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <StaggerItem>
      <TiltCard>
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-dark-card rounded-xl overflow-hidden border border-gray-700/30 group relative"
        >
          <motion.div
            className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${project.color}`}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-lg bg-dark flex items-center justify-center text-primary text-xl"
              >
                <i className={project.icon}></i>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(99,102,241,0.15)', borderColor: '#6366f1' }}
                  className="text-xs bg-dark text-gray-300 px-3 py-1 rounded-full border border-gray-600/50 transition-all duration-200"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ x: 4 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium"
              >
                <i className="fab fa-github"></i>
                View on GitHub
                <i className="fas fa-arrow-right text-xs"></i>
              </motion.a>
              {project.live && (
                <motion.a
                  whileHover={{ x: 4 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Visit Site
                  <i className="fas fa-arrow-right text-xs"></i>
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </TiltCard>
    </StaggerItem>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-projects py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-pink/10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Check out my projects on{' '}
              <a
                href="https://github.com/inamahmadbaig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                GitHub <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
