/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Question from "./Question/question";
import Answer from "./Answer/answer";
import Pokemon from "./image/nintendo/pokemon.jpg";
import ButtonMenu from "./button/menu/ButtonMenu";
import "./QuizMain.css";

export default class QuizPokemon extends Component {
  state = {
    questions: {
      1: "Combien de générations de Pokémon existe t'il ?",
      2: "Combien de forme Evoli possède t'il ?",
      3: "Combien de légendaires et fabuleux existe t'il ?",
      4: "Combien de Pokémons existe t'il ?",
      5: "Quand est sorti la première génération de jeux Pokémons en Europe ?",
      6: "Quelle Ball permet de capturer n'importe quel Pokémon ?",
      7: "Quel est la mascote de Pokémon ?",
      8: "Quelle Région est inspirée de la France ?",
      9: "Quelle est le Région de la dernière génération en date ?",
      10: "Combien de jeux Pokémon 'principaux' existe t'il ?",
    },
    answers: {
      1: {
        1: "6",
        2: "7",
        3: "8",
        4: "9",
      },
      2: {
        1: "6",
        2: "7",
        3: "8",
        4: "9",
      },
      3: {
        1: "84",
        2: "85",
        3: "86",
        4: "87",
      },
      4: {
        1: "800",
        2: "850",
        3: "900",
        4: "950",
      },
      5: {
        1: "30 Novembre 1998",
        2: "23 Octobre 1998",
        3: "8 Novembre 1999",
        4: "5 Octobre 1999",
      },
      6: {
        1: "Master Ball",
        2: "Chrono Ball",
        3: "Luxe Ball",
        4: "Ultra Ball",
      },
      7: {
        1: "Mew",
        2: "Pikachu",
        3: "Arceus",
        4: "MewTwo",
      },
      8: {
        1: "Kalos",
        2: "Unys",
        3: "Alola",
        4: "Galar",
      },
      9: {
        1: "Kalos",
        2: "Unys",
        3: "Alola",
        4: "Galar",
      },
      10: {
        1: "30",
        2: "31",
        3: "32",
        4: "33",
      },
    },
    correctAnswers: {
      1: "3",
      2: "4",
      3: "1",
      4: "3",
      5: "4",
      6: "1",
      7: "2",
      8: "1",
      9: "4",
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
        <img src={Pokemon} alt="pokemon" className="imgPokemon" />
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
