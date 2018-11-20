import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
// import logo from './logo.svg';
import axios from 'axios';

import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Navbar from './Layout/Navbar';
import NewApplication from './Pages/NewApplication';
import SignUp from './Pages/SignUp';
import './App.css';

const Main = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <Dashboard 
                                            {...props} 
                                            updateUser={props.updateUser} 
                                            redirect={props.redirect}/>} 
                                            redirectPage={props.redirectPage}
                                            userId={props.userId}
      />
      <Route path='/login' render={() => <Login 
                                          {...props} 
                                          updateUser={props.updateUser} 
                                          redirectPage={props.redirectPage}/>} 
      />
      <Route path='/new' render={() => <NewApplication
                                          {...props}
                                          updateUser={props.updateUser} 
                                          redirectPage={props.redirectPage} 
                                          userId={props.userId}/>}
      />
      <Route path='/signup' component={SignUp} />
    </Switch>
  </BrowserRouter>
)

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      userId: null,
      username: null,
      userChecked: false,
      redirect: '/login'
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.redirectPage = this.redirectPage.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  redirectPage(page) {
    console.log('page', page);
    this.setState({
      redirect: page
    })
  }

  updateUser(userObject) {
    console.log('userObject', userObject);
    this.setState({
      loggedIn: userObject.loggedIn,
      userId: userObject.userId,
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
          userId: response.data.user._id,
          username: response.data.user.username,
          userChecked: true
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          userId: null,
          username: null,
          userChecked: true
        })
      }
    })
  }


  render() {
    if(this.state.userChecked) {
       return (
      <div className="App">
        <Navbar 
          updateUser={this.updateUser} 
          loggedIn={this.state.loggedIn} 
          redirect={this.state.redirect} 
          redirectPage={this.redirectPage}
        />
        <div className="App__content">
          <Main 
            updateUser={this.updateUser} 
            redirect={this.state.redirect} 
            redirectPage={this.redirectPage}
            userId={this.state.userId}
          />
        </div>
      </div>
    );
    } else {
      return <div></div>
    }
   
  }
}

export default App;
