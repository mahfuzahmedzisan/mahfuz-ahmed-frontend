'use client'

import Link from 'next/link';
import React from 'react'

export default function Navbar() {

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  // Handle smooth scroll navigation
  const handleScrollToSection = (e, section) => {
    e.preventDefault(); // Prevent default anchor behavior

    if (section === "/") {
      // Scroll to top for Home link
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // For hash links or specific sections
      const targetSection = document.querySelector(section);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Ensure the section aligns at the top of the viewport
        });
      }
    }
  }

  return (
    <>

      <nav>
        <div>Mahfuz Ahmed</div>
        <div>
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} onClick={(e) => handleScrollToSection(e, item.link)}>{item.name}</Link>
          ))}
        </div>
        <button className=''>Hire Me</button>
      </nav>

    </>
  )
}
