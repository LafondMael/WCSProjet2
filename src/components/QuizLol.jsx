/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import LoL from "./image/moba/LoL.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizLol extends Component {
  state = {
    questions: {
      1: "Quand est sorti le jeu initialement ?",
      2: "Quel etait le nom initial du jeu ??",
      3: "Qui a édite ce jeu ? ?",
      4: "Combien de champions y a t'il dans League of Legend ?",
      5: "Quel skin coûte le plus cher?",
      6: "Comment s'appelle le meilleur joueur de League of Legend  ?",
      7: "Quelle équipe à gagner le plus de fois des worlds?",
      8: "Comment s'appelle la mascote qui a donné son nom à un mode de jeu?",
      9: "Combien y'a t'il de region dans l'univers de league of legend ?",
      10: "Combien y'a t'il d'item dans le jeu  ?",
    },
    answers: {
      1: {
        1: "14 juillet 2008",
        2: "27 octobre 2009",
        3: "26 octobre 2009",
        4: "25 decembre 2010",
      },
      2: {
        1: "League of heroes",
        2: "League of Legends: Clash of Fates",
        3: "League of legends: summoners rift",
        4: "Pull of legend",
      },
      3: {
        1: "Ubisoft",
        2: "Riot Games",
        3: "Sony",
        4: "Mcdo",
      },
      4: {
        1: "200",
        2: "487",
        3: "153",
        4: "148",
      },
      5: {
        1: "Mecha Aatrox",
        2: "Alistar noir",
        3: "Lee Sin Poing du Dragon",
        4: "Diana Déesse Lunaire",
      },
      6: {
        1: "Rekkles",
        2: "Faker",
        3: "Perkz",
        4: "Uzi",
      },
      7: {
        1: "Fnatic",
        2: "SK Telecom T1",
        3: "G2 Esports",
        4: "Misfits Gaming",
      },
      8: {
        1: "Warwick ",
        2: "Urf le lamentin",
        3: "Teemo",
        4: "Zed",
      },
      9: {
        1: "10",
        2: "20",
        3: "13",
        4: "6",
      },
      10: {
        1: "214",
        2: "840",
        3: "423",
        4: "360",
      },
    },
    correctAnswers: {
      1: "2",
      2: "2",
      3: "2",
      4: "3",
      5: "2",
      6: "2",
      7: "2",
      8: "3",
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
        <img src={LoL} alt="LoL" className="imgLoL" />
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
