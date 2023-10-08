// src/Quiz.js
import React, { useState } from "react";
import tamang from "./data/tamang";
import "./Quiz.css";
import { NavLink } from "react-router-dom";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === tamang[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < tamang.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="quiz">
      {currentQuestion < tamang.length && !submitted ? (
        <div>
          <h2>{tamang[currentQuestion].question}</h2>
          <ul>
            {tamang[currentQuestion].options.map((option) => (
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
            Your Score: {score}/{tamang.length}
          </p>

          <NavLink to="/">
            <button>Restart</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Quiz;