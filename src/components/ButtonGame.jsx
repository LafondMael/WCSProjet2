import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonGame.css";

function ButtonGame({ jouer }) {
  return (
    <div className="jouer">
      <Link to={jouer}>
        <button className="bun" type="button">
          Jouer
        </button>
      </Link>
    </div>
  );
}
ButtonGame.propTypes = {
  jouer: PropTypes.string.isRequired,
};

export default ButtonGame;
