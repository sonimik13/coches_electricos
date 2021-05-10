import React from 'react';
import "./Carga2.css"
import movil from "../../../assets/svg/movil.svg"
import tarifa from "../../../assets/svg/tarifa.svg"
import tiempo from "../../../assets/svg/tiempo.svg"


const Carga2 = () => {

    return (
        <>
            <div className="carga2-rectangle">
                <div className="carga2-div1">
                    <img src={movil} alt='movil' className="movil" />
                    <div className="carga2-div1p">
                        <p><span>Marca</span> tu ubicación</p>
                    </div>
                </div>
                <div className="carga2-div2">
                    <img src={tarifa} alt='tarifa' className="tarifa" />
                    <div className="carga2-div2p">
                        <p><span>Seleccione</span> el importe de carga</p>
                    </div>
                </div>
                <div className="carga2-div3">
                    <img src={tiempo} alt='tiempo' className="tiempo" />
                    <div className="carga2-div3p">
                        <p><span>Tiempo</span> indique el horario que su coche estará estacionado</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carga2;