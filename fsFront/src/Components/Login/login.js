import React, { useState } from 'react'
import './login.css'
import logo from '../../Assets/logo.png'


function Login({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <img src={logo} alt="logo" className="logo" />
            <div className="form-inner">
                {(error !== "") ? (<div className="error">{error} </div>) : ""}
                <div className="form-group-email">
                    <label htmlFor="email" ></label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} placeholder="Email" className="form-control-email" />
                </div>
                <div>
                    <label htmlFor="password" ></label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} placeholder="Contraseña" className="form-control-password" />
                </div>
                <div className="check-group">
                    <p className="recuerdo">Recuerdame</p>
                    {/* <input type="checkbox" className="check-recuerdo" /> */}
                </div>

                <div>
                    <input type="submit" value="ACCEDER" className="boton" />
                    <input type="submit" value="DARSE DE ALTA" className="boton1" />
                </div>
            </div>
        </form >
    )
}

export default Login
