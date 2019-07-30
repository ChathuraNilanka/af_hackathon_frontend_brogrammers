import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Signup from './components/signup.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Login from './components/login.component';
import Home from './components/home.component';
import EventComp from './components/event.component';
import EventAddComp from './components/addEvent.component'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">TEAM up</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/home'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signup'} className="nav-link">Tour Guides</Link>
                </li>
                <li className="nav-item">
                  <Link to={'#'} className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/event'} className="nav-link">Events</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/addEvent'} className="nav-link">Add Events</Link>
                </li>
                <li className="nav-item">
                  <Link to={'#'} className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item" >
                  <Link to={'/login'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item" >
                  <Link to={'/signup'} className="nav-link">Signup</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/signup' component={ Signup } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/login' component={ Login } />
              <Route path='/home' component={ Home } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/event' component={ EventComp } />
              <Route path='/addEvent' component={ EventAddComp } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
