'use client'
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLaravel, FaLinkedinIn, FaReact, FaXTwitter } from 'react-icons/fa6';
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { TypeAnimation } from 'react-type-animation';
import AboutModal from './AboutModal';
import Mahfuz from '@/assets/images/Mahfuz.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutMain() {
  const [isAboutDetailsOpen, setIsAboutDetailsOpen] = useState(false);
  const [socialItems, setSocialItems] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/social-links.json')
      .then(res => res.json())
      .then(data => {
        setSocialItems(data);
      })
      .catch(error => console.error('Error fetching social items:', error));
  }, []);

  useEffect(() => {
    fetch('/skills.json')
      .then(res => res.json())
      .then(data => {
        setSkills(data);
      })
      .catch(error => console.error('Error fetching social items:', error));
  }, []);

  const getIcons = (name) => {
    switch (name) {
      case "GitHub":
        return <FaGithub />;
      case "Facebook":
        return <FaFacebookF />;
      case "LinkedIn":
        return <FaLinkedinIn />;
      case "X":
        return <FaXTwitter />;
      case "Instagram":
        return <FaInstagram />;
      default:
        return null;
    }
  }

  const getIcons2 = (name) => {
    switch (name) {
      case "React":
        return <FaReact />;
      case "NextJS":
        return <TbBrandNextjs />;
      case "JavaScript":
        return <TbBrandJavascript />;
      case "Laravel":
        return <FaLaravel />;
      default:
        return null;
    }
  }



  const openAboutDetails = () => setIsAboutDetailsOpen(true);
  const closeAboutDetails = () => setIsAboutDetailsOpen(false);

  return (
    <>
      {isAboutDetailsOpen && <AboutModal closeModal={closeAboutDetails} />}

      <div className='relative flex flex-col lg:flex-row items-center justify-center min-h-screen h-full'>
        <div className="flex flex-col items-center lg:items-start text-left max-w-2xl space-y-6 w-full lg:w-3/5">
          <div>
            <p className='text-base text-light capitalize mb-3 lg:mb-7'>Welcome to my world</p>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-light font-semibold mb-5 lg:mb-10'>Hi! I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary  to-light font-bold font-Montserrat'>Mahfuz Ahmed</span></h2>

            <div className='text-xl md:text-2xl lg:text-3xl text-light font-semibold'>
              a
              <TypeAnimation
                sequence={[' Web Developer', 2000, ' Coder', 2000, ' Programmer', 2000, ' Web Designer', 2000]}
                cursor={true}
                repeat={Infinity}
                className='text-primary/70'
              />
            </div>
            <p className='text-lg lg:text-xl lg:tracking-wider lg:leading-9 text-light font-Poppins mt-10'>
              Hi, I’m <strong>Mahfuz Ahmed Zisan</strong>, a passionate web developer who loves learning new technologies and building creative solutions. I specialize in creating responsive, user-friendly websites and applications.
            </p>
            <button onClick={openAboutDetails} className="px-5 py-2 mt-5 bg-gradient-primary text-white rounded-lg shadow-shadow-primary hover:bg-bg-dark hover:text-primary hover:shadow-sm hover:shadow-primary hover:-translate-y-1 transform transition-all duration-500">About Me</button>
          </div>
          <div className="lg:hidden flex transform transition-all duration-500 hover:scale-105 shadow-shadow-primary hover:shadow-sm hover:shadow-primary rotate-12 hover:rotate-0 rounded-xl relative !my-10">
            <Image
              src={Mahfuz} alt="Mahfuz Ahmed Zisan" width={200} height={200} className="rounded-full w-40 h-40 lg:w-52 lg:h-52 object-cover border-4 border-light shadow-shadow-primary" />
            <button
              onClick={openAboutDetails}
              className="absolute inset-0 bg-transparent opacity-0"
              aria-label="Open About Details"> </button>
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-10 w-full lg:!mt-10'>
            <div>
              <p className='uppercase text-light text-sm mb-3 lg:mb-5'>Connect with me</p>
              <div className='flex space-x-3'>
                {socialItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl w-14 h-14 flex items-center justify-center rounded-md bg-gradient-primary shadow-shadow-primary transition-all duration-300 hover:bg-bg-dark hover:text-primary hover:shadow-sm hover:shadow-primary hover:-translate-y-1`}
                  >
                    {getIcons(item.title)}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className='uppercase text-light text-sm mb-3 lg:mb-5'>Best Skill on</p>
              <div className='flex space-x-3'>
                {skills.filter(item => ['JavaScript', 'React', 'NextJS', 'Laravel'].includes(item.name)).map((item, index) => (
                  <div key={index} style={{ color: item.color }} className={`w-14 h-14 flex items-center text-3xl justify-center rounded-md bg-gradient-primary shadow-shadow-primary`}>
                    {getIcons2(item.name)}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center mb-6 lg:mb-0">
          <div className="hidden lg:flex transform transition-all duration-500 hover:scale-105 shadow-shadow-primary hover:shadow-sm hover:shadow-primary rotate-12 hover:rotate-0 rounded-xl relative">

            <Image
              src={Mahfuz} alt="Mahfuz Ahmed Zisan" width={200} height={200} className="rounded-full w-40 h-40 lg:w-52 lg:h-52 object-cover border-4 border-light shadow-shadow-primary" />
            <button
              onClick={openAboutDetails}
              className="absolute inset-0 bg-transparent opacity-0"
              aria-label="Open About Details"> </button>
          </div>
        </div>
      </div>


    </>
  );
}
