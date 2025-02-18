// OnboardingAssessment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Assessment.css";
import { motion } from "framer-motion";

const OnboardingAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [levelRecommendation, setLevelRecommendation] = useState(null);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "None of the above"],
      correctAnswer: "Hyper Text Markup Language",
      difficulty: 1,
    },
    {
      question: "Which of these is NOT a CSS property?",
      options: ["color", "font-size", "background-color", "font-weight"],
      correctAnswer: "font-weight",
      difficulty: 2,
    },
    {
      question: "What is the purpose of JavaScript?", // Example question
      options: ["Styling web pages", "Adding interactivity to web pages", "Creating database connections", "Defining document structure"],
      correctAnswer: "Adding interactivity to web pages",
      difficulty: 2,
    },
    // ... more questions with difficulty
  ];

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    setAnswers([...answers, answer]);
    setFeedback(isCorrect ? "Correct!" : "Incorrect. Try again.");
    setProgress((currentQuestion + 1) / questions.length * 100);

    if (isCorrect) {
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setFeedback(null);
        } else {
          handleRecommendation();
        }
      }, 500);
    }
  };

  const calculateLevel = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) {
        score += q.difficulty;
      }
    });

    const maxScore = questions.reduce((sum, q) => sum + q.difficulty, 0);
    const percentage = (score / maxScore) * 100;

    if (percentage < 40) {
      return "Beginner";
    } else if (percentage < 75) {
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
    localStorage.setItem("isLoggedIn", "true");
    navigate("/learningpath");
  };

  const careerGoals = [
    "Get a front-end developer job",
    "Become a full-stack developer",
    "Build a portfolio",
    "Improve skills for career advancement",
  ];
  const projectGoals = [
    "Build a personal blog",
    "Create a landing page",
    "Develop a React app",
    "Contribute to open source",
  ];
  const skillGoals = [
    "Master HTML/CSS",
    "Become proficient in JavaScript",
    "Learn React.js",
    "Understand backend concepts",
  ];
  return (
    <motion.div
      className="onboarding-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Assessment Section */}
      {!showRecommendation && (
        <div className="assessment-section">
          <h2>Skills Assessment</h2> {/* Heading */}
          <div className="progress-bar"> {/* Progress Bar */}
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="question"> {/* Question */}
            <h3>{questions[currentQuestion].question}</h3>
            <div className="options-container"> {/* Options */}
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="answer-option"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          {feedback && ( // Feedback
            <p className={`feedback ${feedback === "Correct!" ? "correct" : "incorrect"}`}>
              {feedback}
            </p>
          )}
          {/* Navigation Buttons */}
          {currentQuestion < questions.length - 1 && !feedback && (
            <button className="next-button" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
              Next Question
            </button>
          )}
          {currentQuestion === questions.length - 1 && !feedback && (
            <button className="get-recommendation-button" onClick={handleRecommendation}>
              Get Recommendation
            </button>
          )}
        </div>
      )}

      {/* Recommendation Section */}
      {showRecommendation && !showGoals && (
        <div className="recommendation-section">
          <h2>Level Recommendation</h2>
          <p>
            Based on your assessment, we recommend you start at the{" "}
            <strong>{levelRecommendation}</strong> level.
          </p>
          <button className="set-goals-button" onClick={() => setShowGoals(true)}>
            Set Learning Goals
          </button>
        </div>
      )}

      {/* Goals Section */}
      {showGoals && (
        <div className="goals-section">
          <h2>Learning Goals</h2>
          <p>Select your learning goals to personalize your learning path.</p>
          <div className="goals-category-container"> {/* Container for categories */}
            <div className="goals-category"> {/* Career Goals */}
              <h3>Career Focused</h3>
              {careerGoals.map((goal) => (
                <label key={goal}>
                  <input
                    type="checkbox"
                    checked={selectedGoals.includes(goal)}
                    onChange={() => handleGoalSelection(goal)}
                  />
                  {goal}
                </label>
              ))}
            </div>
            <div className="goals-category"> {/* Project Goals */}
              <h3>Project Focused</h3>
              {projectGoals.map((goal) => (
                <label key={goal}>
                  <input
                    type="checkbox"
                    checked={selectedGoals.includes(goal)}
                    onChange={() => handleGoalSelection(goal)}
                  />
                  {goal}
                </label>
              ))}
            </div>
            <div className="goals-category"> {/* Skill Goals */}
              <h3>Skill Focused</h3>
              {skillGoals.map((goal) => (
                <label key={goal}>
                  <input
                    type="checkbox"
                    checked={selectedGoals.includes(goal)}
                    onChange={() => handleGoalSelection(goal)}
                  />
                  {goal}
                </label>
              ))}
            </div>
          </div>
          <button className="start-learning-button" onClick={handleStartLearning}>
            Start Learning
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default OnboardingAssessment;