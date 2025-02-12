import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Assessment.css";

const questions = [
  { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Hyper Tool Multi Language", "HighText Machine Learning"], answer: "HyperText Markup Language" },
  { question: "Which CSS property controls text size?", options: ["font-size", "text-size", "size"], answer: "font-size" },
  { question: "What is the correct syntax for referring to an external script called 'app.js'?", options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>"], answer: "<script src='app.js'>" }
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <motion.div 
      className="assessment-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {completed ? (
        <div className="result-section">
          <h2>Your Assessment is Complete! 🎉</h2>
          <p>Final Score: {score} / {questions.length}</p>
          <button onClick={() => navigate("/learning")}>Continue to Your Learning Path</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Assessment;
