import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './Facebook.css'

import { useHistory } from 'react-router-dom';


const Facebook = () => {
    let history = useHistory();

    const responseFacebook = (response) => {
        console.log(response)
        history.push("/home2");
    }

    return (
        <FacebookLogin
            appId="180266487194624"
            appSecret="68d41c54faa5a8aa42c995a59da44ccf"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
        />
    )
}

export default Facebook;