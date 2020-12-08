import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/header/Header";
import Fps from "./components/Themes/FPS/Fps";
import QuizPubg from "./components/QuizPubg";
import QuizValorant from "./components/QuizValorant";
import QuizCod from "./components/QuizCod";
import QuizFornite from "./components/QuizFornite";
import QuizOverwatch from "./components/QuizOverwatch";
import QuizCsgo from "./components/QuizCsgo";
import Mobile from "./components/Themes/mobile/mobile";
import QuizCoc from "./components/QuizCoc";
import QuizGenshin from "./components/QuizGenshin";
import QuizBattleChasers from "./components/QuizBattleChasers";
import QuizAmongUs from "./components/QuizAmongUs";
import QuizBoomBeach from "./components/QuizBoomBeach";
import QuizLegends from "./components/QuizLegends";
import Nintendo from "./components/Themes/nintendo/nintendo";
import QuizZelda from "./components/QuizZelda";
import QuizSmash from "./components/QuizSmash";
import QuizPokemon from "./components/QuizPokemon";
import QuizMario from "./components/QuizMario";
import QuizMetroid from "./components/QuizMetroid";
import QuizFireEmblem from "./components/QuizFireEmblem";
import Moba from "./components/Themes/moba/moba";
import QuizLol from "./components/QuizLol";
import QuizDota2 from "./components/QuizDota2";
import Register from "./components/Register";
import LoginForm from "./components/LoginForm";
import Footer from "./components/footer/footer";
import ContactUs from "./components/footer/ContactUs";
import SearchBarMenu from "./components/SearchBarMenu";
import Faq from "./components/Faq";
import "./components/button/play/ButtonPlay.css";
import "./components/footer/AboutUs.css";
import "./App.css";
import "./components/SearchBarMenu.css";

function App() {
  return (
    <div className="App">
      <SearchBarMenu />
      <Header />
      <Switch>
        <Route exact path="/" component={NavBar} />
        <Route exact path="/Faq" component={Faq} />
        <Route exact path="/Fps" component={Fps} />
        <Route exact path="/Fps/QuizPubg" component={QuizPubg} />
        <Route exact path="/Fps/QuizValorant" component={QuizValorant} />
        <Route exact path="/Fps/QuizFornite" component={QuizFornite} />
        <Route exact path="/Fps/QuizCsgo" component={QuizCsgo} />
        <Route exact path="/Fps/QuizOverwatch" component={QuizOverwatch} />
        <Route exact path="/Fps/QuizCod" component={QuizCod} />
        <Route exact path="/moba" component={Moba} />
        <Route exact path="/moba/QuizLol" component={QuizLol} />
        <Route exact path="/moba/QuizDota2" component={QuizDota2} />
        <Route exact path="/mobile" component={Mobile} />
        <Route exact path="/mobile/QuizCoc" component={QuizCoc} />
        <Route exact path="/mobile/QuizGenshin" component={QuizGenshin} />
        <Route
          exact
          path="/mobile/QuizBattleChasers"
          component={QuizBattleChasers}
        />
        <Route exact path="/mobile/QuizAmongUs" component={QuizAmongUs} />
        <Route exact path="/mobile/QuizBoomBeach" component={QuizBoomBeach} />
        <Route exact path="/mobile/QuizLegends" component={QuizLegends} />
        <Route exact path="/nintendo" component={Nintendo} />
        <Route exact path="/nintendo/QuizZelda" component={QuizZelda} />
        <Route exact path="/nintendo/QuizSmash" component={QuizSmash} />
        <Route exact path="/nintendo/QuizPokemon" component={QuizPokemon} />
        <Route exact path="/nintendo/QuizMario" component={QuizMario} />
        <Route exact path="/nintendo/QuizMetroid" component={QuizMetroid} />
        <Route
          exact
          path="/nintendo/QuizFireEmblem"
          component={QuizFireEmblem}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/contact" component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
