import React from 'react';
import { motion } from 'framer-motion';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <motion.div 
      className="App bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Home />
        <About />
        <TechStack />
        <Projects />
        <ContactMe />
      </main>
    </motion.div>
  );
}

export default App;