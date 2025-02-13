// app.js
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import frontendImg from "./frontendimg.png"; // Keep your existing image
import logo from "./logo.png"; // Keep your existing logo
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <header className="app-header">
          <img src={logo} alt="SkillQuest Logo" className="app-logo" />
        </header>

        <main className="app-main">
          <section className="hero-section">
            <div className="hero-content">
            <motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Embark on a knowledge adventure!
</motion.h2>
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  Discover new web development skills and level up your knowledge.
</motion.p>
  
  
              <motion.div
                className="button-group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to="/signup" className="button primary">
                  GET STARTED
                </Link>
                <Link to="/login" className="button secondary">
                  I ALREADY HAVE AN ACCOUNT
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img src={frontendImg} alt="Web Development Illustration" />
             
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;