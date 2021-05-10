import React, { useState } from "react";
import FetchDeleteCard from "../../../Hooks/FetchDeleteCard";



function Tarjeta(props) {

    const [token] = useState(sessionStorage.getItem("token"));

    const FetchDelete = async () => {
        const card = {
            titular: props.tarjeta.titular,
            numero: props.tarjeta.numero,
            fecha: props.tarjeta.fecha,
            codigo: props.tarjeta.codigo
        };
        console.log(card);
        
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
            <div className="info-tarjeta" >
                <div className="input-tarjeta">
                    <input type="text" value={props.tarjeta.titular}/>
                </div>
                <input type="text" value={props.tarjeta.numero} />
                <input type="text" value={props.tarjeta.fecha}  />
                <input type="text" value={props.tarjeta.codigo} />
                <div className="eliminar-tarjeta">
                    <p onClick={FetchDelete}>Eliminar</p>
                </div>
            </div>
        </>
    )
};

export default Tarjeta;