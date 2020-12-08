import React from "react";
import ButtonEnvoyer from "./ButtonEnvoyer";
import "./SearchBarMenu.css";

class SearchBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "accueil" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value: event.preventDefault() });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="SearchForm">
        <form onSubmit={this.handleSubmit}>
          <div className="Choice">
            <div className="Title">Sélectionne le thème de ta recherche :</div>
            <div className="Options">
              <select value={value} onChange={this.handleChange}>
                <option value="accueil">Choix du thème</option>
                <option value="infoQuiz">Infos règles</option>
                <option value="infoTech">Infos techniques</option>
                <option value="infoConnexion">Infos connexion</option>
                <option value="infoInscription">Infos inscription</option>
                <option value="infoMentions">Infos mentions legales</option>
              </select>
            </div>
            <ButtonEnvoyer path="/Faq" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBarMenu;
