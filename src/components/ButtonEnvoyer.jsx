import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonEnvoyer.css";

function ButtonMenu({ path }) {
  return (
    <div className="menu">
      <Link to={path}>
        <button className="bun" type="button">
          Envoyer
        </button>
      </Link>
    </div>
  );
}
ButtonMenu.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ButtonMenu;
