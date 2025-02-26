import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavbarComponent from './components/navbarcomponents'
import HeroSection from './components/herosection'
import FeaturesSection from './components/featuressection'
import HowItWorksSection from './components/howItworkssection'  
import TechStackSection from './components/techstacksection'
import IntegrationsSection from './components/integrationssection'     
import PricingSection from './components/pricingsection'          
import TestimonialsSection from './components/testimonialssection'
import FooterSection from './components/footersection'
import Dashboard from './components/dash' // Import Dashboard Component

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <Routes>
        {/* Main Website Pages */}
        <Route path="/" element={
          <>
            <NavbarComponent scrolled={scrolled} />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <TechStackSection />
            <IntegrationsSection />
            <PricingSection />
            <TestimonialsSection />
            <FooterSection />
          </>
        } />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
