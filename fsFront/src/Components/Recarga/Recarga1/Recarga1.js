import "./Recarga1.css";
import React, { useState, useEffect } from "react";
import motocarga from "../../../assets/motocarga.svg";
import deposito from "../../../assets/deposito.svg";
import FetchUser from "../../../Hooks/FetchUser";
import { Link, useHistory } from "react-router-dom";

function Recarga1() {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchrecarga = async () => {
      const result = await FetchUser(sessionStorage.getItem("token"));
      const data = await result.json();
      await setUser(data.result);
    };
    fetchrecarga();
  }, []);

  return (
    <div className="main-recarga1">
      <h1 className="text-recarga">¡Recarga en camino!</h1>

      <img src={motocarga} alt="motocarga" id="imagen-moto"></img>

      <div className="text-tapa">
        <h3>Recuerde dejar abierta la tapa del depósito</h3>
        <img src={deposito} alt="deposito" id="imagen-deposito"></img>
      </div>

      <div className="modelo-matricula">
        <div className="modelo-row">
          <p className="modelo">Modelo:</p>
          <h4>{user ? user.coches[0].descripcion : ""}</h4>
        </div>
        <div className="modelo-row">
          <p className="color">Color:</p>
          <h4>{user ? user.coches[0].color : ""}</h4>
        </div>
        <div className="modelo-row">
          <p className="conector">Cargador:</p>
          <h4> {user ? user.coches[0].cargador : ""}</h4>
        </div>
        <div className="modelo-row">
          <p className="matricula">Matricula:</p>
          <h4>{user ? user.coches[0].matricula : ""}</h4>
        </div>
      </div>
      <div className="distancia-tiempo">
        <div className="distancia-column">
          <p>Distancia</p>
          <h4>1,2 km</h4>
        </div>
        <div className="distancia-column">
          <p>Tiempo</p>
          <h4>15 min</h4>
        </div>
        <div className="distancia-column">
          <p>Precio</p>
          <h4>15 €</h4>
        </div>
      </div>
      <hr />
      <Link to="/home">
        <div className="boton-cancelar">Cancelar</div>
      </Link>
    </div>
  );
}

export default Recarga1;
