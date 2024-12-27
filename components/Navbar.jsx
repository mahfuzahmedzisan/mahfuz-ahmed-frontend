'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars, FaFacebookF, FaGithub, FaLinkedinIn, FaXmark, FaXTwitter } from 'react-icons/fa6'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [socialLinks, setSocialLinks] = useState([])
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '#features' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ]

  useEffect(() => {
    fetch('social-links.json')
      .then(res => res.json())
      .then(data => setSocialLinks(data))
      .catch(err => console.log(err))
  }, [])

  const getIcon = (name) => {
    switch (name) {
      case 'Facebook':
        return <FaFacebookF />
      case 'X':
        return <FaXTwitter />
      case 'LinkedIn':
        return <FaLinkedinIn />
      case 'GitHub':
        return <FaGithub />
      default:
        return null
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentSection = "home"

      if (window.scrollY === 0) {
        currentSection = "home"
      } else {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id
          }
        })
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToSection = (e, section) => {
    e.preventDefault()

    if (section === "/") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      const targetSection = document.querySelector(section)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className='flex items-center justify-between px-5 xl:px-10 py-3 g-transparent'>
        <Link href="/" onClick={(e) => handleScrollToSection(e, "/")} className={`${isMenuOpen ? "text-sm" : "text-2xl"} font-bold font-Montserrat hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-light transition-all duration-300 py-3`}>Mahfuz Ahmed</Link>

        <div className='items-center space-x-5 hidden lg:flex'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={(e) => handleScrollToSection(e, item.path)}
              className={`hover:text-primary/80 transition-all duration-300 text-xl font-medium font-Roboto ${activeSection === item.path.replace('#', '') || (activeSection === "home" && item.path === "/") ? 'text-primary' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <Link href={'https://wa.me/+8801516541162'} target='_blank' className='hover:text-primary/80 transition-all duration-300 text-xl font-medium font-Roboto bg-gradient-primary shadow-shadow-primary px-8 py-2 rounded-md hover:bg-bg-dark hover:-translate-y-1 hover:shadow-sm hover:shadow-primary'>Hire Me</Link>
        </div>

        {isMenuOpen ? (
          <div>
            <div className='text-2xl pt-5 text-nowrap font-bold font-Montserrat'>Mahfuz Ahmed</div>
          </div>
        ) : (
          <button className='lg:hidden text-2xl p-3 shadow-shadow-primary bg-gradient-primary rounded-lg hover:bg-bg-dark hover:text-primary transition-all duration-300 hover:shadow-sm hover:shadow-primary hover:-translate-y-1' onClick={() => setIsMenuOpen(true)}><FaBars /></button>
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/60 z-10 transition-all transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}></div>

        <div className={`fixed inset-0 bg-bg-dark w-2/3 md:w-3/5 h-full lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out z-[9999] px-5 text-light shadow-shadow-primary`}>
          <div className='flex justify-between items-center pb-3 pt-8'>
            <Link href="/" onClick={(e) => handleScrollToSection(e, "/")} className='text-lg md:text-2xl font-bold font-Montserrat hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-light transition-all duration-300'>Mahfuz Ahmed</Link>
            <button className='text-2xl p-2 shadow-shadow-primary bg-gradient-primary rounded-lg hover:bg-bg-dark hover:text-primary transition-all duration-300 hover:shadow-sm hover:shadow-primary hover:-translate-y-1' onClick={() => setIsMenuOpen(false)}><FaXmark /></button>
          </div>
          <div className='flex flex-col space-y-4 lg:hidden my-5'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={(e) => handleScrollToSection(e, item.path)}
                className={`hover:text-primary transition-all duration-300 text-xl font-medium font-Roboto ${activeSection === item.path.replace('#', '') || (activeSection === "home" && item.path === "/") ? 'text-primary' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='my-10'>
            <p className='text-lg text-light text-center'>Contact Me</p>
            <div className='flex justify-center space-x-4 my-5'>
              {
                socialLinks.map((link) => (
                  <Link key={link.title} href={link.url} target='_blank' rel='noreferrer' className='text-lg hover:text-primary/80 transition-all duration-300 w-10 h-10 flex items-center justify-center shadow-shadow-primary bg-gradient-primary rounded-lg hover:bg-bg-dark hover:-translate-y-1 hover:shadow-sm hover:shadow-primary'>{getIcon(link.title)}</Link>
                ))
              }
            </div>
            <Link href="../assets/Mahfuz_Ahmed_Resume.pdf" download="Mahfuz_Ahmed_Resume.pdf" className='block text-center mt-10 text-lg hover:text-primary/80 transition-all duration-300 bg-gradient-primary rounded-lg hover:bg-bg-dark shadow-shadow-primary py-2 hover:-translate-y-1 hover:shadow-sm hover:shadow-primary'>Download CV</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
