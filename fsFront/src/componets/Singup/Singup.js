import React, { useState, useEffect } from 'react'
import './Singup.css'

import Intro from './Intro/Intro'
import RegistroP2 from './RegistroP2/RegistroP2'
import RegistroP3 from './RegistroP3/RegistroP3'
import Condiciones from './Condiciones/Condiciones'
import Tarjeta from './Tarjeta/Tarjeta'


import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom"

function Singup(){

    return(
         <div className="singup">
             <Tarjeta />
    <Router>
        <button>
            <Link to="/registroP2">Intro</Link>
        </button>
            <Switch>

                <Route exact path="/" coponent={Intro} />
                <Route path="/registroP2" coponent={RegistroP2} />
               
                <Route path="/registroP3" coponent={RegistroP3} />
           
                <Route path="/condiciones" coponent={Condiciones} />
                <Route path="/tarjeta" coponent={Tarjeta} />
               
               
            </Switch>
  </Router>
        </div>
    )
}


export default Singup;