import React, { useState, useEffect } from 'react'

import './RegistroP3.css';
import FetchRegistrop3 from  "../../../Hooks/FetchRegistrop3";

function Registrop3(){
    const [telefono, setTelefono]=useState("")



    const handleTelefono=(event)=>{
        setTelefono(event.target.value)
    }
      

      const registrop3 = async () => {
        const result = await FetchRegistrop3(telefono);
        const data = await result.json();
        console.log(data)
    
        if (data.status === 200) {
          alert(data.data);
          localStorage.setItem("telefono", data.telefono);
        } else if (data.status === 401) {
          alert(data.data);
        } else if (data.status === 500) {
          alert(data.data);
        } else {
          alert(data.data);
        }    
      };
    return (
        <div className="main-registro3">
            <div className="texto">
                
                 <div className="from-registrop3">
                    <h4 className="texto-registrop3">Introduce tu móvil</h4>
                    <input type="text" className="input" placeholder="+34 --- -- --" onChange={handleTelefono}/>
                    <div className="botones-registrop3">   
                    <button onClick={registrop3}>Siguiente</button>
                </div>
                </div>  
            </div>

            {/* <div className="from-registrop3">
            <input type="text" className="input" placeholder="+34 --- -- --" onChange={handleTelefono}/>

            </div> */}
            {/* <div className="botones-registrop3">   
                    <button onClick="">Siguiente</button>
                </div> */}


        </div>
    )
  }





export default Registrop3;