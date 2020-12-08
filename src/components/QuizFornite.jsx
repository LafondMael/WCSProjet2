/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import fortnite from "./image/fortnite4.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizFornite extends Component {
  state = {
    questions: {
      1: "A quel studio appartient Fornite ?",
      2: "Quelle est la particularité de ce BR ?",
      3: "Quel est le nom de la monnaie ?",
      4: "Quel est le plus grand streamer Fornite ?",
      5: "Quel matériau est imaginaire ?",
      6: "Que fait la bombe Boogie Woogie ?",
      7: "Quand est sorti Fornite ?",
      8: "Combien coute le passe combat ?",
      9: "Fornite permet de conduire ?",
      10: "Que contiennent les lamas ?",
    },
    answers: {
      1: {
        1: "Ubisoft",
        2: "Supercelle",
        3: "Epic Games",
        4: "Electronique Art",
      },
      2: {
        1: "On peut être invisible ",
        2: "On peut construire",
        3: "On peut chanter",
        4: "On peut se laver",
      },
      3: {
        1: "V-buys",
        2: "V-Bucks",
        3: "F-bucks",
        4: "V-backs",
      },
      4: {
        1: "Michou",
        2: "Ninja",
        3: "Shroud",
        4: "Dahmien7",
      },
      5: {
        1: "La pierre",
        2: "Le métal",
        3: "Le ciment",
        4: "Le bois",
      },
      6: {
        1: "Elle fait chanter son adversaire",
        2: "Elle fait danser son adversaire",
        3: "Elle fait dormir son adversaire",
        4: "Elle fait exploser son adversaire",
      },
      7: {
        1: "2016",
        2: "2018",
        3: "2019",
        4: "2017",
      },
      8: {
        1: "950 v-bucks",
        2: "900 v-bucks",
        3: "750 v-bucks",
        4: "800 v-bucks",
      },
      9: {
        1: "Des tondeuses",
        2: "Des motoculteurs",
        3: "Des bateaux,voitures",
        4: "Des quads",
      },
      10: {
        1: "Des grenades",
        2: "Des armes",
        3: "Des soins,munitions",
        4: "De la nourriture",
      },
    },
    correctAnswers: {
      1: "3",
      2: "2",
      3: "2",
      4: "2",
      5: "3",
      6: "2",
      7: "4",
      8: "1",
      9: "3",
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
        <img src={fortnite} alt="fortnite" className="imgfortnite" />
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
