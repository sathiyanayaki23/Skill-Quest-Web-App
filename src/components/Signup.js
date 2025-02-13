import React, { useState, useEffect } from "react"; // Import useEffect
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineLogin } from "react-icons/ai";
import "./Auth.css";

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
  useEffect(() => {
    localStorage.removeItem("users"); // Clear users on component mount
    localStorage.removeItem("isLoggedIn"); // Clear login flag on component mount
    localStorage.removeItem("googleUser"); // Clear google user data on component mount
  }, []); // Empty dependency array ensures this runs only once on mount


  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
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

    // Simulate storing user in database (localStorage)
    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // *** KEY CHANGE: Set the isLoggedIn flag *before* redirecting ***
    localStorage.setItem("isLoggedIn", "true"); // Set login flag (Temporary)

    alert("Signup successful! Time for the assessment!");
    navigate("/assessment"); // Now the redirect will work correctly
  };


  const handleGoogleSignup = () => {
    // Placeholder for Google Auth (Frontend Only - No Backend Interaction)
    // In a real application, you would use a library like Firebase or
    // implement your own OAuth flow to handle Google authentication.

    // Simulate Google User (Replace with actual Google user data)
    const googleUser = {
      displayName: "Google User", // Or get the name from Google
      email: "googleuser@example.com", // Or get the email from Google
      // ... any other relevant data from Google
    };

    // Store Google user data (or a flag indicating Google signup)
    localStorage.setItem("googleUser", JSON.stringify(googleUser)); // Or a flag

    alert("Simulating Google Signup. Redirecting to assessment.");
    navigate("/assessment");
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
       {/* Close Icon (Top Left) */}
       <motion.div
        className="close-icon"
        onClick={() => navigate("/")} // Redirect to homepage
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <AiOutlineClose size={24} /> {/* Use the close icon */}
      </motion.div>


      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Join the SkillQuest!
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
      <form onSubmit={handleSignup}>
        {/* ... (Your input fields - same as before) ... */}
        <motion.input
          type="text"
          name="username"
          placeholder="Your Name"
          value={user.username}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #3498db" }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #3498db" }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />

        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
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
          Join Now!
        </motion.button>
      </form>

      <motion.button // Google Signup Button
        className="btn google-signup-btn"
        onClick={handleGoogleSignup}
        whileHover={{ scale: 1.05, backgroundColor: "2980b9" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Sign up with Google
      </motion.button>
    </motion.div>
  );
};

export default Signup;