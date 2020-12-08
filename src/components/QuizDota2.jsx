/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import dota2 from "./image/moba/dota2.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizSmash extends Component {
  state = {
    questions: {
      1: "Qui a développé ce jeu ?",
      2: "Quel type de jeu est 'Dota2' ?",
      3: "Combien de champions y a t'il dans ce jeu ?",
      4: "Quand est sorti le jeu initialement ?",
      5: "Quand la première nuit commence ?",
      6: "Combien d'experiance faut-il pour passer au niveau 2 ?",
      7: "A 20min de jeu, combien Roshan a de point de vie ?",
      8: "Quelle unité invoquée dure le plus longtemps avant d’expirer ?",
      9: "Combien y'a t'il d'item dans le jeu ?",
      10: "Quel est le prix de ce jeu ?",
    },
    answers: {
      1: {
        1: "Riot game",
        2: "Hi-Rez Studios",
        3: "Ubisoft",
        4: "Valve",
      },
      2: {
        1: "Puzzle",
        2: "Jeu de carte",
        3: "Moba",
        4: "Survival Horror",
      },
      3: {
        1: "119",
        2: "100",
        3: "48",
        4: "99",
      },
      4: {
        1: "4 juin 2012",
        2: "27 octobre 2009",
        3: "9 juillet 2013",
        4: "30 janvier 2010",
      },
      5: {
        1: "2min",
        2: "4min",
        3: "6min",
        4: "10min",
      },
      6: {
        1: "800",
        2: "200",
        3: "400",
        4: "300",
      },
      7: {
        1: "20 000",
        2: "9 000",
        3: "7 000",
        4: "10 000",
      },
      8: {
        1: "Hawk (Beastmaster)",
        2: "Serpent Ward (Shadow Shaman)",
        3: "Lycan Wolf ",
        4: "Plague Ward (Venomancer) ",
      },
      9: {
        1: "145",
        2: "90",
        3: "154",
        4: "69",
      },
      10: {
        1: "5€",
        2: "20€",
        3: "12€",
        4: "gratuit",
      },
    },
    correctAnswers: {
      1: "4",
      2: "3",
      3: "1",
      4: "3",
      5: "2",
      6: "2",
      7: "4",
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
        <img src={dota2} alt="dota2" className="imgDota2" />
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
