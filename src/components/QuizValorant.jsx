/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import Valorant from "./image/valorant2.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizValorant extends Component {
  state = {
    questions: {
      1: "Quel jeu se rapproche le plus de Valorant ?",
      2: "Comment les personnages sont ils appelés ?",
      3: "Combien y a t-il de maps ?",
      4: "Quel est le plus haut rang ?",
      5: "Qui sont les developpeurs du jeu ?",
      6: "Comment se nomme la bombe ?",
      7: "Quelle est la date de sorti officielle de Valorant ?",
      8: "Quelle est la seule à guerir et à vous ramener à la vie en pleine santé ?",
      9: "Quel fusil à la plus faible valeur de dégats à la tête ?",
      10: "Quelle est l'arme la plus chère du jeu ?",
    },
    answers: {
      1: {
        1: "COD",
        2: "Overwatch",
        3: "CSGO",
        4: "Raimbow 6",
      },
      2: {
        1: "Joueurs",
        2: "Soldat",
        3: "Merchs",
        4: "Agents",
      },
      3: {
        1: "6",
        2: "4",
        3: "2",
        4: "5",
      },
      4: {
        1: "Diamant",
        2: "Pierre",
        3: "Radiant",
        4: "Fer",
      },
      5: {
        1: "Epic Games",
        2: "Blizzard",
        3: "Riot",
        4: "Valve",
      },
      6: {
        1: "Courage",
        2: "Spike",
        3: "Oslow",
        4: "Lutti",
      },
      7: {
        1: "Décembre 2019",
        2: "Juin 2020",
        3: "Mars 2020",
        4: "Mai 2020",
      },
      8: {
        1: "Jett",
        2: "Killjoy",
        3: "Vipère",
        4: "Sauge",
      },
      9: {
        1: "Bouledogue",
        2: "Fantôme",
        3: "Vandale",
        4: "Gardian",
      },
      10: {
        1: "Odin",
        2: "Gardian",
        3: "Fantôme",
        4: "Opérator",
      },
    },
    correctAnswers: {
      1: "3",
      2: "4",
      3: "4",
      4: "3",
      5: "3",
      6: "2",
      7: "2",
      8: "4",
      9: "1",
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
        <img src={Valorant} alt="valorant" className="imgValo" />
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
