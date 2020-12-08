import React from "react";
import ButtonPlay from "../../button/play/ButtonPlay";
import BattleChasers from "../../image/mobile/battleChasers.png";
import LegendsOfRuneterra from "../../image/mobile/legendsOfRunetorra.png";
import AmongUs from "../../image/mobile/unknown.png";
import ClashOfClans from "../../image/mobile/clashOfClans.png";
import GenshinImpact from "../../image/mobile/genshin_impact.png";
import BoomBeach from "../../image/mobile/boombeach.png";
import "./mobile.css";

function mobile() {
  return (
    <div className="themesMobile">
      <div className="BattleChasers">
        <img
          src={BattleChasers}
          alt="BattleChasers"
          className="imageBattleChasers"
        />
        <div className="bouttonThemes">
          <p className="texteThemes">Battle Chasers</p>
          <ButtonPlay path="/mobile/QuizBattleChasers" />
        </div>
      </div>
      <div className="legendsofRuneterra">
        <img
          src={LegendsOfRuneterra}
          alt="legendsofRuneterra"
          className="imagelegendsofRuneterra"
        />
        <div className="bouttonThemes">
          <p className="texteThemes">
            Legends of <br /> Runeterra{" "}
          </p>
          <ButtonPlay path="/mobile/QuizLegends" />
        </div>
      </div>
      <div className="AmongUs">
        <img src={AmongUs} alt="amongus" className="imageAmongUs" />
        <div className="bouttonThemes">
          <p className="texteThemes">Among Us</p>
          <ButtonPlay path="/mobile/QuizAmongUs" />
        </div>
      </div>
      <div className="ClashOfClans">
        <img
          src={ClashOfClans}
          alt="clashofclans"
          className="imageclashofclans"
        />
        <div className="bouttonThemes">
          <p className="texteThemes">Clash of clans</p>
          <ButtonPlay path="/mobile/QuizCoc" />
        </div>
      </div>
      <div className="GenshinImpact">
        <img
          src={GenshinImpact}
          alt="genshinimpact"
          className="imagegenshinimpact"
        />
        <div className="bouttonThemes">
          <p className="texteThemes">Genshin Impact</p>
          <ButtonPlay path="/mobile/QuizGenshin" />
        </div>
      </div>
      <div className="boombeach">
        <img src={BoomBeach} alt="boombeach" className="imageboombeach" />
        <div className="bouttonThemes">
          <p className="texteThemes">Boom Beach</p>
          <ButtonPlay path="/mobile/QuizBoomBeach" />
        </div>
      </div>
    </div>
  );
}

export default mobile;
