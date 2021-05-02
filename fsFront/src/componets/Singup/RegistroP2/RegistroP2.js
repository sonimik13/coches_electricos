import React, { useState, useEffect } from 'react'

import './RegistroP2.css';

function Registrop2(){
    const [nombre, setNombre]= useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    
    const handleNombre = (event)=>{
        setNombre(event.target.value)
    }
    const handleApellido = (event)=>{
        setApellido(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePass = (event) => {
        setPass(event.target.value)
    }
  
    return (

        <div className="main-registrop2">
            <div className="texto">
            <h1 className="titulo-registrop2">Regístrate</h1>
            <div className="form-registrop2">
                
                <input type="text" className="input" placeholder="Nombre" onChange={handleNombre}/>
                <input type="text" className="input" placeholder="Apellido" onChange={handleApellido}/>
                <input type="text" className="input" placeholder="Email" onChange={handleEmail}/>
                <input type="password" className="input" placeholder="Contraseña" onChange={handlePass}/>
                <div className="recuerdame">
                    <p>RECUÉRDAME</p>
                    <input type="checkbox" name="recuerdame" id="recuerdame-checkbox"/>
                </div>
            </div>
                <div className="botones-registrop2">   
                    <button onClick="">Siguiente</button>
                </div>
            </div>
        </div>

    )
}

export default Registrop2;