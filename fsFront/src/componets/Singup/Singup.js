import React from 'react';
import './Singup.css';

import Intro from './Intro/Intro';
import RegistroP2 from './RegistroP2/RegistroP2';
import RegistroP3 from './RegistroP3/RegistroP3';
import Condiciones from './Condiciones/Condiciones';
import Tarjeta from './Tarjeta/Tarjeta'


import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";

function Singup(){

    return(
         <div className="singup">
             
            
    <Router>
    
        
            <Switch>

                <Route exact path="/" component={Intro} />
                <Route path="/registroP2" component={RegistroP2} />
               
                <Route path="/registroP3" component={RegistroP3} />
           
                <Route path="/condiciones" component={Condiciones} />
                <Route path="/tarjeta" component={Tarjeta} />
               
               
            </Switch>
  </Router>
        </div>
    )
}


export default Singup;