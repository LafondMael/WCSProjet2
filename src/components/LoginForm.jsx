import React from "react";
import ButtonGame from "./ButtonGame";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      motdepasse: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.pseudo]: event.target.value });
  };

  render() {
    const { pseudo, motdepasse } = this.state;
    const { handleChange } = this;
    return (
      <div className="LoginForm">
        <h1>
          - Prêt à jouer - {pseudo} {motdepasse}
        </h1>
        <h2>
          Plus qu'une étape !{pseudo} {motdepasse}
        </h2>
        <p>Pseudo :</p>
        <input type="text" name="pseudo" onChange={handleChange} />
        <p>Mot de passe :</p>
        <input type="text" name="mot de passe" onChange={handleChange} />

        <ButtonGame jouer="/" />
      </div>
    );
  }
}

export default LoginForm;
