'use client'
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaXmark, FaXTwitter } from 'react-icons/fa6';
import Mahfuz from '@/assets/images/Mahfuz.jpg';


export default function AboutModal({ closeModal }) {
   const [isClosing, setIsClosing] = useState(false);
   const [socialLinks, setSocialLinks] = useState([]);

   useEffect(() => {
      fetch('/social-links.json')
         .then(res => res.json())
         .then(data => {
            setSocialLinks(data);
         })
         .catch(error => console.error('Error fetching social links:', error));
   }, []);

   const getIcons = (name) => {
      switch (name) {
         case "Github":
            return <FaGithub />;
         case "Facebook":
            return <FaFacebookF />;
         case "Linkedin":
            return <FaLinkedinIn />;
         case "X":
            return <FaXTwitter />;
         case "Instagram":
            return <FaInstagram />;
         default:
            return null;
      }
   };

   // Reset the closing state when modal opens
   useEffect(() => {
      setIsClosing(false);
   }, []);

   /**
    * Closes the about details modal after a 400ms delay
    * to allow the closing animation to run.
    */
   const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => {
         closeModal();
      }, 400);
   };

   return (
      <>
         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="max-w-fit w-full p-6">
               <div className={`bg-white rounded-xl shadow-xl p-8 text-black ${isClosing ? 'animate-slide-down' : 'animate-slide-up'} h-fit max-h-[90vh] overflow-y-auto`}>
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-6">
                     <h2 className="text-3xl font-semibold text-purple-900">About Me</h2>
                     <button
                        onClick={handleClose}
                        className="text-3xl font-semibold text-emerald-600 hover:text-emerald-800 transition-all duration-200"
                        aria-label="Close About Modal"
                     >
                        <FaXmark />
                     </button>
                  </div>

                  {/* Modal Content */}
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                     {/* Profile Image */}
                     <img
                        src={Mahfuz}
                        alt="Mahfuz Ahmed Zisan"
                        className="rounded-full w-40 h-40 lg:w-52 lg:h-52 object-cover border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-110 lg:mr-10"
                     />

                     {/* About Me Text */}
                     <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl space-y-6 w-full lg:w-3/5">
                        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-500 capitalize">
                           Mahfuz Ahmed Zisan
                        </h3>
                        <p className="text-lg text-gray-700">
                           Hi, I’m Mahfuz Ahmed Zisan, a passionate web developer who loves learning new technologies and building creative solutions. I specialize in creating responsive, user-friendly websites and applications. I’m always eager to explore new challenges and improve my skills.
                        </p>
                        <p className="text-lg text-gray-700">
                           In my free time, I enjoy working on personal projects, experimenting with new frameworks, and keeping up with the latest trends in the tech world. Let's build something amazing together!
                        </p>

                        {/* Skills Section */}
                        <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-500 mt-6">Skills:</h4>
                        <p className="text-lg text-gray-700 mb-6">HTML, CSS, JavaScript, React, PHP, Laravel</p>

                        {/* Social Media Links */}
                        <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-500">Connect with me:</h4>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
                           {socialLinks.map((link,index) => (
                              <a
                                 href={link.path}
                                 target="_blank"
                                 className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-inner transition-all duration-300 shadow-emerald-300 hover:text-emerald-50 text-emerald-300"
                                 key={index}
                              >
                                 {getIcons(link.name)}
                              </a>
                           ))}
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6">
                           <a
                              href="mailto:mahfuz.ahmed.zisan@gmail.com"
                              className="bg-gradient-to-r from-purple-600 to-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-violet-800 transition duration-300 transform hover:scale-105 shadow-lg"
                           >
                              Hire Me
                           </a>
                           <a
                              href="CV.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              download={true}
                              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:bg-violet-600 transition duration-300 transform hover:scale-105 shadow-lg"
                           >
                              Download CV
                           </a>
                           <button onClick={handleClose} className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg'>Close</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
