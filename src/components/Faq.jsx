import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "_ FAQ _",
  rows: [
    {
      title: "Les règles du quiz",
      content: `Vous devez sélectionner une catégorie de quiz parmi quatre choix, puis choisir un thème parmi les six propositions. Chaque quiz est composé de dix questions avec une seule réponse possible parmi quatre choix. La réponse doit être validée dans le délai imparti à savoir 20 secondes. Une réponse hors délai ou l'absence de réponse est considérée comme fausse et la question suivante d'affiche. Le score réalisé est visible à la fin de quiz.`,
    },
    {
      title: "Je n'arrive pas à accéder aux quiz",
      content: `Vérifiez que vous avez sélectionné une catégorie puis un thème de quiz. Appuyer ensuite sur le bouton "Play" afin de lancer le jeu. Si nous ne parvenez pas toujours pas à vous identifier après cette étape, nous vous invitons à nous contacter en remplissant le formulaire de contact accessible depuis la rubrique "nous contacter". A noter que l'inscription et la connexion ne sont pas obligatoires pour accéder aux quiz `,
    },
    {
      title: "Je n'arrive pas à me connecter avec mes identifiants",
      content: `Vos identifiants sont activés immédiatement après votre inscription. Vérifiez que vous avez bien respecté le format attendu de vos identifiants et que vous utilisez les bons identifiants reçus dans notre courriel de confirmation de votre inscription. Si nous ne parvenez pas toujours pas à vous identifier après cette étape, nous vous invitons à nous contacter en remplissant le formulaire de contact accessible depuis la rubrique "nous contacter". `,
    },
    {
      title: "Je n'arrive pas à m'inscrire",
      content: `Vérifiez que vous avez bien respecté le format attendu de vos identifiants et que vous avez remplis l'ensemble des champs. Si nous ne parvenez pas toujours pas à vous inscrire après cette étape, nous vous invitons à nous contacter en remplissant le formulaire de contact accessible depuis la rubrique "nous contacter".A noter que l'inscription n'est pas obligatoire pour accéder aux quiz`,
    },
    {
      title: "Les mentions légales",
      content: `1. Présentation du site.<br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            2. Accès au site.<br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ],
};

const styles = {
  // bgColor: "white",
  titleTextColor: "black",
  titleFontWeight: "bold",
  rowTitleColor: "#555",
  rowTitleFontWeight: "bold",
  rowContentColor: "black",
  arrowColor: "red",
};

export default function FAQ() {
  return (
    <div>
      <Faq data={data} styles={styles} />
    </div>
  );
}
