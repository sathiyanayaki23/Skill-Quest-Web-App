import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import frontendImg from "./assets/images/frontendimg.jpg";
import "./App.css";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <div className="animated-bg"></div>

      <header className="app-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SkillQuest: Level Up
        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Embark on a Learning Adventure!
        </motion.p>

        {/* XP Bar representing the learner's progress */}
        <motion.div
          className="xp-bar"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="xp-fill" style={{ width: "50%" }}></div>
        </motion.div>
      </header>

      <main className="app-main">
        <div className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2>Level Up Your Web Skills!</h2>
            <p>
              Master HTML, CSS, JavaScript & more as you unlock new levels and
              achievements on your learning journey.
            </p>
            <div className="button-group">
              <Link to="/login" className="button primary">
                I ALREADY HAVE AN ACCOUNT
              </Link>
              <Link to="/signup" className="button secondary">
                GET STARTED
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={frontendImg} alt="Web Development Illustration" />
          </motion.div>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2025 SkillQuest - Level Up Your Knowledge Adventure!</p>
      </footer>
    </div>
  );
}

export default App;
