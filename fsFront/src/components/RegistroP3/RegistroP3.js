import React, { useState } from "react";

import "./RegistroP3.css";

import { Link } from "react-router-dom";
import atras from "../../assets/atras.svg";
function Registrop3() {
  const [telefono, setTelefono] = useState("");

  const handleTelefono = (event) => {
    setTelefono(event.target.value);
  };

  return (
    <div className="main-registro3">
      <div className="atras">
        <img src={atras} alt="atras" id="imagen-atras"></img>
      </div>
      <div className="texto">
        <div className="from-registrop3">
          <h4 className="texto-registrop3">Introduce tu móvil</h4>
          <input
            type="text"
            className="input"
            placeholder="+34 --- -- --"
            onChange={handleTelefono}
          />
          <div className="botones-registrop3">
            <button>
              <Link to="/Condiciones">Siguiente</Link>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="from-registrop3">
            <input type="text" className="input" placeholder="+34 --- -- --" onChange={handleTelefono}/>
            </div> */}
      {/* <div className="botones-registrop3">   
                    <button onClick="">Siguiente</button>
                </div> */}
    </div>
  );
}

export default Registrop3;
