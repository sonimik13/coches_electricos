import React, { useContext, useState, useEffect } from "react";
import { Popper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MapView from "../Mapa/react-leaflet";
import square from "../../assets/square.svg";
import coche from "../../assets/coche.svg";
import cargador from "../../assets/cargador.svg";
import location from "../../assets/gps.svg";
import AuthContext from "../../contexts/AuthContext";
import FetchUser from "../../Hooks/FetchUser"
import {useHistory} from 'react-router-dom'
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function Home(props) {
  const history = useHistory()
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [position, setPosition] = useState({});
  const [coches, setCoches] = useState([]);
  const dataContext = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const solicitar = () => {
    if (coches.length > 0) {
      history.push("/recarga1")
    }
    else {
      alert("Aun no tienes coches añadidos")
    }
  }

  useEffect(() => {
    const fetch1 = async () => {
      const result = await FetchUser(sessionStorage.getItem("token"));
      const data = await result.json();
      await setCoches(data.result.coches);
    };
    fetch1();
  });

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const id = open ? "simple-popper" : undefined;
  const id2 = open ? "simple-popper" : undefined;

  const localizacion = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    localizacion();
  }, []);

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
          <div className="coche" aria-describedby={id} onClick={handleClick}>
            <img src={coche} alt="" />
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <div className={classes.paper}>
                { coches.length > 0
                  ? coches[0].descripcion
                  : "Aun no hay coches añadidos"}
              </div>
            </Popper>
          </div>
          <div className="recarga">
            <h2>$ 0,00</h2>
            <p>POR 0km</p>
          </div>
          <div
            className="cargador"
            className="coche"
            aria-describedby={id2}
            onClick={handleClick2}
          >
            <img src={cargador} alt="" />
            <Popper id={id2} open={open2} anchorEl={anchorEl2}>
              <div className={classes.paper}>
                { coches.length > 0
                  ? coches[0].cargador
                  : "Aun no hay coches añadidos"}
              </div>
            </Popper>
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
            <option value="">19:00</option>
            <option value="">19:30</option>
            <option value="">20:00</option>
            <option value="">20:30</option>
            <option value="">21:00</option>
            <option value="">21:30</option>
            <option value="">22:00</option>
            <option value="">22:30</option>
            <option value="">23:00</option>
            <option value="">23:30</option>
            <option value="">00:00</option>
            <option value="">00:30</option>
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
            <option value="">19:00</option>
            <option value="">19:30</option>
            <option value="">20:00</option>
            <option value="">20:30</option>
            <option value="">21:00</option>
            <option value="">21:30</option>
            <option value="">22:00</option>
            <option value="">22:30</option>
            <option value="">23:00</option>
            <option value="">23:30</option>
            <option value="">00:00</option>
            <option value="">00:30</option>
          </select>
        </div>
        <hr />
          <div className="btn-recarga" onClick={solicitar}>
            <h3>Solicitar</h3>
          </div>
      </footer>
    </div>
  );
}

export default Home;
