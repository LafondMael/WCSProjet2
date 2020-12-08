/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import Cod from "./image/cod1.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizCOD extends Component {
  state = {
    questions: {
      1: "Quel COD est sorti en 2011 ?",
      2: "Quel COD ne fut pas réalisé par Treyarch ?",
      3: "Quel joueur français est surnommé le 'French Monster'?",
      4: "Lequel de ces COD fût le moins vendu ?",
      5: "Dans quel COD le mode emblématique zombie est-il apparu ?",
      6: "Quel est le principal rival de COD ?",
      7: "Combien y a t-il eu de COD de la saga Modern Warfare ?",
      8: "Quel COD a fournis le plus de vente ?",
      9: "Laquelle de ces guerres raconte COD Black Ops?",
      10: "Que signifie M.O.A.B ?",
    },
    answers: {
      1: {
        1: "Black ops",
        2: "Modern Warfare 3",
        3: "World War 2",
        4: "Call of duty 2",
      },
      2: {
        1: "World War",
        2: "Black Ops 3",
        3: "Ghost",
        4: "Black ops 2",
      },
      3: {
        1: "Warmory",
        2: "Broken",
        3: "Gotaga",
        4: "Overdose",
      },
      4: {
        1: "Black ops",
        2: "Advanced Warfare",
        3: "Ghost",
        4: "Modern Warfare",
      },
      5: {
        1: "World at War",
        2: "Modern Warfare 3",
        3: "Black ops",
        4: "Black ops 2",
      },
      6: {
        1: "GTA",
        2: "Fornite",
        3: "Battlefield",
        4: "Cooking mama",
      },
      7: {
        1: "2",
        2: "4",
        3: "1",
        4: "3",
      },
      8: {
        1: "Modern Warfare 2",
        2: "Black ops",
        3: "Modern Warfare 3",
        4: "Advanced Warfare",
      },
      9: {
        1: "La guerre du congo",
        2: "La 1er guerre mondiale",
        3: "La guerre froide et du vietnam",
        4: "La 2ème guerre mondiale",
      },
      10: {
        1: "Mamie of alice bottle",
        2: "Massive ordnance air bomb",
        3: "Mother of all bombs",
        4: "Maman of air bitch",
      },
    },
    correctAnswers: {
      1: "2",
      2: "3",
      3: "3",
      4: "3",
      5: "1",
      6: "3",
      7: "4",
      8: "2",
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
        <img src={Cod} alt="COD" className="imgCOD" />
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
