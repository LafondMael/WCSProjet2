/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import pubg from "./image/pubg2.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizPubg extends Component {
  state = {
    questions: {
      1: "En quel année est sorti PUBG en France ?",
      2: "Laquelle de ces villes ne fait partie d'érangel ?",
      3: "Comment se prénomme le concepteur de PUBG ?",
      4: "Que signifie PUBG ?",
      5: "Quel types de véhicules ne fait partie d'érangel ?",
      6: "Laquelles de ces armes n'est pas une AR ?",
      7: "Quel est le nombre maximum de joueur par partie ?",
      8: "Quelle armes de corps à corps n'existe pas ?",
      9: "A ce jour combien y a t-il de maps ?",
      10: "Laquelles de ces armes peut posseder une poignée ?",
    },
    answers: {
      1: {
        1: "2016",
        2: "2018",
        3: "2019",
        4: "2017",
      },
      2: {
        1: "School",
        2: "Rozhok",
        3: "Picadeli",
        4: "Shelter",
      },
      3: {
        1: "Darren Sugg",
        2: "Brendan Greene",
        3: "Hidetaka Miyazaki",
        4: "Imran Sarwar",
      },
      4: {
        1: "PlayerUnknown's Battlegrounds",
        2: "PlayerUnited Battlegrounds",
        3: "PlayerUnilited Bombzone",
        4: "PlayerUnknown's Battlegrands",
      },
      5: {
        1: "Moto",
        2: "Bateau",
        3: "Quad",
        4: "Deltaplane",
      },
      6: {
        1: "M416",
        2: "SCAR'L",
        3: "VECTEUR",
        4: "AKM",
      },
      7: {
        1: "60",
        2: "90",
        3: "100",
        4: "70",
      },
      8: {
        1: "Arbalète",
        2: "Marteau",
        3: "Poele",
        4: "Hachette",
      },
      9: {
        1: "4",
        2: "6",
        3: "3",
        4: "5",
      },
      10: {
        1: "AWM",
        2: "M16A4",
        3: "AKM",
        4: "M416",
      },
    },
    correctAnswers: {
      1: "4",
      2: "3",
      3: "2",
      4: "1",
      5: "3",
      6: "3",
      7: "3",
      8: "2",
      9: "2",
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
        <img src={pubg} alt="pubg" className="imgpubg" />
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
