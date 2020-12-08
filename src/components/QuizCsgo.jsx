/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import CsGo from "./image/cs-go2.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizCsGo extends Component {
  state = {
    questions: {
      1: "Quel est le plus haut grade du jeu ?",
      2: "Quelle est la map la plus jouer en compétition ?",
      3: "Quelle est la date de sorti de CSGO ?",
      4: "CSGO existe sur ?",
      5: "En quel année a été le plus gros tournois ?",
      6: "Avec combien d'argent commence t-on une partie ?",
      7: "Quelle est l'arme la plus chère du jeu ?",
      8: "Qui sont les developpeurs du jeu ?",
      9: "Combien y a t-il d'équipe en match compétitif ?",
      10: "Combien de manche faut-il pour gagner une game ?",
    },
    answers: {
      1: {
        1: "Diamant",
        2: "Nova",
        3: "Sheriff",
        4: "Global Elite",
      },
      2: {
        1: "Inferno",
        2: "Dust 2",
        3: "Aztec",
        4: "Cache",
      },
      3: {
        1: "19 Juillet 2011",
        2: "18 Avril 2010",
        3: "21 Aout 2012",
        4: "4 Décembre 2013",
      },
      4: {
        1: "PC",
        2: "Nintendo swicht",
        3: "Mobile",
        4: "Console",
      },
      5: {
        1: "2013",
        2: "2015",
        3: "2016",
        4: "2014",
      },
      6: {
        1: "500$",
        2: "800$",
        3: "650$",
        4: "850$",
      },
      7: {
        1: "AWP",
        2: "AKM",
        3: "NEGEV",
        4: "AUG",
      },
      8: {
        1: "Ubisoft",
        2: "Gaben",
        3: "Razor",
        4: "Valve",
      },
      9: {
        1: "3",
        2: "1",
        3: "2",
        4: "4",
      },
      10: {
        1: "12",
        2: "10",
        3: "16",
        4: "14",
      },
    },
    correctAnswers: {
      1: "4",
      2: "2",
      3: "3",
      4: "1",
      5: "2",
      6: "2",
      7: "1",
      8: "4",
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
        <img src={CsGo} alt="cs-go" className="imgCsGo" />
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
