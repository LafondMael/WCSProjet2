import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonMenu.css";

function ButtonMenu({ chemin }) {
  return (
    <div className="menu">
      <Link to={chemin}>
        <button className="bun" type="button">
          Menu
        </button>
      </Link>
    </div>
  );
}
ButtonMenu.propTypes = {
  chemin: PropTypes.string.isRequired,
};

export default ButtonMenu;
