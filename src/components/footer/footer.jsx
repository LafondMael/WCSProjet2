import React from "react";
import { NavLink } from "react-router-dom";
import ButtonContact from "./ButtonContact";
import AboutUs from "./AboutUs";
import SocialFollow from "./SocialFollow";
import "./ButtonContact.css";

function Footer() {
  return (
    <div>
      <div className="nouscontacter">
        <AboutUs />
        <NavLink to="/contact">
          <ButtonContact />
        </NavLink>
        <SocialFollow />
      </div>
    </div>
  );
}

export default Footer;
