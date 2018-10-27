import React from 'react';
import {BrowserRouter, Link, NavLink, Redirect, Route} from 'react-router-dom';
import axios from 'axios';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
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
                    this.props.redirectPage('/login');
                }
            })
            .catch(error => {
                console.log('error', error); 
            })
    }

    redirectToLogin() {
        this.props.redirectPage('/login')
    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <div>
                <div>
                    {loggedIn ? (
                        <div onClick={this.logout} >Logout</div>
                    ) : (
                            <div onClick={this.redirectToLogin}>Login</div>
                    )}
                </div>
            </div>
        )
    }
}