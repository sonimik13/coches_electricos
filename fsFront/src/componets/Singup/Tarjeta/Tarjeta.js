import React from 'react'
import './Tarjeta.css';
import { Link } from 'react-router-dom';
import tarjeta from '../../../assets/tarjetascredito.svg';
import atras from '../../../assets/atras.svg';


function Tarjeta(){
    return(

        <div className="main-tarjeta">

        <div className="atras-omitir">
            <img src={atras} alt="atras" id="imagen-atras"></img>
            <h4 className="text-omitir">Omitir por ahora</h4>
        </div>
        <div className="text-tajeta">
            <h2>Introduzca los datos de su tarjeta</h2>
        </div>

        <div className="img-tarjeta">
            <img src={tarjeta} alt="tarjeta-credito" id="tarjeta-credito"></img>
        </div>
        <div className="text-tarjeta">
            <h4>Tarjeta de crédito o débito</h4>

        </div>

        <div className="botones-tarjeta">   
             <button >
                 Siguiente
             </button>
        </div>


        </div>

    )
    
}

export default Tarjeta;