import React, { useState } from 'react';
import "/CSS/DigimonQuiz.css"

const DigimonQuiz = () => {
  // Define quiz questions and possible answers with associated Digimon
  const questions = [
    {
      question: "What's your favorite type of environment?",
      options: [
        { answer: "Forest", digimon: "Agumon" },
        { answer: "Ocean", digimon: "Gabumon" },
        { answer: "City", digimon: "Patamon" },
        { answer: "Mountains", digimon: "Tentomon" },
      ],
    },
    {
      question: "What's your strongest trait?",
      options: [
        { answer: "Bravery", digimon: "Greymon" },
        { answer: "Wisdom", digimon: "Tentomon" },
        { answer: "Kindness", digimon: "Gabumon" },
        { answer: "Curiosity", digimon: "Agumon" },
      ],
    },
    {
      question: "How do you prefer to approach a challenge?",
      options: [
        { answer: "Fight head-on", digimon: "Agumon" },
        { answer: "Strategize first", digimon: "Gabumon" },
        { answer: "Take time to observe", digimon: "Tentomon" },
        { answer: "Work with others", digimon: "Patamon" },
      ],
    },
  ];

  // State to store user's answers
  const [answers, setAnswers] = useState([]);

  // Function to handle answer selection
  const handleAnswerSelection = (questionIndex, digimon) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = digimon;
    setAnswers(newAnswers);
  };

  // Calculate the result based on answers
  const calculateResult = () => {
    // Count occurrences of each Digimon
    const digimonCount = {};
    answers.forEach((digimon) => {
      if (digimon) {
        digimonCount[digimon] = (digimonCount[digimon] || 0) + 1;
      }
    });

    // Sort Digimons based on frequency, then get the top 9 Digimons
    const sortedDigimons = Object.keys(digimonCount)
      .sort((a, b) => digimonCount[b] - digimonCount[a])
      .slice(0, 9); // Select top 9 Digimons

    return sortedDigimons;
  };

  return (
    <div className="quiz-container">
      <h1>Which Digimon are you compatible with?</h1>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-container">
          <h2>{question.question}</h2>
          <div className="options-container">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(questionIndex, option.digimon)}
                className="option-button"
              >
                {option.answer}
              </button>
            ))}
          </div>
        </div>
      ))}

      {answers.length === questions.length && (
        <div className="result-container">
          <h2>Your compatible Digimons are:</h2>
          <div className="result-grid">
            {calculateResult().map((digimon, index) => (
              <div key={index} className="result-item">
                <img
                  src={`https://www.digimonwiki.com/wiki/File:${digimon}.png`} // Example Digimon image URL
                  alt={digimon}
                  className="digimon-image"
                />
                <p>{digimon}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DigimonQuiz;
