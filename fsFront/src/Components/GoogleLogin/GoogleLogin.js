import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import ReactDOM from "react-dom"
const clientId = "337574888451-p9ei38rql8fm4973o4v6lve1v0a700bn.apps.googleusercontent.com"

const HooksLoginG = () => {

    // useEffect(() =>{
    //     const fetch = async() => {
    //         const result = await FetchUserG


    //     }

    // })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

    const responseGoogle = response => {
        console.log(response);
        // setName(response.profileObj.name);
        // setEmail(response.profileObj.email);
        // setUrl(response.profileObj.imageUrl);

    };

    ReactDOM.render (
      
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSucess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
            /> , document.getElementById("googleButton")
    )

};

export default HooksLoginG;

