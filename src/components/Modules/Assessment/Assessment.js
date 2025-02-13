// OnboardingAssessment.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Assessment.css"; // Import CSS
import { motion } from "framer-motion";

const OnboardingAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [levelRecommendation, setLevelRecommendation] = useState(null);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showGoals, setShowGoals] = useState(false);

  // Sample Questions (Replace with real questions and adapt difficulty)
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "None of the above"],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Which of these is NOT a CSS property?",
      options: ["color", "font-size", "background-color", "font-weight"],
      correctAnswer: "font-weight", // Example - replace with a property that's not commonly used in basic CSS
    },
    // ... more questions
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const calculateLevel = () => {
    // Basic logic (improve with real scoring and adaptive difficulty)
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    const percentage = (correctAnswers / questions.length) * 100;

    if (percentage < 30) {
      return "Beginner";
    } else if (percentage < 70) {
      return "Intermediate";
    } else {
      return "Advanced";
    }
  };

  const handleRecommendation = () => {
    const level = calculateLevel();
    setLevelRecommendation(level);
    setShowRecommendation(true);
  };

  const handleGoalSelection = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleStartLearning = () => {
    localStorage.setItem("selectedGoals", JSON.stringify(selectedGoals));
    localStorage.setItem("recommendedLevel", levelRecommendation);
    localStorage.setItem("isLoggedIn", "true"); // Simulate login
    navigate("/learningpath"); // Redirect to learning path
  };

  const careerGoals = ["Get a front-end developer job", "Become a full-stack developer", "Build a portfolio", "Improve skills for career advancement"];
  const projectGoals = ["Build a personal blog", "Create a landing page", "Develop a React app", "Contribute to open source"];
  const skillGoals = ["Master HTML/CSS", "Become proficient in JavaScript", "Learn React.js", "Understand backend concepts"];

  return (
    <motion.div
      className="onboarding-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {!showRecommendation && (
        <div className="assessment-section">
          <h2>Skills Assessment</h2>
          <p>Answer the following questions to determine your skill level.</p>
          <div className="question">
            <h3>{questions[currentQuestion].question}</h3>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          {currentQuestion < questions.length - 1 ? (
            <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next Question</button>
          ) : (
            <button onClick={handleRecommendation}>Get Recommendation</button>
          )}
        </div>
      )}

      {showRecommendation && !showGoals && (
        <div className="recommendation-section">
          <h2>Level Recommendation</h2>
          <p>Based on your assessment, we recommend you start at the <strong>{levelRecommendation}</strong> level.</p>
          <button onClick={() => setShowGoals(true)}>Set Learning Goals</button>
        </div>
      )}

      {showGoals && (
        <div className="goals-section">
          <h2>Learning Goals</h2>
          <p>Select your learning goals to personalize your learning path.</p>
          <h3>Career Focused</h3>
          {careerGoals.map((goal) => (
            <label key={goal}>
              <input type="checkbox" checked={selectedGoals.includes(goal)} onChange={() => handleGoalSelection(goal)} />
              {goal}
            </label>
          ))}
          <h3>Project Focused</h3>
          {projectGoals.map((goal) => (
            <label key={goal}>
              <input type="checkbox" checked={selectedGoals.includes(goal)} onChange={() => handleGoalSelection(goal)} />
              {goal}
            </label>
          ))}
          <h3>Skill Focused</h3>
          {skillGoals.map((goal) => (
            <label key={goal}>
              <input type="checkbox" checked={selectedGoals.includes(goal)} onChange={() => handleGoalSelection(goal)} />
              {goal}
            </label>
          ))}
          <button onClick={handleStartLearning}>Start Learning</button>
        </div>
      )}
    </motion.div>
  );
};

export default OnboardingAssessment;