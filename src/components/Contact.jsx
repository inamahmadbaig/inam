import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from './Reveal'

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'inamahamdbaig@gmail.com',
    href: 'mailto:inamahamdbaig@gmail.com',
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+91 8516014002',
    href: 'tel:8516014002',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Seoni, Madhya Pradesh, India',
    href: 'https://www.google.com/maps/place/Seoni,+Madhya+Pradesh',
  },
  {
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
    value: '/in/inam-ahmad-baig',
    href: 'https://www.linkedin.com/in/inam-ahmad-baig/',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:inamahamdbaig@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`
  }

  return (
    <section id="contact" className="section-contact py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto"></div>
            <p className="text-gray-400 mt-4">
              Have a question or want to work together? Let&apos;s connect!
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeLeft>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.label}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.label !== 'Phone' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeLeft>

          <FadeRight>
            <form onSubmit={handleSubmit} className="space-y-5">
              {['name', 'email', 'message'].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      placeholder={
                        field === 'message' ? 'Your Message' : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`
                      }
                      rows="5"
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-light text-white rounded-lg px-5 py-3 border border-gray-700 focus:border-primary focus:outline-none transition-all duration-300 placeholder-gray-500 resize-none"
                    ></textarea>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-light text-white rounded-lg px-5 py-3 border border-gray-700 focus:border-primary focus:outline-none transition-all duration-300 placeholder-gray-500"
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full gradient-bg text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </motion.button>
            </form>
          </FadeRight>
        </div>
      </div>
    </section>
  )
}
