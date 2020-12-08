import React from "react";
import "./question.css";
import PropTypes from "prop-types";

const Question = ({ question }) => {
  return <h1 className="questions">{question}</h1>;
};

Question.propTypes = { question: PropTypes.string.isRequired };

export default Question;
