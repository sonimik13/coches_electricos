import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './Facebook.css'


class facebook extends React.Component {
    responseFacebook(response) {
        console.log(response)
    }

    render() {
        return (
            <FacebookLogin
                appId="180266487194624"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook}
            />
        )
    }
}

export default facebook;