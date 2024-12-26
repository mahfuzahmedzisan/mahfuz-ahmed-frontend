'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaBars, FaFacebookF, FaGithub, FaLinkedinIn, FaXmark, FaXTwitter } from 'react-icons/fa6'


export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [socialLinks, setSocialLinks] = React.useState([])

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

  // Handle smooth scroll navigation
  const handleScrollToSection = (e, section) => {
    e.preventDefault();

    if (section === "/") {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    else {
      const targetSection = document.querySelector(section);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <>

      <nav className='flex items-center justify-between px-5 xl:px-10 py-3 g-transparent'>

        <Link href="/" className='text-2xl font-bold font-Montserrat hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-light transition-all duration-300 py-3'>Mahfuz Ahmed</Link>

        <div className='items-center space-x-5 hidden lg:flex'>
          {
            navItems.map((item, index) => (
              <Link className='hover:text-primary/80 transition-all duration-300 text-xl font-medium font-Roboto' key={index} href={item.path} onClick={(e) => handleScrollToSection(e, item.path)}>{item.name}</Link>
            ))
          }
        </div>

        {
          isMenuOpen ?
            <div>
              <div className='text-2xl font-bold font-Montserrat'>Mahfuz Ahmed</div>
            </div>
            :
            <button className='lg:hidden text-2xl p-3 shadow-shadow-primary bg-gradient-primary rounded-lg hover:bg-bg-dark hover:text-primary/80 transition-all duration-300' onClick={() => setIsMenuOpen(true)}><FaBars /></button>
        }


        {/* Mobile Menu */}

        <div
          className={`lg:hidden fixed inset-0 bg-black/60 z-10 transition-all transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}></div>

        <div className={`fixed inset-0 bg-bg-dark w-2/3 md:w-3/5 h-full lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out z-[9999] px-5 text-light`}>

          <div className='flex justify-between items-center pb-3 pt-8'>
            <Link href="/" className='text-2xl font-bold font-Montserrat hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-light transition-all duration-300'>Mahfuz Ahmed</Link>

            <button className='text-2xl p-2 shadow-shadow-primary bg-gradient-primary rounded-lg hover:bg-bg-dark hover:text-primary/80 transition-all duration-300' onClick={() => setIsMenuOpen(false)}><FaXmark /></button>
          </div>
          <div className='flex flex-col space-y-4 lg:hidden my-10'>
            {
              navItems.map((item, index) => (
                <Link className='hover:text-primary/80 transition-all duration-300 text-xl font-medium font-Roboto' key={index} href={item.path} onClick={(e) => handleScrollToSection(e, item.path)}>{item.name}</Link>
              ))
            }
          </div>
          <div className='flex justify-center space-x-4 my-20'>
            {
              socialLinks.map((link) => (
                <Link key={link.title} href={link.url} target='_blank' rel='noreferrer' className='text-lg hover:text-primary/80 transition-all duration-300 w-10 h-10 flex items-center justify-center shadow-shadow-primary bg-gradient-primary rounded-lg hover:bg-bg-dark hover:-translate-y-1'>{getIcon(link.title)}</Link>
              ))
            }
          </div>

          <a href="../assets/Mahfuz_Ahmed_Resume.pdf" download="Mahfuz_Ahmed_Resume.pdf" className='block text-center mt-10 text-lg hover:text-primary/80 transition-all duration-300 bg-gradient-primary rounded-lg hover:bg-bg-dark shadow-shadow-primary py-2 hover:-translate-y-1'>Download CV</a>


        </div>


      </nav>

    </>
  )
}
