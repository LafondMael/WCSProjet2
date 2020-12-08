/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import Metroid from "./image/nintendo/Metroid.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizMetroid extends Component {
  state = {
    questions: {
      1: "Dans quel jeu Mario appraît-il pour la première fois ?",
      2: "Quel est le premier nom de Mario ?",
      3: "Quel est le nom complet de Yoshi's Island ?",
      4: "Quel est le nom du Royaume de Peach ?",
      5: "Quel est le nom du Royaume de Daisy ?",
      6: "Quel est le titre de Bowser ?",
      7: "Chez qui Mario loge t'il ?",
      8: "Combien de jeux Mario font partis de la série des Super Mario ?",
      9: "Combien de jeux Super Mario existe t'il en 3D ?",
      10: "Quel est le rival déchu de Mario ?",
    },
    answers: {
      1: {
        1: "Super Mario World",
        2: "Super Mario Bros",
        3: "Donkey Kong",
        4: "Super Mario Land",
      },
      2: {
        1: "Wario",
        2: "Yoshi",
        3: "Mario",
        4: "Jump Man",
      },
      3: {
        1: "Yoshi's World: Yoshi's Island",
        2: "Super Mario World 2: Yoshi's Island",
        3: "Yoshi's Island",
        4: "Yoshi's Adventure: Yoshi's Island",
      },
      4: {
        1: "Royaume de Koopa Koppa",
        2: "Royaume de Sarasland",
        3: "Royaume Champignon",
        4: "Royaume Céleste",
      },
      5: {
        1: "Royaume de Koopa Koppa",
        2: "Royaume de Sarasland",
        3: "Royaume Champignon",
        4: "Royaume Céleste",
      },
      6: {
        1: "Juste Bowser",
        2: "Seigneur",
        3: "Lord",
        4: "Roi",
      },
      7: {
        1: "Chez lui",
        2: "Chez Peach",
        3: "Chez Luigi",
        4: "On ne sait pas",
      },
      8: {
        1: "26",
        2: "27",
        3: "28",
        4: "29",
      },
      9: {
        1: "7",
        2: "8",
        3: "9",
        4: "10",
      },
      10: {
        1: "Wario",
        2: "Luigi",
        3: "Bowser",
        4: "Sonic",
      },
    },
    correctAnswers: {
      1: "3",
      2: "4",
      3: "2",
      4: "3",
      5: "2",
      6: "4",
      7: "3",
      8: "2",
      9: "3",
      10: "4",
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
        <img src={Metroid} alt="metroid" className="imgMetroid" />
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
