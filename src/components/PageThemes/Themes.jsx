import React from "react";
import PropTypes from "prop-types";

function Themes({ name }) {
  return (
    <div className="themes">
      <h1 className="nameTheme">{name}</h1>
    </div>
  );
}

// state = {
//     hover: false
// }
// toggleHover = () => {
//     this.setState({ hover: !this.state.hover })
// }
Themes.propTypes = { name: PropTypes.string.isRequired };

export default Themes;
