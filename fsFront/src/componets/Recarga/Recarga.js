import React from 'react';
import './Recarga.css';

import Recarga1 from './Recarga1/Recarga1';
import Recarga2 from './Recarga2/Recarga2';

import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";

function Recarga(){

    return(

        <div className="Recarga">
            <Recarga1 />
            {/* <Recarga2 /> */}
            {/* <Router>

                    <Switch>
                    <Route exact path="/" component={Recarga1} />
                    <Route exact path="/" component={Recarga2} />


                    </Switch>
            </Router>
 */}

        </div>



    )
}

export default Recarga;