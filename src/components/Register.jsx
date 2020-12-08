import React, { useState } from "react";
import ButtonGame from "./ButtonGame";
import "./Register.css";

export default () => {
  const [FirstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pseudo, setPseudo] = useState("");
  const [Mdp, setMdp] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handlePseudoChange = (e) => setPseudo(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMdpChange = (e) => setMdp(e.target.value);

  return (
    <div className="RegisterForm">
      <h1 className="inscrit"> - S'inscrire - </h1>

      <h2>Rejoins notre communauté !</h2>

      <label htmlFor="FirstName">
        <div className="Name">Nom :</div>
        <input
          id="FirstName"
          type="text"
          value={FirstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />

      <label htmlFor="Pseudo">
        <div className="Pseudo">Pseudo :</div>
        <input
          id="Pseudo"
          type="text"
          value={Pseudo}
          onChange={handlePseudoChange}
        />
      </label>
      <br />

      <label htmlFor="Email">
        <div className="Email">Email :</div>
        <input
          id="Email"
          type="Email"
          value={Email}
          onChange={handleEmailChange}
        />
      </label>
      <br />
      <label htmlFor="Mdp">
        <div className="Mdp">Mot de passe :</div>
        <input id="Mdp" type="Mdp" value={Mdp} onChange={handleMdpChange} />
      </label>
      <ButtonGame jouer="/" />
    </div>
  );
};
