import React, { Component, } from 'react';
import maniqui from "../../../assets/maniqui.svg"
import './fotoPerfil.css';
import botonFotoPerfil from "../../../assets/botonFotoPerfil.svg"
// import FetchFotoPerfil from "../../../Hooks/FetchFotoPerfil"


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileImg: maniqui
        }
    }
    imageHandler = (e) => {
        const FetchFotoPerfil = (profileImg) => {
            fetch("http://localhost:8080/create/fotoPerfil")
                .then(response => response.json())
                .then(image => reader.result)
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })

                console.log(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    render() {
        const { profileImg } = this.state



        return (

            <div className="container">
                <div className="img-holder">
                    <img src={profileImg} alt="Foto de perfil" id="img" className="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                <div className="label">
                    <label className="image-upload" htmlFor="input">
                        <img src={botonFotoPerfil} alt="botonFotoPerfil" className="botonFotoPerfil" />
                    </label>
                </div>
            </div >
        );
    }
}

export default App;