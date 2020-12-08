/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import AmongUs from "./image/mobile/unknown.png";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizAmongUs extends Component {
  state = {
    questions: {
      1: "Quelle monnaie n'est pas présente dans le jeu ?",
      2: "Qui est le premier world boss du jeu à la fin de la quête de Mondstadt ?",
      3: "Quel est le personnage le plus puissant actuellement ?",
      4: "A quel niveau débloque-t'on le mode multijoueurs ?",
      5: "Quel élément utilise la puissance du vent ?",
      6: "Quel est l'éditeur du jeu ?",
      7: "Quel est l'arme de Beidou ?",
      8: "Quel personage ne fait pas partie du jeu ?",
      9: "Lequel de ces personnages n'est pas gratuit ?",
      10: "Laquelle de ces régions n'est pas présente dans le jeu ?",
    },
    answers: {
      1: {
        1: "Mora",
        2: "Primo-gemme",
        3: "Cristal primaire",
        4: "Diamant",
      },
      2: {
        1: "Stormterror",
        2: "L'Hypostase Anémo",
        3: "Andrius,le loup géant de Mondstadt",
        4: "Le Stonehide Lawachurl",
      },
      3: {
        1: "Razor",
        2: "Diluc",
        3: "Venti",
        4: "Tartaglia",
      },
      4: {
        1: "12",
        2: "14",
        3: "16",
        4: "18",
      },
      5: {
        1: "Dendro",
        2: "Anemo",
        3: "Electro",
        4: "Cryo",
      },
      6: {
        1: "MiHoYo",
        2: "EA",
        3: "Ubisoft",
        4: "Wizard",
      },
      7: {
        1: "L'arc",
        2: "L'épée",
        3: "Le catalyseur",
        4: "La claymore",
      },
      8: {
        1: "Fischl",
        2: "Diona",
        3: "Luna",
        4: "Barbara",
      },
      9: {
        1: "Razor",
        2: "Amber",
        3: "Xiangling",
        4: "Kaeya",
      },
      10: {
        1: "Fontaine",
        2: "Jouvence",
        3: "Liyue",
        4: "Inazuma",
      },
    },
    correctAnswers: {
      1: "4",
      2: "1",
      3: "2",
      4: "3",
      5: "2",
      6: "1",
      7: "4",
      8: "3",
      9: "1",
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
        <img src={AmongUs} alt="amongus" className="imgAmongUs" />
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
