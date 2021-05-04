import React, { Component } from 'react';
import "./Home.css";
import Markers from "./Markers/Markers"

import {Map, Marker, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"


const Home = props => {




    return(
        <>
            <div className="HomeWrap">
                <header>
                </header>
                <main>
                    <Map center={{ lat: 40.4634321, lng: -3.7130504 }} zoom ={5}>
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Markers />
                    </Map>
                </main>
                <footer>
                    <div className="optionsArea">
                                                         
                    </div>                  
                    <div className="serviceBtn">
                        <button>Solicitar Recarga</button>
                        
                    </div>
                </footer>
            </div>
        </>
    )
}



export default Home;