import { useContext } from 'react'
import MapView from "../Mapa/react-leaflet";
import square from "../../assets/square.svg";
import coche from "../../assets/coche.svg";
import cargador from "../../assets/cargador.svg";
import location from "../../assets/gps.svg";
import AuthContext from '../../contexts/AuthContext'
import './Home.css'

function Home(props) {
    const dataContext = useContext(AuthContext);

  return (
    <div className="main-home">
      <header className="home-header">
        <img
          src={square}
          alt="menu"
          id="hamburguesa"
          onClick={dataContext.toggleMenu}
        />
        <h3>Indica tu localizacion</h3>
        <img
          src={location}
          alt="menu"
          id="ubicacion"
          onClick={dataContext.toggleMenu}
        />
      </header>
      <main>
        <MapView />
      </main>
      <footer className="home-footer">
        <div className="info-recarga">
            <div className="coche">
                <img src={coche} alt=""/>
                <p>Tesla Modelo 3</p>
            </div>
            <div className="recarga">
                <h2>$ 9.90</h2>
                <p>POR 10km</p>
            </div>
            <div className="cargador">
                <img src={cargador} alt=""/>
                <p>Cargador Tipo 1</p>
            </div>
        </div>
        <hr/>
        <div className="select">
            <label htmlFor="#">TIEMPO APARCADO</label>
            <select name="aparcamiento" id="aparcamiento">
                <option value="">11am-3pm</option>
            </select>
        </div>
        <div className="btn-recarga">SOLICITAR RECARGA</div>
      </footer>
    </div>
  );
}

export default Home;
