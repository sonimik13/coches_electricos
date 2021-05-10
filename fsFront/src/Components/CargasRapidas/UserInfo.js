import React, { useState } from 'react';
import "./UserInfo.css"
import Carga1 from "./Carga1/Carga1"
import Carga2 from "./Carga2/Carga2"
import headDecoration from "../../assets/svg/headerDecoration.svg"

const UserInfo = () => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => setToggle(!toggle);

    return (
        <div className="main-generalContainer">
            <div className="main-cabecera">
                <div className="main-saltar"><a>Saltar</a></div>
                <div className="main-titulo-parent"><h2>Cargas Rápidas</h2></div>
            </div>
            <div className="main-generalWrapper">
                {toggle ? <Carga1 /> : <Carga2 />}
            </div>
            <div className="main-botonera">
                <button className="main-atras">Atrás</button>
                <button className="main-siguiente" onClick={handleToggle}>Siguiente</button>
            </div>
        </div>
    )
}

export default UserInfo;