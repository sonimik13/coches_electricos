import React, { useState, useEffect } from 'react'
import './Tarjeta.css';
import { Link } from 'react-router-dom';
import tarjeta from '../../../assets/tarjetacredito.svg'


function Tarjeta(){

    <div className="main-tarjeta">
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
                      <button onClick={Tarjeta}>
                        <Link to="/">Siguiente</Link>
                       </button>
                    </div>


    </div>
}

export default Tarjeta;