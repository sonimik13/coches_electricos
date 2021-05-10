import React from 'react';
import "./Carga1.css"
import park from "../../../assets/svg/park.svg"
import oil from "../../../assets/svg/oil.svg"

const Carga1 = () => {

    return (
        <>
            <div className="carga1-rectangle">
                <h3 className="titulo-carga1">Recarga tu coche dónde quieras</h3>
                <div className="carga1-div1">
                    <img src={park} alt='parking' className="park" />
                    <div className="carga1-div1p">
                        <p><span>Aparca</span> tu coche como siempre</p>
                    </div>
                </div>
                <div className="carga1-div2">
                    <img src={oil} alt='tapa' className="oil" />
                    <div className="carga1-div2p">
                        <p><span>Abre</span> la tapa de la gasolina</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carga1;