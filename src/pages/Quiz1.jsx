// src/Quiz.js
import React, { useState } from "react";
import "./Quiz.css";
import tharu from "./data/tharu";
import { NavLink } from "react-router-dom";

function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === tharu[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < tharu.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="quiz">
      {currentQuestion < tharu.length && !submitted ? (
        <div>
          <h2>{tharu[currentQuestion].question}</h2>
          <ul>
            {tharu[currentQuestion].options.map((option) => (
              <li
                key={option}
                onClick={() => handleAnswerClick(option)}
                className="answer-option"
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={() => setSubmitted(true)} className="submit-button">
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed</h2>
          <p>
            Your Score: {score}/{tharu.length}
          </p>

          <NavLink to="/">
            <button>Restart</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Quiz1;