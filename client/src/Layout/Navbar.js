import React from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import axios from 'axios';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(event) {
        event.preventDefault();
        console.log('Logging out');
        axios.post('/user/logout')
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: false,
                        username: null
                    })
                }
            })
            .catch(error => {
                console.log('error', error);
                
            })
        
    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <div>
                <div>
                    {loggedIn ? (
                        <div onClick={this.logout} >Logout</div>
                    ) : (
                        <div>Login</div>
                    )}
                </div>
            </div>
        )
    }
}