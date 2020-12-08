/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import Overwatch from "./image/overwatch4.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizOverwatch extends Component {
  state = {
    questions: {
      1: "Combien y a t-il de personnage dans une équipe ?",
      2: "Quel personnage peut empecher les ennemies de faire leurs compétences ?",
      3: "Qui est le leader du jeu ?",
      4: "Lequel de ces lieux n'est pas une map du jeu ?",
      5: "Quel est le niveau maximum actuel atteignable ?",
      6: "Combien de modes de jeu y a t-il ?",
      7: "Quel personnages ne fait pas partie du jeu ?",
      8: "Qui est Anubis ?",
      9: "Comment se prénomme l'oiseau accompagnant Bastion ?",
      10: "Quel est le personnage le plus âgé d'overwatch ?",
    },
    answers: {
      1: {
        1: "6",
        2: "7",
        3: "3",
        4: "5",
      },
      2: {
        1: "Tracer",
        2: "Sombra",
        3: "Reinhart",
        4: "Chopper",
      },
      3: {
        1: "Winston",
        2: "Ana",
        3: "Chopper",
        4: "Soldat 76",
      },
      4: {
        1: "Hollywood",
        2: "Grand Canyon",
        3: "Route 66",
        4: "Forêt noire",
      },
      5: {
        1: "150",
        2: "400",
        3: "570",
        4: "1890",
      },
      6: {
        1: "4",
        2: "7",
        3: "3",
        4: "5",
      },
      7: {
        1: "Ana",
        2: "Ben",
        3: "Reinhart",
        4: "Torbjorn",
      },
      8: {
        1: "Une intelligence artificielle supérieure",
        2: "Le pseudonyme d'Ana Amari",
        3: "Le nom du lance roquette de Pharah",
        4: "Le capitaine de Hélix Security",
      },
      9: {
        1: "Galycé",
        2: "Hélicé",
        3: "Ganymède",
        4: "Callisto",
      },
      10: {
        1: "Soldat 76",
        2: "Ana",
        3: "Torbjorn",
        4: "Reinhart",
      },
    },
    correctAnswers: {
      1: "1",
      2: "2",
      3: "4",
      4: "2",
      5: "4",
      6: "4",
      7: "2",
      8: "1",
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
        <img src={Overwatch} alt="overwatch" className="imgOverwatch" />
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
