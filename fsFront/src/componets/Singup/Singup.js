import React, { useState, useEffect } from 'react'
import './Singup.css'
import logo from '../../assets/logo.svg'

function Singup(){

    return(
      <div className="main-singup">
            <div className="logo">
                <img src={logo} alt="logo-app" id="logo-signup"/>
                <h1 className="titulo-signup">NIUTU</h1>
            </div>
          
            <div className="botones-signup">
               
                <button onClick="">REGISTRARSE</button>
                <h4 className="text-redessoci">o <br />conéctate a través <br />de las redes sociales</h4>
            </div>
            <div className="botones-redessoci">
                <button>Facebook</button>
                <br />
                <button>Google</button>
             </div>
      </div>
    )
}


export default Singup;