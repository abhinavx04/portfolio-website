import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section px-4 py-16 overflow-hidden">
      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 bg-cyan-500 rounded-md p-2">
            <span className="text-black font-bold text-lg">06</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white pl-12 mb-2 sm:mb-4">Contact</h2>
          <p className="text-sm sm:text-base text-gray-400 pl-12">Get in touch with me</p>
        </motion.div>
        <motion.div 
          className="bg-gray-800 rounded-lg p-6 sm:p-8 shadow-2xl relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative z-10 space-y-6 sm:space-y-8">
            {/* Contact Info Section */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: FaPhone, text: "91+ 8600101572" },
                { icon: FaEnvelope, text: "abhinavpillai92@gmail.com" },
                { icon: FaMapMarkerAlt, text: "Chennai" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center bg-gray-700 p-3 sm:p-4 rounded-lg overflow-hidden relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                  <div className="bg-gray-600 p-2 rounded-full mr-3 sm:mr-4 z-10">
                    <item.icon className="text-cyan-400 text-lg sm:text-xl" />
                  </div>
                  <p className="text-white text-sm sm:text-base z-10">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "message"].map((field, index) => (
                <motion.div
                  key={field}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setActiveField(field)}
                    onBlur={() => setActiveField(null)}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className={`w-full bg-gray-700 text-white rounded-lg px-4 py-3 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 ${field === "message" ? "h-24 sm:h-32 resize-none" : ""}`}
                    required
                  />
                  <AnimatePresence>
                    {activeField === field && (
                      <motion.span
                        className="absolute bottom-2 right-2 text-cyan-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <FaCheck />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence>
                  {!isSubmitted ? (
                    <motion.div
                      key="sendMessage"
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="mr-2 text-sm sm:text-base">Send Message</span>
                      <FaPaperPlane />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="messageSent"
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="mr-2 text-sm sm:text-base">Message Sent!</span>
                      <FaCheck />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;