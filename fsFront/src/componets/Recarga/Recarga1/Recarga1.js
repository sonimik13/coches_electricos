import React from 'react';
import './Recarga1.css';

import motocarga from '../../../assets/motocarga.svg';

import deposito from '../../../assets/deposito.svg';


function Recarga1(){

    return(

        <div className="main-recarga1">
            <div className="text-recarga">
                <h1 className="text-recarga">Recarga <br />en camino!</h1>

            </div>

            <div className="img-moto">
            <img src={motocarga} alt="motocarga" id="imagen-moto"></img>
            </div>

            <div className="text-tapa">
                <h3>Recuerde dejar abierta<br />la tapa del depósito</h3>
                <img src={deposito} alt="deposito" id="imagen-deposito"></img>
            </div>

            <div className="modelo-matricula">
                <div className="modelo-row"><p className="modelo">Modelo:</p> <h4>Tesla Model3</h4></div>
                <div className="modelo-row"><p className="conector">Conector:</p> <h4>Tipo1</h4></div>
                <div className="modelo-row"><p className="matricula">Matricula:</p><h4> 2345BMW</h4></div>
            </div>

            <div className="distancia-tiempo">
                <div className="distancia-column"><p>Distancia</p><h4>1,2 km</h4></div>
                <div className="distancia-column"><p>Tiempo</p><h4>15 min</h4></div>
                <div className="distancia-column"><p>Precio</p><h4>15 €</h4></div>
                
                
                

            </div>

            <div className="boton-cancelar">
                 <button>Cancelar</button>
            </div>

        </div>



    )
}


export default Recarga1;