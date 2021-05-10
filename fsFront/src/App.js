import "./App.css";
import React, { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Signin from "./components/Signin/Signin";
import General from "./components/General/General";
import Intro from "./components/Intro/Intro";
import RegistroP2 from "./components/RegistroP2/RegistroP2";
import RegistroP3 from "./components/RegistroP3/RegistroP3";
import Condiciones from "./components/Condiciones/Condiciones";
import Tarjeta from "./components/Tarjeta/Tarjeta";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState("");

  const toggleMenu = () => setMenu(!menu);

  const logout = async () => {
    await sessionStorage.setItem("token", "");
    await setToken(sessionStorage.getItem("token"));
  };

  const signin = (token) => {
    sessionStorage.setItem("token", token);
    setToken(token);
  };

  const dataContext = {
    menu,
    toggleMenu,
    logout,
    token,
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          {token !== "" ? (
            <AuthContext.Provider value={dataContext}>
              <Route path="/home" component={General} />
            </AuthContext.Provider>
          ) : (
            <Route exact path="/">
              <Signin signin={signin} />
            </Route>
          )}
          <Route path="/signup" component={Intro} />
          <Route path="/registroP2" component={RegistroP2} />
          <Route path="/registroP3" component={RegistroP3} />
          <Route path="/condiciones" component={Condiciones} />
          <Route path="/tarjeta" component={Tarjeta} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
