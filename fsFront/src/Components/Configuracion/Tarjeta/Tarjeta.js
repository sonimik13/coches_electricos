import React, { useState } from "react";
import FetchDeleteCard from "../../../Hooks/FetchDeleteCard";



function Tarjeta(props) {

    const [token] = useState(sessionStorage.getItem("token"));
    const [titular, setTitular] = useState(props.tarjeta.titular);
    const [numero, setNumero] = useState(props.tarjeta.numero);
    const [fechaCaducidad, setFechaCaducidad] = useState(props.tarjeta.fechaCaducidad);
    const [codigo, setCodigo] = useState(props.tarjeta.codigo);


    const handleTitular = (e) => {
        setTitular(e.target.value);
    };

    const handleNumero = (e) => {
        setNumero(e.target.value);
    };

    const handleFechaCaducidad = (e) => {
        setFechaCaducidad(e.target.value);
    };

    const handleCodigo = (e) => {
        setCodigo(e.target.value);
    };

    const FetchDelete = async () => {
        const card = {
            titular: titular,
            numero: props.tarjeta.numero,
            fechaCaducidad: fechaCaducidad,
            codigo: codigo
        };
        const result = await FetchDeleteCard(card, token);
        const data = await result.json();
        if (data.status === 200) {
            alert(data.data);
        } else if (data.status === 401) {
            alert(data.data);
        } else if (data.status === 406) {
            alert(data.data);
        } else if (data.status === 500) {
            alert(data.data);
        }

    };
    return (
        <>
            <div className="info-tarjeta" onClick={() => props.select(props.tarjeta)}>
                <div className="input-tarjeta">
                    <input type="text" value={titular} onChange={handleTitular} />
                </div>
                <input type="text" value={numero} onChange={handleNumero} />
                <input type="text" value={fechaCaducidad} onChange={handleFechaCaducidad} />
                <input type="text" value={codigo} onChange={handleCodigo} />
                <div className="eliminar-tarjeta">
                    <p onClick={FetchDelete}>Eliminar</p>
                </div>
            </div>
        </>
    )
};

export default Tarjeta;