import React from "react";
import { NavLink } from "react-router-dom";
import FPS from "./image/Fps.jpeg";
import Mobile from "./image/mobile/mobilecategorie.png";
import Moba from "./image/moba/Moba.png";
import Nintendo from "./image/nintendo/Nintendo.jpg";
import Logo from "./image/TOAD.png";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      {/* <img className="Logo" src={Logo} alt="Logo" /> */}
      <div className="ensemble">
        <NavLink className="fps" activeClassName="active" to="/Fps">
          <img className="imageFps" src={FPS} alt="Fps" />{" "}
          <p className="titre1">Jeux Fps</p>
        </NavLink>
        <NavLink className="mobile" activeClassName="active" to="/Mobile">
          <img className="imageMobile" src={Mobile} alt="Mobile" />{" "}
          <p className="titre2">Jeux Mobile</p>
        </NavLink>
        <img className="Logo" src={Logo} alt="Logo" />
        <NavLink className="moba" activeClassName="active" to="/Moba">
          <img className="imageMoba" src={Moba} alt="Moba" />{" "}
          <p className="titre3">Jeux Moba</p>
        </NavLink>
        <NavLink className="nintendo" activeClassName="active" to="/Nintendo">
          <img className="imageNintendo" src={Nintendo} alt="Nintendo" />{" "}
          <p className="titre4">Jeux Nintendo</p>
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
