/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import ClashOfClans from "./image/mobile/clashOfClans.png";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizCoc extends Component {
  state = {
    questions: {
      1: "Quel est le niveau max de l'HDV du village principal ?",
      2: "Combien y a-t-il de héros dans le village principal ?",
      3: "Quel est le niveau de ligue le plus élevé ?",
      4: "Combien y a-t-il d'engins dans le village principal ?",
      5: "Quel est le nom du second village ?",
      6: "Quel bâtiment de la base des ouvriers permet d'accélérer tout ce que s'y passe ?",
      7: "Combien y a t'il de troupes féminines dans la base des ouvriers ?",
      8: "Combien y a t'il de paliers lors des jeux de clan ?",
      9: "Dans quel bâtiment sont stockés vos objets magiques ?",
      10: "Quel bâtiment permet d'améliorer les troupes dans le village principal ?",
    },
    answers: {
      1: {
        1: "11",
        2: "12",
        3: "13",
        4: "14",
      },
      2: {
        1: "2",
        2: "3",
        3: "4",
        4: "5",
      },
      3: {
        1: "Titan",
        2: "Champion",
        3: "Cristal",
        4: "Légendes",
      },
      4: {
        1: "4",
        2: "3",
        3: "2",
        4: "5",
      },
      5: {
        1: "Base QG",
        2: "Base des ouvriers",
        3: "Base navale",
        4: "Base de repli",
      },
      6: {
        1: "Laboratoire Astral",
        2: "Mine de gemmes",
        3: "Extracteur d'élixir",
        4: "Tour de l'horloge",
      },
      7: {
        1: "2",
        2: "Aucune",
        3: "3",
        4: "1",
      },
      8: {
        1: "7",
        2: "5",
        3: "6",
        4: "8",
      },
      9: {
        1: "Aigle artilleur",
        2: "HDV",
        3: "Laboratoire",
        4: "Château de clan",
      },
      10: {
        1: "Laboratoire",
        2: "Usine de sorts",
        3: "Château de clan",
        4: "Atelier",
      },
    },
    correctAnswers: {
      1: "3",
      2: "3",
      3: "4",
      4: "1",
      5: "2",
      6: "4",
      7: "1",
      8: "3",
      9: "2",
      10: "1",
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
        <img
          src={ClashOfClans}
          alt="clashofclans"
          className="imgclashofclans"
        />
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
            <div className="containerbutton">
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
            </div>
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
