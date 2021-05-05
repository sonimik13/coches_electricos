import React from "react";
import "./Tarjeta.css";
import { Link } from "react-router-dom";
import tarjeta from "../../assets/tarjetascredito.svg";

function Tarjeta() {
  return (
    <div className="todo-tarjeta">
      <div className="omitir">
        <Link to="/">
          <p className="text-omitir">Omitir por ahora</p>
        </Link>
      </div>
      <div className="main-tarjeta">
        <div className="img-tarjeta">
          <h3>Introduzca los datos de su tarjeta</h3>
          <div className="tarjeta">
            <img src={tarjeta} alt="tarjeta-credito" id="tarjeta-credito"></img>
            <h4>Tarjeta de crédito o débito</h4>
          </div>
        </div>
        <div className="botones-tarjeta">
          <button>SIGUIENTE</button>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
