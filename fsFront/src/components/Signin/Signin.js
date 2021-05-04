import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Signin.css";
import FetchLogin from "../../Hooks/FetchLogin";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const login = async () => {
    const result = await FetchLogin(email, pass);
    const data = await result.json();

    if (data.status === 200) {
      alert(data.data);
      props.signin(data.token)
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 500) {
      alert(data.data);
    } else {
      alert(data.data);
    }
  };

  return (
    <div className="main-login">
      <div className="logo">
        <img src={logo} alt="logo-app" id="logo-signin" />
        <h1 className="titulo-signin">MIUTU</h1>
      </div>
      <div className="form-signin">
        <input
          type="text"
          className="input"
          placeholder="Usuario"
          onChange={handleEmail}
        />
        <input
          type="password"
          className="input"
          placeholder="Contraseña"
          onChange={handlePass}
        />
        <div className="recuerdame">
          <input type="checkbox" name="recuerdame" id="recuerdame-checkbox" />
          <p>RECUÉRDAME</p>
        </div>
      </div>
      <div className="botones-signin">
        <button onClick={login} className="acceder">ACCEDER</button>
        <hr />
        <button className="registrarse">REGISTRARSE</button>
      </div>
    </div>
  );
}

export default Signin;
