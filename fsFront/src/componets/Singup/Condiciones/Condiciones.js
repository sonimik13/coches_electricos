import React, { useState, useEffect } from 'react'

import './Condiciones.css';

function Condiciones(){


    return(

        <div className="main-condiciones">
             
              <div className="text-condiciones">
                <h3 className="text-condiciones">Al pulsar la flecha siguiente,<br />
                acepta las Condiciones de uso y la Política de <br />
                privacidad de...</h3>

              </div>
              <div className="texto-condiciones">
                  <h4 className="text-condiones">Marca la casilla para indicar
                 que eres mayor de 18 <br />años y que aceptas las Condiciones
                 y la Política de <br />privacidad</h4>
              </div>
              <div className="acepto">
                    <p>Acepto</p>
                    <input type="checkbox" name="acepto" id="acepto-checkbox"/>
                </div>

                <div className="botones-registrop2">   
                    <button onClick="">Siguiente</button>
                </div>

        </div>
    )
}

export default Condiciones;