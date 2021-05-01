import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './Signin.css';
import FetchLogin from '../../Hooks/FetchLogin'
import AuthContext from "../../contexts/AuthContext";
import Menu from '../Menu/Menu'

function Signin (props) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => setMenu(!menu)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePass = (event) => {
        setPass(event.target.value)
    }

    const dataContext = {
        menu,
        toggleMenu,
    };

    const login = async () => {
        const result = await FetchLogin(email, pass)
        const data = await result.json()
        
        if (data.status === 200) {
            alert(data.data)
            localStorage.setItem("token", data.token)
        }
        else if (data.status === 401) {
            alert(data.data)
        }
        else if (data.status === 500) {
            alert(data.data)
        }
        else {
            alert(data.data)
        }
    }

    return (
        <div className="main-login">
            <AuthContext.Provider value={dataContext}>
                <Menu />
            </AuthContext.Provider>
            <div className="logo">
                <img src={logo} alt="logo-app" id="logo-signin"/>
                <h1 className="titulo-signin">NIUTU</h1>
            </div>
            <div className="form-signin">
                <input type="text" className="input" placeholder="Usuario" onChange={handleEmail}/>
                <input type="password" className="input" placeholder="Contraseña" onChange={handlePass}/>
                <div className="recuerdame">
                    <input type="checkbox" name="recuerdame" id="recuerdame-checkbox"/>
                    <p>RECUÉRDAME</p>
                </div>
            </div>
            <div className="botones-signin">
                <button onClick={login}>ACCEDER</button>
                <hr/>
                <button onClick={toggleMenu}>REGISTRARSE</button>
            </div>
        </div>
    )
}

export default Signin;