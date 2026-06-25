import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Helmet>
        <meta name="description" content="Inam Ahmad Baig — MCA Graduate | Java & Spring Boot Backend Developer from Seoni, Madhya Pradesh. Explore portfolio showcasing Spring Boot projects, REST APIs, and full-stack development skills." />
        <meta property="og:title" content="Inam Ahmad Baig | Java & Spring Boot Developer Portfolio" />
        <meta name="twitter:title" content="Inam Ahmad Baig | Java & Spring Boot Developer Portfolio" />
        <title>Inam Ahmad Baig | Java & Spring Boot Developer Portfolio</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inamahmadbaig.vercel.app/#home" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://inamahmadbaig.vercel.app/#about" },
              { "@type": "ListItem", "position": 3, "name": "Skills", "item": "https://inamahmadbaig.vercel.app/#skills" },
              { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://inamahmadbaig.vercel.app/#projects" },
              { "@type": "ListItem", "position": 5, "name": "Education", "item": "https://inamahmadbaig.vercel.app/#education" },
              { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://inamahmadbaig.vercel.app/#contact" }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
