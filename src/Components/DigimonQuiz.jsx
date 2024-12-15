import React, { useState } from 'react';
import "/CSS/DigimonQuiz.css";

const DigimonQuiz = () => {
  const questions = [
    {
      question: "What's your favorite type of environment?",
      options: [
        { answer: "Forest", digimon: "Agumon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222225/agumon_f3qkhx.jpg" },
        { answer: "Ocean", digimon: "Gabumon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222227/gabumon_mngqav.jpg" },
        { answer: "City", digimon: "Patamon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222230/patamon_adihiw.jpg" },
        { answer: "Mountains", digimon: "Tentomon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222235/tentomon_ziiats.jpg" },
      ],
    },
    {
      question: "What's your strongest trait?",
      options: [
        { answer: "Bravery", digimon: "Greymon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222242/greymon_jh2a2e.jpg" },
        { answer: "Wisdom", digimon: "Tentomon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222235/tentomon_ziiats.jpg" },
        { answer: "Kindness", digimon: "Gabumon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222227/gabumon_mngqav.jpg" },
        { answer: "Curiosity", digimon: "Agumon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222225/agumon_f3qkhx.jpg" },
      ],
    },
    {
      question: "How do you prefer to approach a challenge?",
      options: [
        { answer: "Fight head-on", digimon: "Agumon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222225/agumon_f3qkhx.jpg" },
        { answer: "Strategize first", digimon: "Gabumon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222227/gabumon_mngqav.jpg" },
        { answer: "Take time to observe", digimon: "Tentomon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222235/tentomon_ziiats.jpg" },
        { answer: "Work with others", digimon: "Patamon", imgSrc: "https://res.cloudinary.com/dhexjuuzd/image/upload/v1734222230/patamon_adihiw.jpg" },
      ],
    },
  ];

  const [answers, setAnswers] = useState([]);
  const [finalDigimon, setFinalDigimon] = useState(null);

  const handleAnswerSelection = (questionIndex, digimon, imgSrc) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = { digimon, imgSrc };
    setAnswers(newAnswers);
  };

  const calculateFinalResult = () => {
    if (answers.length === questions.length) {
      const digimonCount = {};
      answers.forEach((answer) => {
        if (answer) {
          digimonCount[answer.digimon] = (digimonCount[answer.digimon] || 0) + 1;
        }
      });

      const finalResult = Object.keys(digimonCount).sort(
        (a, b) => digimonCount[b] - digimonCount[a]
      )[0];
      setFinalDigimon(finalResult);
    }
  };

  const getDigimonImage = (digimon) => {
    for (const question of questions) {
      const match = question.options.find((option) => option.digimon === digimon);
      if (match) {
        return match.imgSrc;
      }
    }
    return null;
  };

  const isQuizCompleted = answers.length === questions.length;

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
                onClick={() => handleAnswerSelection(questionIndex, option.digimon, option.imgSrc)}
                className="option-button"
              >
                {option.answer}
              </button>
            ))}
          </div>
          {answers[questionIndex] && (
            <div className="answer-img-container">
              <img
                src={answers[questionIndex].imgSrc}
                alt={answers[questionIndex].digimon}
                className="answer-img"
              />
              <p>{answers[questionIndex].digimon}</p>
            </div>
          )}
        </div>
      ))}



 
    </div>
  );
};

export default DigimonQuiz;
