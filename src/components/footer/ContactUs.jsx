import React, { useState } from "react";
import "../LoginForm.css";
import "./ContactUs.css";

export default () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  function clickMe() {
    alert("Merci pour ton message ! Notre team te répond très vite :)");
  }

  return (
    <div className="ContactForm">
      <h1 className="newcontact"> - Nous contacter - </h1>

      <h2> Questions, commentaires ou suggestions ?</h2>

      <label htmlFor="fullName">
        <div className="Name">Nom :</div>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </label>
      <br />
      <label htmlFor="email">
        <div className="Email">Email :</div>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <br />
      <label htmlFor="message">
        <div className="Message">Message :</div>
        <input
          id="message"
          type="message"
          value={message}
          onChange={handleMessageChange}
        />
      </label>
      <button type="button" className="btnContact" onClick={clickMe}>
        Envoyer
      </button>
    </div>
  );
};
