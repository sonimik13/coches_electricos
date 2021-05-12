import React, { Component } from 'react';
import maniqui from "../../../assets/maniqui.svg"
import './fotoPerfil.css';
import botonFotoPerfil from "../../../assets/botonFotoPerfil.svg"


export class App extends Component {
    state = {
        profileImg: maniqui
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    render() {
        const { profileImg } = this.state
        return (

            <div className="container">
                <div className="img-holder">
                    <img src={profileImg} alt="" id="img" className="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                <div className="label">
                    <label className="image-upload" htmlFor="input">
                        <img src={botonFotoPerfil} alt="botonFotoPerfil" className="botonFotoPerfil" />
                    </label>
                </div>
            </div>
        );
    }
}

export default App;