import React from 'react';
import { motion } from 'framer-motion';
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

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