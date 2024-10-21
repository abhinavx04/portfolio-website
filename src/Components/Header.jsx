import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      className={`py-4 px-4 w-full fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <motion.div 
          className="text-xl font-bold text-cyan-400 mb-4 w-full sm:mb-0 sm:w-auto"
          whileHover={{ scale: 1.05 }}
        >
          Abhinav Pillai
        </motion.div>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:justify-start sm:space-x-4">
            {['home', 'about', 'tech-stack', 'projects', 'contact'].map((item) => (
              <motion.li key={item} className="mx-2 my-1" whileHover={{ scale: 1.1 }}>
                <button 
                  onClick={() => scrollToSection(item)} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm sm:text-base"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap justify-center space-x-4 mt-4 w-full sm:mt-0 sm:w-auto">
          {[
            { icon: FaInstagram, link: "https://www.instagram.com/_abhinavx.__/?next=%2Fyourusername%2F" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/abhinav-pillai-b5533526a/" },
            { icon: FaGithub, link: "https://github.com/abhinavx04" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors mb-2 sm:mb-0"
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}

export default Header;