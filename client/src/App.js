import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
// import logo from './logo.svg';
import axios from 'axios';

import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import './App.css';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </Switch>
  </BrowserRouter>
)

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Main updateUser={this.updateUser} />
      </div>
    );
  }
}

export default App;
