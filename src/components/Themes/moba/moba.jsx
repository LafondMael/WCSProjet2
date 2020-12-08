import React from "react";
import ButtonPlay from "../../button/play/ButtonPlay";
import ArenaOfValor from "../../image/moba/ArenaOfValor.jpg";
import dota2 from "../../image/moba/dota2.jpg";
import HeroesOfTheStorm from "../../image/moba/HeroesOfTheStorm.jpg";
import LoL from "../../image/moba/LoL.jpg";
import paladins from "../../image/moba/paladins.jpg";
import smite from "../../image/moba/smite.jpg";
import "./moba.css";

function Moba() {
  return (
    <div className="themesMoba">
      <div className="ArenaOfValor">
        <img
          src={ArenaOfValor}
          alt="fireemblem"
          className="imageArenaOfValor"
        />
        <div className="bouttonThemes">
          <p className="texteThemes">ArenaOfValor</p>
          <ButtonPlay path="/moba/QuizArena" />
        </div>
      </div>
      <div className="dota2">
        <img src={dota2} alt="dota2" className="imageDota2" />
        <div className="bouttonThemes">
          <p className="texteThemes">dota2</p>
          <ButtonPlay path="/moba/QuizDota2" />
        </div>
      </div>
      <div className="HeroesOfTheStorm">
        <img
          src={HeroesOfTheStorm}
          alt="HeroesOfTheStorm"
          className="imageHeroesOfTheStorm"
        />
        <div className="bouttonThemes">
          <p className="texteThemes">HeroesOfTheStorm</p>
          <ButtonPlay path="/moba/QuizHeroes" />
        </div>
      </div>
      <div className="LoL">
        <img src={LoL} alt="LoL" className="imageLoL" />
        <div className="bouttonThemes">
          <p className="texteThemes">League of Legends</p>
          <ButtonPlay path="/moba/QuizLol" />
        </div>
      </div>
      <div className="paladins">
        <img src={paladins} alt="paladins" className="imagePaladins" />
        <div className="bouttonThemes">
          <p className="texteThemes">paladins</p>
          <ButtonPlay path="/moba/QuizPaladins" />
        </div>
      </div>
      <div className="smite">
        <img src={smite} alt="smite" className="imageSmite" />
        <div className="bouttonThemes">
          <p className="texteThemes">Smite</p>
          <ButtonPlay path="/moba/QuizSmite" />
        </div>
      </div>
    </div>
  );
}

export default Moba;
