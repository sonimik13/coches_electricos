import "./App.css";
import React, { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Signin from "./Components/Signin/Signin";
import General from "./Components/General/General";
import Intro from "./Components/Intro/Intro";
import RegistroP2 from "./Components/RegistroP2/RegistroP2";
import RegistroP3 from "./Components/RegistroP3/RegistroP3";
import Tarjeta from "./Components/Tarjeta/Tarjeta";
import Configuracion from "./Components/Configuracion/Configuracion";
import Pago from "./Components/Pago/Pago";
import NuevoCoche from "./Components/Configuracion/NuevoCoche/NuevoCoche";
import NuevaTarjeta from "./Components/Pago/NuevaTarjeta/NuevaTarjeta" 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LoginG from "./Components/GoogleLogin/GoogleLogin"

import Recarga2 from "./Components/Recarga/Recarga2/Recarga2";
import Recarga1 from "./Components/Recarga/Recarga1/Recarga1";

function App() {
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleApellido = (event) => {
    setApellido(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const funcionesSignup = {
    handleNombre,
    handleApellido,
    handleEmail,
    handlePass,
  };

  const toggleMenu = () => setMenu(!menu);

  const logout = async () => {
    await sessionStorage.setItem("token", "");
    setToken("");
    setNombre("");
    setApellido("");
    setEmail("");
    setPass("");
  };

  const signin = async (token) => {
    await sessionStorage.setItem("token", token);
    await setToken(token);
  };

  const fetch = {
    nombre,
    apellido,
    email,
    pass,
    signin,
  };

  const dataContext = {
    menu,
    toggleMenu,
    logout,
    token,
  };

  return (
    <AuthContext.Provider value={dataContext}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" component={General} />
            <Route exact path="/">
              <Signin signin={signin} />
            </Route>
            <Route path="/signup" component={Intro} />
            <Route path="/registroP2">
              <RegistroP2 data={funcionesSignup} />
            </Route>
            <Route path="/registroP3">
              <RegistroP3 data={fetch} />
            </Route>
            <Route path="/tarjeta">
              <Tarjeta token={token} />
            </Route>
            <Route path="/configuracion">
              <Configuracion />
            </Route>
            <Route path="/pago">
              <Pago />
            </Route>
            <Route path="/nuevoCoche">
              <NuevoCoche />
            </Route>
            <Route path="/nuevaTarjeta">
              <NuevaTarjeta />
            </Route>
            <Route path="/recarga2">
              <Recarga2 />
            </Route>
            <Route path="/recarga1">
              <Recarga1 />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
