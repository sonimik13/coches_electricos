import atras from "../../../Assets/atras.svg";
import FetchNewCar from "../../../Hooks/FetchNewCar";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NuevoCoche() {
  const history = useHistory();
  const [coche, setCoche] = useState("");
  const [cargador, setCargador] = useState("");
  const [color, setColor] = useState("");
  const [matricula, setMatricula] = useState("");
  const [token] = useState(sessionStorage.getItem("token"));

  const handleCoche = (e) => {
    setCoche(e.target.value);
  };

  const handleCargador = (e) => {
    setCargador(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleMatricula = (e) => {
    setMatricula(e.target.value);
  };

  const Fetch = async () => {
    const newCar = {
      descripcion: coche,
      cargador: cargador,
      color: color,
      matricula: matricula,
    };
    const result = await FetchNewCar(newCar, token);
    const data = await result.json();
    if (data.status === 200) {
      alert(data.data);
      history.push("/configuracion")
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 500) {
      alert(data.data);
    }
  };

  return (
    <>
      <div className="todo-configuracion">
        <Link to="/configuracion">
          <img src={atras} alt="atras" />
        </Link>
        <div className="main-configuracion">
          <h1 className="titulo-configuracion">Añadir nuevo coche</h1>
          <div className="info-coche">
            <div className="input-coche">
              <input
                type="text"
                onChange={handleCoche}
                placeholder="Descripcion"
              />
            </div>
            <input
              type="text"
              onChange={handleCargador}
              placeholder="Tipo de cargador"
            />
            <input
              type="text"
              onChange={handleColor}
              placeholder="Color"
            />
            <input
              type="text"
              onChange={handleMatricula}
              placeholder="Matricula"
            />
            <div className="guardar-coche" onClick={Fetch}>
              <h3>Guardar</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NuevoCoche;
