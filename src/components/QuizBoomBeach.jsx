/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import BoomBeach from "./image/mobile/boombeach.png";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizBoomBeach extends Component {
  state = {
    questions: {
      1: "Lequel de ces personnages n’est pas un héros ?",
      2: "Qui fournit des tirs d’appui et des ressources aux troupes lors des attaques ?",
      3: "Quel bâtiment permet l’assemblage et le déploiement des prototypes ?",
      4: "Quel personnage arrive le vendredi soir et est présente durant le week-end ?",
      5: "Quel Bâtiment n’existe pas dans le jeu?",
      6: "Combien de types de mines sont disponibles dans le jeu ?",
      7: "Quel super évènement dans un crustacé destructeur a lieu ponctuellement ?",
      8: "Quel est notre ennemi dans ce jeu ?",
      9: "Quelle ressource n’existe pas dans le jeu?",
      10: "Quel est le QG de niveau maximum dans le jeu ?",
    },
    answers: {
      1: {
        1: "Soldat Bullit",
        2: "Dr Kavan",
        3: "Sergent Brick",
        4: "Dr T",
      },
      2: {
        1: "Le labo d’armes",
        2: "La canonnière",
        3: "La hutte des héros",
        4: "La barge de débarquement",
      },
      3: {
        1: "Le labo d’armes",
        2: "Le quartier général",
        3: "Le radar",
        4: "le sous-marin",
      },
      4: {
        1: "La négociatrice",
        2: "La négociante",
        3: "Colonel Gearheart",
        4: "Lieutenant Hammerman",
      },
      5: {
        1: "La voûte",
        2: "La mine de fer",
        3: "La scierie",
        4: "La carrière",
      },
      6: {
        1: "2",
        2: "5",
        3: "4",
        4: "3",
      },
      7: {
        1: "La super crevette",
        2: "L’hyper écrevisse",
        3: "Le méga crabe",
        4: "Le maxi homard",
      },
      8: {
        1: "Le royaume",
        2: "L’empire",
        3: "La garde noire",
        4: "La colonie",
      },
      9: {
        1: "L’or",
        2: "Les gemmes",
        3: "Les diamants",
        4: "La pierre",
      },
      10: {
        1: "24",
        2: "21",
        3: "18",
        4: "22",
      },
    },
    correctAnswers: {
      1: "4",
      2: "2",
      3: "1",
      4: "2",
      5: "1",
      6: "4",
      7: "3",
      8: "3",
      9: "2",
      10: "1",
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
        <img src={BoomBeach} alt="boombeach" className="imgboombeach" />
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
