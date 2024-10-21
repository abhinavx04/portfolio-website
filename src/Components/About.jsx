import React from 'react';
import { motion } from 'framer-motion';
import { FaBehance, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section px-4 py-16 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="w-full md:w-1/3 h-64 md:h-auto bg-cyan-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="/assets/aboutme.jpeg" 
                alt="Abhinav Pillai" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-2/3 p-6 md:p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 md:mb-4 break-words">ABOUT ME</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4 break-words">ABHINAV PILLAI</h3>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                Result-oriented Web Application Developer with one year of impactful front-end development experience. Expert in ReactJS, Tailwind, and responsive web design, delivering accessible, cross-browser-compatible applications. Proficient in Git, GitHub, and integrating APIs to create engaging user experiences. Developed clones of Spotify, MakeMyTrip, and Amazon. Pursuing a B.Tech in Computer Science and Engineering, with solid knowledge of HTML, CSS, and JavaScript. Ready to leverage my skills and passion in a dynamic Web Developer role to drive innovation and deliver seamless solutions.
              </p>
              <div className="flex flex-wrap space-x-4 justify-center md:justify-start">
                {[FaBehance, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-2"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Icon size={20} className="md:w-6 md:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;