import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <motion.nav
        className="sidebar"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="logo">🏴‍☠️ SkillQuest</h2>
        <ul>
          <li><Link to="/onboarding">Onboarding & Assessment</Link></li>
          <li><Link to="/learning">Learning Path</Link></li>
          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </motion.nav>

      {/* Main Content */}
      <motion.main
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/learning" element={<LearningPath />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </motion.main>
    </div>
  );
};

// Placeholder components (to be developed later)
const Onboarding = () => <h1>🏴‍☠️ Welcome to SkillQuest Onboarding!</h1>;
const LearningPath = () => <h1>📖 Choose Your Learning Path</h1>;
const Practice = () => <h1>💻 Practice Your Skills</h1>;
const Community = () => <h1>🤝 Join the Pirate Community</h1>;
const Profile = () => <h1>⚓ Customize Your Profile</h1>;
const Resources = () => <h1>📚 Access Learning Resources</h1>;

export default Dashboard;
