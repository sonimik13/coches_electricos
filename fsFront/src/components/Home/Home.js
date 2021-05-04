import { useContext, useState, useEffect } from "react";
import MapView from "../Mapa/react-leaflet";
import square from "../../assets/square.svg";
import coche from "../../assets/coche.svg";
import cargador from "../../assets/cargador.svg";
import location from "../../assets/gps.svg";
import AuthContext from "../../contexts/AuthContext";
import FetchUser from "../../Hooks/FetchUser";
import "./Home.css";

function Home(props) {
  const [position, setPosition] = useState("");
  const [user, setUser] = useState();
  const dataContext = useContext(AuthContext);

  useEffect(() => {
    const fetch1 =  async () => {
      const result = await FetchUser(localStorage.getItem("token"));
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  }, []);

  const localizacion = async () => {
    await navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

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
        <img src={location} alt="menu" id="ubicacion" onClick={localizacion} />
      </header>
      <main>
        <MapView data={position} />
      </main>
      <footer className="home-footer">
        <div className="info-recarga">
          <div className="coche">
            <img src={coche} alt="" />
            <p>Tesla Modelo 3</p>
          </div>
          <div className="recarga">
            <h2>$ 9.90</h2>
            <p>POR 10km</p>
          </div>
          <div className="cargador">
            <img src={cargador} alt="" />
            <p>Cargador Tipo 2</p>
          </div>
        </div>
        <hr />
        <div className="select">
          <label htmlFor="#">TIEMPO APARCADO</label>
          <select name="aparcamiento" id="aparcamiento">
            <option value="">7:00</option>
            <option value="">7:30</option>
            <option value="">8:00</option>
            <option value="">8:30</option>
            <option value="">9:00</option>
            <option value="">9:30</option>
            <option value="">10:00</option>
            <option value="">10:30</option>
            <option value="">11:00</option>
            <option value="">11:30</option>
            <option value="">12:00</option>
            <option value="">12:30</option>
            <option value="">13:00</option>
            <option value="">13:30</option>
            <option value="">14:00</option>
            <option value="">14:30</option>
            <option value="">15:00</option>
            <option value="">15:30</option>
            <option value="">16:00</option>
            <option value="">16:30</option>
            <option value="">17:00</option>
            <option value="">17:30</option>
            <option value="">18:00</option>
            <option value="">18:30</option>
          </select>
          <label htmlFor="#">HASTA</label>
          <select name="aparcamiento" id="aparcamiento">
            <option value="">7:00</option>
            <option value="">7:30</option>
            <option value="">8:00</option>
            <option value="">8:30</option>
            <option value="">9:00</option>
            <option value="">9:30</option>
            <option value="">10:00</option>
            <option value="">10:30</option>
            <option value="">11:00</option>
            <option value="">11:30</option>
            <option value="">12:00</option>
            <option value="">12:30</option>
            <option value="">13:00</option>
            <option value="">13:30</option>
            <option value="">14:00</option>
            <option value="">14:30</option>
            <option value="">15:00</option>
            <option value="">15:30</option>
            <option value="">16:00</option>
            <option value="">16:30</option>
            <option value="">17:00</option>
            <option value="">17:30</option>
            <option value="">18:00</option>
            <option value="">18:30</option>
          </select>
        </div>
        <hr />
        <div className="btn-recarga">
          <h3>Solicitar</h3>
        </div>
      </footer>
    </div>
  );
}

export default Home;
