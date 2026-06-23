import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-gray-700/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <button onClick={() => { const el = document.getElementById('home'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} className="text-xl font-bold text-white cursor-pointer">
              <span className="gradient-text">&lt;IAB /&gt;</span>
            </button>
            <p className="text-gray-500 text-sm mt-1">
              Backend Developer | Java & Spring Boot
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[
              { href: 'https://github.com/inamahmadbaig', icon: 'fab fa-github' },
              { href: 'https://www.linkedin.com/in/inam-ahmad-baig/', icon: 'fab fa-linkedin' },
              { href: 'mailto:inamahamdbaig@gmail.com', icon: 'fas fa-envelope' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 text-lg hover:scale-125 hover:-translate-y-1"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-gray-700/50 mt-6 pt-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Inam Ahmad Baig. Built with{' '}
            <i className="fas fa-heart text-red-500"></i> using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
