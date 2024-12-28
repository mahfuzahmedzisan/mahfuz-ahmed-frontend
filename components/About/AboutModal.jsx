'use client'
import React, { useState, useEffect } from 'react';
import { FaBootstrap, FaCss3Alt, FaFacebookF, FaGitAlt, FaGithub, FaHtml5, FaInstagram, FaLaravel, FaLinkedinIn, FaPhp, FaReact, FaXmark, FaXTwitter } from 'react-icons/fa6';
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import { RiTailwindCssFill } from "react-icons/ri";
import Mahfuz from '@/assets/images/Mahfuz.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutModal({ closeModal }) {
  const [isClosing, setIsClosing] = useState(false);
  const [socialLinks, setSocialLinks] = useState([]);
  const [skillIcons, setSkillIcons] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    fetch('/social-links.json')
      .then(res => res.json())
      .then(data => setSocialLinks(data))
      .catch(error => console.error('Error fetching social links:', error));
  }, []);

  useEffect(() => {
    fetch('/skills.json')
      .then(res => res.json())
      .then(data => setSkillIcons(data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

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

  const getSkillsIcons = (name) => {
    switch (name) {
      case "HTML": return <FaHtml5 />;
      case "CSS": return <FaCss3Alt />;
      case "JavaScript": return <TbBrandJavascript />;
      case "React": return <FaReact />;
      case "NextJS": return <TbBrandNextjs />;
      case "TailwindCSS": return <RiTailwindCssFill />;
      case "Bootstrap": return <FaBootstrap />;
      case "Git": return <FaGitAlt />;
      case "PHP": return <FaPhp />;
      case "Laravel": return <FaLaravel />;
      default: return null;
    }
  };

  // Reset the closing state when modal opens
  useEffect(() => {
    setIsClosing(false);
  }, []);

  // Close the modal after a delay for animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 400);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[9999999]">
        <div className="max-w-screen-2xl w-full p-6">
          <div className={`bg-bg-dark rounded-xl shadow-shadow-primary shadow-light/5 p-8 text-black ${isClosing ? 'animate-slide-down' : 'animate-slide-up'} h-fit max-h-[90vh] overflow-y-auto`}>
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-primary">About Me</h2>
              <button
                onClick={handleClose}
                className="text-2xl font-semibold bg-gradient-primary shadow-shadow-primary rounded-md text-light w-12 h-12 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:bg-bg-dark hover:shadow-sm hover:shadow-primary hover:text-primary"
                aria-label="Close About Modal"
              >
                <FaXmark />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:mx-10">
              {/* Profile Image */}
              <Image
                src={Mahfuz}
                alt="Mahfuz Ahmed Zisan"
                width={300}
                height={300}
                className="rounded-full w-40 h-40 lg:w-52 lg:h-52 object-cover border-4 border-light shadow-lg transform transition-all duration-300 hover:scale-110 lg:mr-10"
              />

              {/* About Me Text */}
              <div className="flex flex-col items-center lg:items-start text-left max-w-2xl space-y-6 w-full lg:w-3/5">
                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-light capitalize">
                  Mahfuz Ahmed Zisan
                </h3>
                <p className="text-lg text-light tracking-wide">
                  Hi, I’m Mahfuz Ahmed Zisan, a passionate web developer who loves learning new technologies and building creative solutions. I specialize in creating responsive, user-friendly websites and applications. I’m always eager to explore new challenges and improve my skills.
                </p>
                <p className="text-lg text-light tracking-wide">
                  In my free time, I enjoy working on personal projects, experimenting with new frameworks, and keeping up with the latest trends in the tech world. Let's build something amazing together!
                </p>

                {/* Skills Section */}
                <h4 className="text-2xl font-semibold text-primary/60 mt-6">Skills:</h4>
                <div className='flex flex-wrap justify-center lg:justify-start gap-6'>
                  {
                    skillIcons.map((skill, index) => (
                      <div
                        className="w-14 h-14 flex items-center justify-center bg-gradient-primary shadow-shadow-primary rounded-md text-2xl text-light transition-all duration-300"
                        key={index}
                        onMouseEnter={() => setHoveredSkill(skill.name)} // Set hovered skill
                        onMouseLeave={() => setHoveredSkill(null)} // Reset hover state
                        style={{
                          color: hoveredSkill === skill.name ? '' : skill.color,
                        }}
                      >
                        {getSkillsIcons(skill.name)}
                      </div>
                    ))
                  }
                </div>

                {/* Social Media Links */}
                <h4 className="text-2xl font-semibold text-primary/60 mt-6">Connect with me:</h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
                  {
                    socialLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 bg-gradient-primary shadow-shadow-primary rounded-md text-2xl text-light w-14 h-14 flex items-center justify-center hover:-translate-y-1 hover:bg-bg-dark hover:shadow-sm hover:shadow-primary hover:text-primary"
                      >
                        {getIcon(link.title)}
                      </Link>
                    ))
                  }
                </div>

                <div className="!mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                  <a
                    href="mailto:mahfuz.ahmed.zisan@gmail.com"
                    className="bg-gradient-primary shadow-shadow-primary text-light px-6 py-3 rounded-md text-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-bg-dark hover:shadow-sm hover:shadow-primary hover:text-primary"
                  >
                    Hire Me
                  </a>
                  <a
                    href="CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download={true}
                    className="bg-gradient-primary shadow-shadow-primary text-light px-6 py-3 rounded-md text-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-bg-dark hover:shadow-sm hover:shadow-primary hover:text-primary"
                  >
                    Download CV
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
