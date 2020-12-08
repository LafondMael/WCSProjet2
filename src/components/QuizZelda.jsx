/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import Zelda from "./image/nintendo/Zelda.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizZelda extends Component {
  state = {
    questions: {
      1: "Quand est sorti le premier jeu The Legend of Zelda ?",
      2: "Combien de jeu Legend of Zelda existe t'il ? (hors remakes)",
      3: "Quel est le nom des trois parties de la Triforce ?",
      4: "Quel est le nom du peuple du désert ?",
      5: "Quel est le nom du Protagoniste ?",
      6: "Quel est le nom de l'Antagoniste principal ?",
      7: "En plus d'avoir une Triforce, quelle est l'autre particularitée de Ganondorf ?",
      8: "Quel est le nom de l'épée ultime portée par Link ?",
      9: "Quel est le nom des divinités principales ?",
      10: "Quel est la forme crépusculaire de Link ?",
    },
    answers: {
      1: {
        1: "1985",
        2: "1986",
        3: "1987",
        4: "1988",
      },
      2: {
        1: "19",
        2: "20",
        3: "21",
        4: "22",
      },
      3: {
        1: "Courage, Sagesse et Force",
        2: "Bravoure, Inteligence et Puissance",
        3: "Fermeté, Technique et Audace",
        4: "Ardeur, Logique et Cran",
      },
      4: {
        1: "Hyliens",
        2: "Gerudos",
        3: "Gorons",
        4: "Zoras",
      },
      5: {
        1: "Link",
        2: "Zelda",
        3: "Ganondorf",
        4: "Terry",
      },
      6: {
        1: "Link",
        2: "Zelda",
        3: "Ganondorf",
        4: "Terry",
      },
      7: {
        1: "Il peux voler",
        2: "Il possède son propre Navire",
        3: "Il est marié à une Zora",
        4: "Il est un Gerudo Male",
      },
      8: {
        1: "Epée Divine",
        2: "Master Sword",
        3: "Excalibur",
        4: "Epée des Sages",
      },
      9: {
        1: "Hylia, Levia et Zephos",
        2: "Jabu-Jabu, Deku et Skull Kid",
        3: "Eldin, Lanayru et Faron",
        4: "Din, Nayru et Farore",
      },
      10: {
        1: "Un Hibou",
        2: "Un Cerf",
        3: "Un Loup",
        4: "Un Ours",
      },
    },
    correctAnswers: {
      1: "3",
      2: "2",
      3: "1",
      4: "2",
      5: "1",
      6: "3",
      7: "4",
      8: "2",
      9: "4",
      10: "3",
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
        <img src={Zelda} alt="Zelda" className="imgZelda" />
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
