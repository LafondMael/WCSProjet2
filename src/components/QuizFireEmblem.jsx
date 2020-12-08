/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import FireEmblem from "./image/nintendo/FireEmblem.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizFireEmblem extends Component {
  state = {
    questions: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
    },
    answers: {
      1: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      2: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      3: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      4: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      5: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      6: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      7: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      8: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      9: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
      10: {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
      },
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "3",
      4: "1",
      5: "4",
      6: "2",
      7: "3",
      8: "4",
      9: "3",
      10: "2",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    const {
      questions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      score,
    } = this.state;
    return (
      <div className="Content">
        <img src={FireEmblem} alt="fireemblem" className="imgFire" />
        {step <= Object.keys(questions).length ? (
          <>
            <Question question={questions[step]} />
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <button
              type="button"
              className="NextStep"
              aria-label="Next"
              disabled={
                !(clickedAnswer && Object.keys(questions).length >= step)
              }
              onClick={() => this.nextStep(step)}
            >
              {" "}
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>Félicitations, vous avez fini le Quiz !</h1>
            <p>
              Votre score est de: {score} sur {Object.keys(questions).length}
            </p>
            <a href="https://www.gifsanimes.com/cat-feux-d-artifice-492.htm">
              <img
                className="end"
                src="https://www.gifsanimes.com/data/media/492/feu-d-artifice-image-animee-0016.gif"
                border="0"
                alt="feu-d-artifice-image-animee-0016"
              />
            </a>
            <a href="https://www.gifsanimes.com/cat-feux-d-artifice-492.htm">
              <img
                className="end2"
                src="https://www.gifsanimes.com/data/media/492/feu-d-artifice-image-animee-0016.gif"
                border="0"
                alt="feu-d-artifice-image-animee-0016"
              />
            </a>
            <ButtonMenu chemin="/" />
          </div>
        )}
      </div>
    );
  }
}
