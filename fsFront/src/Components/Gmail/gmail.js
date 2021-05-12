import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
// or


const responseGoogle = (response) => {
    const responseGoogle = (response) => {
        console.log(response)
        history.push("/home");
    }

    return (
        <div>
            <GoogleLogin
                clientId="71281146695-jb838apttqfhhnsnj9n7mu344i4pqsgt.apps.googleusercontent.com
            "
                buttonText="Login"
                onSuccess={responseGoogle}
            />,
        </div>
    )
}

export default responseGoogle