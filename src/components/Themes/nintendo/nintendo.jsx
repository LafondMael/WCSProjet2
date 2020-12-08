import React from "react";
import ButtonPlay from "../../button/play/ButtonPlay";
import FireEmblem from "../../image/nintendo/FireEmblem.jpg";
import Pokemon from "../../image/nintendo/pokemon.jpg";
import Metroid from "../../image/nintendo/Metroid.jpg";
import SuperSmash from "../../image/nintendo/SuperSmashBrosUltimate.jpg";
import Zelda from "../../image/nintendo/Zelda.jpg";
import SuperMario from "../../image/nintendo/Super-Mario.jpg";
import "./nintendo.css";

function Nintendo() {
  return (
    <div className="themesNintendo">
      <div className="fireEmblem">
        <img src={FireEmblem} alt="fireemblem" className="imageFire" />
        <div className="bouttonThemes">
          <p className="texteThemes">FireEmblem</p>
          <ButtonPlay path="/nintendo/QuizFireEmblem" />
        </div>
      </div>
      <div className="pokemon">
        <img src={Pokemon} alt="pokemon" className="imagePokemon" />
        <div className="bouttonThemes">
          <p className="texteThemes">Pokemon</p>
          <ButtonPlay path="/nintendo/QuizPokemon" />
        </div>
      </div>
      <div className="metroid">
        <img src={Metroid} alt="metroid" className="imageMetroid" />
        <div className="bouttonThemes">
          <p className="texteThemes">Metroid</p>
          <ButtonPlay path="/nintendo/QuizMetroid" />
        </div>
      </div>
      <div className="SuperSmash">
        <img src={SuperSmash} alt="SuperSmash" className="imageSuperSmash" />
        <div className="bouttonThemes">
          <p className="texteThemes">Super Smash</p>
          <ButtonPlay path="/nintendo/QuizSmash" />
        </div>
      </div>
      <div className="zelda">
        <img src={Zelda} alt="Zelda" className="imageZelda" />
        <div className="bouttonThemes">
          <p className="texteThemes">Zelda</p>
          <ButtonPlay path="/nintendo/QuizZelda" />
        </div>
      </div>
      <div className="supermario">
        <img src={SuperMario} alt="supermario" className="imageSuperMario" />
        <div className="bouttonThemes">
          <p className="texteThemes">Super Mario</p>
          <ButtonPlay path="/nintendo/QuizMario" />
        </div>
      </div>
    </div>
  );
}

export default Nintendo;
