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
import NuevoCoche from "./Components/Configuracion/NuevoCoche/NuevoCoche";
<<<<<<< HEAD
import NuevaTarjeta from "./Components/Pago/NuevaTarjeta/NuevaTarjeta" 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LoginG from "./Components/GoogleLogin/GoogleLogin"

=======
import EditUser from "./Components/Configuracion/Usuario/EditUser";
>>>>>>> 0a5cc6f2a164bc12c956c9a636606cb09614faca
import Recarga2 from "./Components/Recarga/Recarga2/Recarga2";
import Recarga1 from "./Components/Recarga/Recarga1/Recarga1";
import Carga1 from "./Components/CargasRapidas/Carga1";
import Carga2 from "./Components/CargasRapidas/Carga2";
import Pago from "./Components/Pago/Pago";
import NuevaTarjeta from "./Components/Pago/NuevaTarjeta/NuevaTarjeta";
import Tusrecargas from "./Components/Tusrecargas/Tusrecargas";
import NuevaFactura from "./Components/Tusrecargas/NuevaFactura/NuevaFactura";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Route path="/editarUsuario">
              <EditUser />
            </Route>
            <Route path="/recarga2">
              <Recarga2 />
            </Route>
            <Route path="/recarga1">
              <Recarga1 />
            </Route>
            <Route path="/carga1">
              <Carga1 />
            </Route>
            <Route path="/carga2">
              <Carga2 />
            </Route>
            <Route path="/pago">
              <Pago />
            </Route>
            <Route path="/nuevaTarjeta">
              <NuevaTarjeta />
            </Route>
            <Route path="/tusrecargas">
              <Tusrecargas />
            </Route>
            <Route path="/nuevafactura">
              <NuevaFactura />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
