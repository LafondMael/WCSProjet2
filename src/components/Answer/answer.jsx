import PropTypes from "prop-types";
import React from "react";
import "./answer.css";

const Answer = ({ answer, correctAnswer, clickedAnswer, checkAnswer }) => {
  const onKeyPressEnter = (event, qAnswer) => {
    if (event.key === "Enter") {
      checkAnswer(qAnswer);
    }
  };
  const checkCorrectAnswer = (qAnswer) => {
    let answerClass = "";
    if (correctAnswer === qAnswer) {
      answerClass = "correct";
    } else if (clickedAnswer === qAnswer) {
      answerClass = "incorrect";
    }

    return answerClass;
  };

  const answers = Object.keys(answer).map((qAnswer) => (
    <li
      className={checkCorrectAnswer()}
      onClick={() => checkAnswer(qAnswer)}
      onKeyPress={(event) => onKeyPressEnter(event, qAnswer)}
      key={qAnswer}
      role="menuitem"
      tabIndex="0"
    >
      {answer[qAnswer]}
    </li>
  ));

  return (
    <h1>
      <ul disabled={clickedAnswer} className="Answers">
        {answers}
      </ul>
      <div>
        {clickedAnswer === correctAnswer && clickedAnswer !== 0 && (
          <h4>"Bonne Réponse!"</h4>
        )}
        {clickedAnswer !== correctAnswer && <h4>"Mauvaise Réponse!"</h4>}
      </div>
    </h1>
  );
};

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  clickedAnswer: PropTypes.string.isRequired,
  checkAnswer: PropTypes.string.isRequired,
};

export default Answer;
