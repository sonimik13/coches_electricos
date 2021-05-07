import "./Configuracion.css";
import atras from "../../assets/atras.svg";
import avanza from "../../assets/avanza.svg";
import añadir from "../../assets/añadir-coche.svg";
import Coche from "./Coche/Coche";
import FetchUser from '../../Hooks/FetchUser'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Config() {
  const [select, setSelect] = useState({});
  const [user, setUser] = useState();
  const [coches, setCoches] = useState([
    {
      coche: "Tesla Modelo 2",
      cargador: "Cargador tipo 1",
      color: "Rojo",
      matricula: "4562CNM",
    },
    {
      coche: "Tesla Modelo 1",
      cargador: "Cargador tipo 3",
      color: "Verde",
      matricula: "4521CNM",
    },
  ]);

  useEffect(() => {
    const fetch1 =  async () => {
      const result = await FetchUser(sessionStorage.getItem('token'));
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  }, []);

  const selectCar = (car) => {
    setSelect(car);
  };

  const drawCoches = () => {
    if (coches.length > 0) {
      return coches.map((item, index) => (
        <Coche select={selectCar} coche={item} index={index} key={index} />
      ));
    } else {
      return <h3>Añade tu primer coche</h3>;
    }
  };

  return (
    <>
      <div className="todo-configuracion">
        <Link to="/home">
          <img src={atras} alt="atras" />
        </Link>
        <div className="main-configuracion">
          <h1 className="titulo-configuracion">Configuracion</h1>
          <div className="menu-configuracion">
            <img
              className="img-perfil"
              src="https://thispersondoesnotexist.com/image"
              alt="foto perfil"
            />
            <div className="config-datos-perfil">
              <h3>{user ? user.name : ""} {user ? user.surname : ""} </h3>
              <p>+34 {user ? user.movil : ""}</p>
              <p>{user ? user.email: ""}</p>
            </div>
            <img src={avanza} alt="avanza" />
          </div>
          <div className="coches-usuario">
            <h2>Coches</h2>
            <img src={añadir} alt="añadir-coche" />
          </div>
          {drawCoches()}
        </div>
      </div>
    </>
  );
}

export default Config;
