/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import SuperSmash from "./image/nintendo/SuperSmashBrosUltimate.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizSmash extends Component {
  state = {
    questions: {
      1: "Combien de jeu Smash Bros existe t'il ?",
      2: "Combien y a t'il de personnages dans le premier jeu ?",
      3: "Combien y a t'il de personnages dans Ultimate (avec DLC et hors écho) ?",
      4: "Quel est le nom de l'ennemi pricipal dans Smash (hormis les autres joueurs)",
      5: "Quel jeu est préféré pour son système de combat ?",
      6: "Quand est sorti Ultimate ?",
      7: "Quelle est la particularitée d'Ultimate ?",
      8: "Quelle est la caractéristique pricipale de Brawl ?",
      9: "D'où proviennent les personnages originalement ?",
      10: "Quel est le pitch original de Smash64 ?",
    },
    answers: {
      1: {
        1: "4",
        2: "5",
        3: "6",
        4: "7",
      },
      2: {
        1: "10",
        2: "11",
        3: "12",
        4: "13",
      },
      3: {
        1: "77",
        2: "78",
        3: "79",
        4: "80",
      },
      4: {
        1: "Bowser",
        2: "Créa Main",
        3: "Dé Maniaque",
        4: "Sac de Sable",
      },
      5: {
        1: "Smash 64",
        2: "Smash Melee",
        3: "Smash Brawl",
        4: "Smash 4",
      },
      6: {
        1: "7 Décembre 2018",
        2: "21 Novembre 2018",
        3: "3 Décembre 2018",
        4: "28 Novembre 2018",
      },
      7: {
        1: "C'est le dernier Opus de la série",
        2: "Son mode aventure cloture l'histoire",
        3: "Tout les personnages des opus précédents sont présents.",
        4: "C'est le dernier jeu de Masahiro Sakurai",
      },
      8: {
        1: "Ses graphismes",
        2: "Son Multijoueur",
        3: "Ses contrôles",
        4: "Son mode Histoire",
      },
      9: {
        1: "De jeux d'arcades connus",
        2: "De L'univers Nintendo",
        3: "D'autres Jeux",
        4: "De nulle part",
      },
      10: {
        1: "Aucun, battons-nous",
        2: "Tout les personnages s'unnissent pour sauver le monde",
        3: "Les Antagonistes s'unnissent pour contrôler tout les mondes",
        4: "Un enfant joue avec ses figurines Nintendo",
      },
    },
    correctAnswers: {
      1: "2",
      2: "3",
      3: "1",
      4: "2",
      5: "2",
      6: "1",
      7: "3",
      8: "4",
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
        <img src={SuperSmash} alt="SuperSmash" className="imgSuperSmash" />
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
