import React from "react";
import ButtonPlay from "../../button/play/ButtonPlay";
import valorant from "../../image/valorant2.jpg";
import overwatch from "../../image/overwatch4.jpg";
import pubg from "../../image/pubg2.jpg";
import fortnite from "../../image/fortnite4.jpg";
import csGo from "../../image/cs-go2.jpg";
import Cod from "../../image/cod1.jpg";
import "./Fps.css";

function Fps() {
  return (
    <div className="themesFPS">
      <div className="valorant">
        <img src={valorant} alt="valorant" className="imageValo" />
        <div className="bouttonThemes">
          <p className="texteThemes">valorant</p>
          <ButtonPlay path="/Fps/QuizValorant" />
        </div>
      </div>
      <div className="overwatch">
        <img src={overwatch} alt="overwatch" className="imageOverwatch" />
        <div className="bouttonThemes">
          <p className="texteThemes">overwatch</p>
          <ButtonPlay path="/Fps/QuizOverwatch" />
        </div>
      </div>
      <div className="csGo">
        <img src={csGo} alt="cs-go" className="imageCsGo" />
        <div className="bouttonThemes">
          <p className="texteThemes">cs-go</p>
          <ButtonPlay path="/Fps/QuizCsgo" />
        </div>
      </div>
      <div className="fortnite">
        <img src={fortnite} alt="fortnite" className="imagefortnite" />
        <div className="bouttonThemes">
          <p className="texteThemes">fortnite</p>
          <ButtonPlay path="/Fps/QuizFornite" />
        </div>
      </div>
      <div className="COD">
        <img src={Cod} alt="COD" className="imageCOD" />
        <div className="bouttonThemes">
          <p className="texteThemes">call of duty</p>
          <ButtonPlay path="/Fps/QuizCod" />
        </div>
      </div>
      <div className="pubg">
        <img src={pubg} alt="pubg" className="imagepubg" />
        <div className="bouttonThemes">
          <p className="texteThemes">pubg</p>
          <ButtonPlay path="/Fps/QuizPubg" />
        </div>
      </div>
    </div>
  );
}

export default Fps;
