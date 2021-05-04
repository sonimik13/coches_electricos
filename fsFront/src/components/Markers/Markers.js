import React, { Component } from 'react';
import {Marker} from "react-leaflet"
import Icono from "./Icono"
// Qué icono poner de marcador?

// useEffect(() => {
//     navigator.geolocation.getCurrentPosition
//     }
// }, [input])
// De Main ha de venir un array de puntos de cargas, se meterían por props/context, se recorrería y se agregaría dentro de position de Marker

const Markers = () =>{

    return (
        <Marker position={{}} icon={Icono} />
    )
}


export default Markers;