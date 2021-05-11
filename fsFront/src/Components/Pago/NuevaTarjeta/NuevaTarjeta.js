import React, { useState } from "react";
import atras from "../../../assets/atras.svg";
import FetchNewCard from "../../../Hooks/FetchCard";
import { Link, useHistory } from "react-router-dom";

function NuevaTarjeta(props) {
  const history = useHistory();
  const [titular, setTitular] = useState("");
  const [numero, setNumero] = useState("");
  const [fecha, setFecha] = useState({ mes: "", año: "" });
  const [codigo, setCodigo] = useState("");
  const [token] = useState(sessionStorage.getItem("token"));

  const handleTitular = (e) => {
    setTitular(e.target.value);
  };

  const handleNumero = (e) => {
    setNumero(e.target.value);
  };

  const handleFecha = (e) => {
    setFecha({ mes: e.target.value });
  };
  const handleFecha2 = (e) => {
    setFecha({ mes: fecha.mes, año: e.target.value });
  };

  const handleCodigo = (e) => {
    setCodigo(e.target.value);
  };

  const Fetch = async () => {
    const newCard = {
      titular: titular,
      numero: numero,
      fecha: `${fecha.mes}/${fecha.año}`,
      codigo: codigo,
      token: props.token,
    };
    const result = await FetchNewCard(newCard, token);
    const data = await result.json();
    if (data.status === 200) {
      alert(data.data);
      history.push("/pago");
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 500) {
      alert(data.data);
    } else {
      alert(data.data);
    }
    console.log(data);
  };
  return (
    <div className="todo-pago">
      <Link to="/pago">
        <img src={atras} alt="atras" />
      </Link>
      <div className="main-pago">
        <h1 className="titulo-pago">Añade nueva tarjeta</h1>
        <div className="info-tarjeta">
          <div className="input-titular">
            <input type="text" onChange={handleTitular} placeholder="Titular" />
          </div>
          <input
            type="text"
            onChange={handleNumero}
            placeholder="Número de tarjeta"
          />
          <div className="inputs2">
            <select name="mes-tarjeta" id="mes-tarjeta" onChange={handleFecha}>
              <option value="0">mes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="año-tarjeta" id="año-tarjeta" onChange={handleFecha2}>
              <option value="0">año</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
          </div>
          <div className="input-ccv">
            <input type="text" onChange={handleCodigo} placeholder="CCV" />
          </div>
          <div className="guardar-tarjeta" onClick={Fetch}>
            <h3>Guardar</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevaTarjeta;
