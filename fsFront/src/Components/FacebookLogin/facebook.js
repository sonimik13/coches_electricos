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
        <div className="center">
            <FacebookLogin
                appId="180266487194624"
                appSecret="68d41c54faa5a8aa42c995a59da44ccf"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
            />
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v10.0&appId=180266487194624&autoLogAppEvents=1" nonce="BBzE2IFo"></script>
            <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false"></div>
        </div>
    )
}

export default Facebook;