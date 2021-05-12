import "./Tusrecargas.css";
import atrasblanco from "../../Assets/atrasblanco.svg";
import añadir from "../../Assets/añadir-coche.svg";
import FetchUser from "../../Hooks/FetchUser";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



function Tusrecargas(){
    const [user, setUser] = useState();
    
    const location = useLocation();
    useEffect(() => {
        const fetch1 = async () => {
          const result = await FetchUser(sessionStorage.getItem("token"));
          const data = await result.json();
          await setUser(data.result);
        };
        fetch1();
      }, []);

      const drawTusrecargas = () => {
        if (user) {
          if (user.facturas.length > 0) {
            return user.facturas.map((item, index) => (
              <Tusrecargas facturas={item} index={index} key={index} />
            ));
          } else {
            return <h3>Añade tus facturas</h3>;
          }
        }
      };

      return(

        <>
        <div className="todo-tusrecargas">
          {/* <Link to="/home">
            <img src={atras} alt="atras" />
          </Link> */}
          <header className="recargas-header">
            <Link to="/home">
              <img src={atrasblanco} alt="atras" />
            </Link>

            <h1 className="titulo-tusrecargas">Mis Recargas</h1>
            </header>

          {/* <Link to="/home">
            <img src={atras} alt="atras" />
          </Link>header>
          <div className="main-tusrecargas">
          
            <h1 className="titulo-tusrecargas">Mis Recargas</h1>
            <div className="menu-tusrecargas"> */}
            <div className="menu-tusrecargas">
            <div className="modelo-column">
              <p className="idfactura">idFactrura:</p>
               <h4>876590</h4>
             </div>
            <div className="modelo-column">
              <p className="nombre">Nombre:</p>
               <h4>Loly Gomez</h4>
             </div>

             <div className="modelo-column">
              <p className="nombre">Concepto:</p>
               <h4>Media carga</h4>
             </div>
             <div className="modelo-column">
              <p className="importe">Importe:</p>
               <h4>5,99€</h4>
             </div>
             <div className="modelo-column">
              <p className="fecha">Fecha:</p>
               <h4>11/05/2021</h4>
             </div>
             </div>
              {/* <img
                className="img-perfil"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHrfYwlcuM60g/profile-displayphoto-shrink_200_200/0/1593101044871?e=1625097600&v=beta&t=X8x7MTDgtBK0RSAnny_bd0t3xP5RVdhmqYrFfSxJiDI"
                alt="foto perfil"
              /> */}
              {/* <div className="config-datos-perfil">
                <h3>
                  {user ? user.name : ""} {user ? user.surname : ""}{" "}
                </h3>
                <p>+34 {user ? user.movil : ""}</p>
                <p>{user ? user.email : ""}</p>
              </div> */}
            </div>
  
            <div className="tusrecargas">
              {/* <h2>Tus Recargas</h2> */}
              {/* <Link to="/nuevafactura">
                <img src={añadir} alt="añadir-recarga" />
              </Link> */}
            </div>
            {drawTusrecargas()}
          
        
      </>
      );



}

export default Tusrecargas;