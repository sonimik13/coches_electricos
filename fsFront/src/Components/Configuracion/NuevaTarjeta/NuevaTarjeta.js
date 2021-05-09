import React, { useState } from 'react'
import atras from "../../../Assets/atras.svg"
import FetchNewCard from "../../../Hooks/FetchNewCard"
import { Link, useHistory } from "react-router-dom"

function NuevaTarjeta() {
    const history = useHistory();
    const [titular, setTitular] = useState("");
    const [numero, setNumero] = useState("");
    const [fechaCaducidad, setFechaCaducidad] = useState("")
    const [codigo, setCodigo] = useState("")
    const [token] = useState(sessionStorage.getItem("token"));

    const handleTitular = (e) => {
        setTitular(e.target.value);
    };

    const handleNumero = (e) => {
        setNumero(e.target.value);
    }

    const handleFechaCaducidad = (e) => {
        setFechaCaducidad(e.target.value)
    }

    const handleCodigo = (e) => {
        setCodigo(e.target.value)
    };

    const Fetch = async () => {
        const newCard = {
            titular: titular,
            numero: numero,
            fechaCaducidad: fechaCaducidad,
            codigo: codigo
        };
        const result = await FetchNewCard(newCard, token);
        const data = await result.json();
        if (data.status === 200) {
            alert(data.data);
            history.push("/configuracion")
        } else if (data.status === 401) {
            alert(data.data);
        } else if (data.status === 500) {
            alert(data.data);
        }
        console.log(data)
    };
    return (
        <>
            <div className="todo-configuracion">
                <Link to="/configuracion">
                    <img src={atras} alt="atras" />
                </Link>
                <div className="main-configuracion">
                    <h1 className="titulo-configuracion">Añade nueva tarjeta</h1>
                    <div className="info-tarjeta">
                        <div className="input-titular">
                            <input
                                type="text"
                                onChange={handleTitular}
                                placeholder="Titular"
                            />
                        </div>
                        <input
                            type="text"
                            onChange={handleNumero}
                            placeholder="Número de tarjeta"
                        />
                        <input
                            type="text"
                            onChange={handleFechaCaducidad}
                            placeholder="Fecha de caducidad"
                        />
                        <input
                            type="text"
                            onChange={handleCodigo}
                            placeholder="CCV"
                        />
                        <div className="guardar-tarjeta" onClick={Fetch}>
                            <h3>Guardar</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NuevaTarjeta;