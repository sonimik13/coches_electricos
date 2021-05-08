import React from "react";
import "./Recarga2.css";

import logotipo from "../../../assets/Logotipo.svg";
// import vector from "../../../assets/vector.svg";
import { Link } from "react-router-dom";

function Recarga2() {
  return (
    <div className="main-recarga2">
      <div className="imagen-recarga">
        <img src={logotipo} alt="logotipo" id="imagen-logotipo"></img>
      </div>

      <div className="text-vector">
        <h1> Recarga lista </h1>
        <img src="" alt="vector" id="imagen-vector"></img>
      </div>

      <div className="hora-precio">
        <div className="hora-column">
          <p className="hora">HORA</p> <h4>11:15</h4>
        </div>
        <div className="hora-column">
          <p className="hora">PRECIO</p> <h4>15€</h4>
        </div>
      </div>
      <div className="valoracion">
        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>
      </div>
      {/* <div className="estrellas">
                <div className="imagen-estrella"><img src={estrella} alt="estrella" id="imagen-estrella"></img></div>
                <div className="imagen-estrella"><img src={estrella} alt="estrella" id="imagen-estrella"></img></div>
                <div className="imagen-estrella"><img src={estrella} alt="estrella" id="imagen-estrella"></img></div>
                <div className="imagen-estrella"><img src={estrella} alt="estrella" id="imagen-estrella"></img></div>
                <div className="imagen-estrella"><img src={estrella} alt="estrella" id="imagen-estrella"></img></div>
               
                
            </div> */}

      <div className="botones">
        <div className="boton-gracias">
          <button className="gracias">
            <Link className="link" to="/home">
              Gracias
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recarga2;
