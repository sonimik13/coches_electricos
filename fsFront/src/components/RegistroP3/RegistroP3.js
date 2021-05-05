import React from "react";
import "./RegistroP3.css";
import { Link } from "react-router-dom";
import atras from "../../assets/atras.svg";

function Registrop3(props) {

  return (
    <div className="todo-registrop3">
      <div className="atras">
        <Link to="/registrop2">
        <img src={atras} alt="atras" id="imagen-atras"></img>
        </Link>
      </div>

      <div className="main-registro3">
        <div className="form-registrop3">
          <h2 className="texto-registrop3">Introduce tu móvil</h2>
          <input
            type="text"
            className="input"
            placeholder="+34 __ __ __  __ __ __  __ __ __ "
            onChange={props.data.handleMovil}
          />
        </div>

        <div className="text-condiciones">
          <h3 className="text-condiciones">
            Al pulsar siguiente, acepta las Condiciones de uso y la Política de
            privacidad de...
          </h3>
          <h4 className="text-condiones2">
            Marca la casilla para indicar que eres mayor de 18 años y que
            aceptas las Condiciones y la Política de privacidad
          </h4>
          <input type="checkbox" name="terminos" id="terminos"/>
        </div>

        <div className="botones-registrop3">
          <button onClick={props.data.signup}>
            <Link to="/tarjeta">SIGUIENTE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registrop3;
