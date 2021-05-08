import React, {useState, useEffect} from 'react';
import './Recarga1.css';

import motocarga from '../../../Assets/motocarga.svg';

import deposito from '../../../Assets/deposito.svg';
import FetchUser from "../../../Hooks/FetchUser";


function Recarga1(){

        const [user, setUser]= useState();

        useEffect(() => {
            const fetchrecarga = async()=>{
                const result = await FetchUser(sessionStorage.getItem("token"));
                const data = await result.json();
                await setUser(data.result);
            };
            fetchrecarga();            
        }, []);
    return(

        <div className="main-recarga1">
            <div className="text-recarga">
                <h1 className="text-recarga">Recarga en camino!</h1>

            </div>

            <div className="img-moto">
            <img src={motocarga} alt="motocarga" id="imagen-moto"></img>
            </div>

            <div className="text-tapa">
                <h3>Recuerde dejar abierta<br />la tapa del depósito</h3>
                <img src={deposito} alt="deposito" id="imagen-deposito"></img>
            </div>

            <div className="modelo-matricula">
                <div className="modelo-row">
                    <p className="modelo">Modelo:<h4>{user ? user.coches[0].descripcion:""}</h4></p></div>
                <div className="modelo-row">
                    <p className="color">Color:<h4>{user ? user.coches[0].color:""}</h4></p></div>
                <div className="modelo-row">
                    <p className="conector">Cargador:<h4> {user ? user.coches[0].cargador:""}</h4></p> </div>
                <div className="modelo-row">
                    <p className="matricula">Matricula:<h4>{user ? user.coches[0].matricula:""}</h4></p></div>
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