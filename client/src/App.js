import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
// import logo from './logo.svg';
import axios from 'axios';

import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Navbar from './Layout/Navbar';
import SignUp from './Pages/SignUp';
import './App.css';

const Main = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      {/* <Route path='/login' component={Login} updateUser={props.updateUser}/> */}
      <Route path='/login' render={() => <Login {...props} updateUser={props.updateUser}/>} />
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
    console.log('userObject', userObject);
    this.setState({
      loggedIn: userObject.loggedIn,
      username: userObject.username
    })
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
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Main updateUser={this.updateUser} />
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;
