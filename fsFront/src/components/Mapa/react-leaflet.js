import React, { Component } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./react-leaflet.css";
import logo from "./react-leaflet-icon";

/*Creamos un nuevo Marker para que cada vez que aparezca un
nuevo marker, aparezca el popup*/
// const position = [51.71, -0.09]

class MapView extends Component {
  /*Función para capturar la latitud y la longitud*/
  handleClick(e) {
    this.setState({ position: e.latlng });
  }

  constructor(props) {
    super(props);
    this.state = {
      position: { lat: 40.4167, lng: -3.70325 },
      zoom: 15,
      localizacion: props.data,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { position, zoom } = this.state;
    return (
      <MapContainer center={position} zoom={zoom} onClick={this.handleClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution={<a href="https://osm.org/copyright">OpenStreetMap</a>}
          contributors
        />
        {this.state.localizacion === "" ? (
          <></>
        ) : (
          <Marker position={this.state.localizacion} icon={logo}></Marker>
        )}
      </MapContainer>
    );
  }
}

export default MapView;
