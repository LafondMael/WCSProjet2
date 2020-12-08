import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonPlay.css";

function handleClick() {
  alert("expert");
}
// eslint-disable-next-line react/prop-types
function ButtonPlay({ path }) {
  return (
    <div className="buttonplay">
      <button type="button" className="levelslow">
        -
      </button>
      <p className="levelscontainer">Débutant</p>
      <button type="button" className="levelshight" onClick={handleClick}>
        +
      </button>
      <Link to={path}>
        <button type="button" className="btn">
          Play
        </button>
      </Link>
    </div>
  );
}
ButtonPlay.propsTypes = {
  path: PropTypes.string.isRequired,
};

export default ButtonPlay;
