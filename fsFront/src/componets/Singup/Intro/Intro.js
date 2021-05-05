import React, { useState, useEffect } from 'react'

import './Intro.css'
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';

function Intro(){

    return(
      <div className="main-singup">
            <div className="logo">
                <img src={logo} alt="logo-app" id="logo-signup"/>
                <h1 className="titulo-signup">niutu</h1>
            </div>
          
            <div className="botones-signup">
               
                 <button>
                    <Link to="/registroP2">REGISTRARSE</Link>
                </button>
            
                <h4 className="text-redessoci">o <br />conéctate a través <br />de las redes sociales</h4>

                <div className="botones-redessoci">
                <button>Facebook</button>
                <br />
                <button>Google</button>
             </div>
            </div>
            {/* <div className="botones-redessoci">
                <button>Facebook</button>
                <br />
                <button>Google</button>
             </div> */}
      </div>
    )
}


export default Intro;