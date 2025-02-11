import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <h2>🏴‍☠️ SkillQuest</h2>
        <ul>
          <li><Link to="/learning">📖 Learning Path</Link></li>
          <li><Link to="/practice">⚔️ Practice Mode</Link></li>
          <li><Link to="/community">🏴‍☠️ Pirate Tavern</Link></li>
          <li><Link to="/profile">🦜 Profile & Progress</Link></li>
          <li><Link to="/resources">📜 Resource Library</Link></li>
        </ul>
      </nav>

      {/* Main Dashboard Content */}
      <div className="main-dashboard">
        <header>
          <h1>Welcome, Captain! ⚓</h1>
          <p>Your journey through the seas of web development begins!</p>
        </header>

        {/* Progress Tracking */}
        <div className="progress-section">
          <h2>⛵ Your Progress</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "40%" }}></div>
          </div>
          <p>Level 2: HTML Basics (40% complete)</p>
        </div>

        {/* Modules */}
        <div className="modules-section">
          <div className="module-card">
            <h3>📖 Learning Path</h3>
            <p>Continue your structured web development lessons.</p>
            <Link to="/learning" className="module-btn">Set Sail! ⛵</Link>
          </div>

          <div className="module-card">
            <h3>⚔️ Practice Mode</h3>
            <p>Test your skills with coding challenges.</p>
            <Link to="/practice" className="module-btn">Battle! ⚔️</Link>
          </div>

          <div className="module-card">
            <h3>🏴‍☠️ Pirate Tavern</h3>
            <p>Discuss with fellow developers and seek guidance.</p>
            <Link to="/community" className="module-btn">Join the Crew! 🏴‍☠️</Link>
          </div>
        </div>
      </div>

      {/* Onboarding & Assessment Modal */}
      {showOnboarding && (
        <motion.div
          className="onboarding-modal"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Ahoy, New Pirate! 🏴‍☠️</h2>
          <p>Before you embark, let's assess your skills!</p>
          <button onClick={() => navigate("/assessment")}>Start Assessment</button>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
