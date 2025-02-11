import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!user.username || !user.email || !user.password) {
      setError("All fields are required!");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = storedUsers.some((u) => u.email === user.email);

    if (emailExists) {
      setError("Email already exists! Try logging in.");
      return;
    }

    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Signup successful! Set sail for adventure!");
    navigate("/login");
  };

  return (
    <motion.div
      className="signup-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Join the Crew! 🏴‍☠️</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Pirate Name"
          value={user.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Treasure Map (Email)"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Secret Code (Password)"
          value={user.password}
          onChange={handleChange}
          required
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="signup-btn"
        >
          Set Sail!
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Signup;
