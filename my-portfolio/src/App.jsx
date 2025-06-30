"use client"

import { useState } from "react"
import Banner from "./components/Banner"
import AboutMeShort from "./components/AboutMeShort"
import ModernTechStack from "./components/ModernTechStack"

import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import { Menu, X } from "lucide-react"
import ProjectsSection from "./components/ProjectsSection"
import { ToastContainer } from "react-toastify"


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="container mx-auto px-4 py-1 md:py-4">
          <div className="flex justify-between items-center">
            <div><img className='h-16 w-24 ' src="https://i.ibb.co/CpZX511c/llogo.png" alt="" /></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded transition-all focus-ring"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors focus-ring rounded px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <Banner />
      <AboutMeShort />
      <ModernTechStack />
      <ProjectsSection></ProjectsSection>
      <ContactSection />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
