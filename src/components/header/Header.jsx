import React from "react";
import { NavLink } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";
import ButtonRegister from "./ButtonRegister";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="register">
        <div className="titre">
          <h1 className="title">Question pour un champignon</h1>
        </div>
        <NavLink to="/register">
          <ButtonRegister />
        </NavLink>
        <NavLink to="/login">
          <ButtonLogin />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
