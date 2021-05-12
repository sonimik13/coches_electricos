import React from "react";
import "./Intro.css";
import logo from "../../Assets/Logotipo.svg";
import atras from "../../Assets/atras.svg";
import { Link } from "react-router-dom";
// import { GoogleLogin } from "react-google-login"
import HooksLoginG from "../GoogleLogin/GoogleLogin"

function Intro() {
  return (
    <div className="todo-intro">
      <Link to="/">
        <img src={atras} alt="atras" id="img-atras" />
      </Link>
      <div className="main-singup">
        <div className="logo">
          <img src={logo} alt="logo-app" id="logo-signup" />
        </div>
        <div className="botones-signup">
          <button>
            <Link to="/registroP2">REGISTRARSE</Link>
          </button>
          <div className="text-redessoci">
            <h3>o conéctate a través de las redes sociales</h3>
          </div>
          <div className="botones-redessoci">
            <button className="btn-facebook">facebook</button>
          </div>
          <div id="googleButton">
            <HooksLoginG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
