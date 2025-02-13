import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      alert("Welcome back to the SkillQuest!");
      navigate("/Assessment");
    } else {
      setError("Invalid login!");
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Welcome Back to SkillQuest
      </motion.h2>

      {error && (
        <motion.p
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {error}
        </motion.p>
      )}

      <form onSubmit={handleLogin}>
        <motion.input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #3498db" }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        <motion.input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #3498db" }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button
          type="submit"
          className="btn"
          whileHover={{ scale: 1.05, backgroundColor: "#2980b9" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Login
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Login;