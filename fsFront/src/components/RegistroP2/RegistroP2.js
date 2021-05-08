import React from "react";
import "./RegistroP2.css";
import { Link } from "react-router-dom";
import atras from "../../Assets/atras.svg";

function Registrop2(props) {
  return (
    <>
      <div className="todo-registro">
        <Link to="/signup">
          <img src={atras} alt="atras" id="imagen-atras"></img>
        </Link>
        <div className="main-registrop2">
          <h1 className="titulo-registrop2">Regístrate</h1>
          <div className="form-registrop2">
            <input
              type="text"
              className="input"
              placeholder="Nombre"
              onChange={props.data.handleNombre}
            />
            <input
              type="text"
              className="input"
              placeholder="Apellido"
              onChange={props.data.handleApellido}
            />
            <input
              type="text"
              className="input"
              placeholder="Email"
              onChange={props.data.handleEmail}
            />
            <input
              type="password"
              className="input"
              placeholder="Contraseña"
              onChange={props.data.handlePass}
            />

            <div className="recuerdame2">
              <input
                type="checkbox"
                name="recuerdame"
                id="recuerdame-checkbox"
              />
              <p>RECUÉRDAME</p>
            </div>
          </div>
          <div className="botones-registrop2">
            <button>
              <Link to="/registroP3">SIGUIENTE</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrop2;
