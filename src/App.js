import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import Login from './components/login_component.js';
import Signup from './components/signup_component.js';
import Profile from './components/dashboard_component_experiences.js';
import Dashboard from "./components/dashboard_experiences";
import DashboardProfile from "./components/dashboard_profile";
import DashboardExperience from "./components/dashboard_experiences";
import DashboardResume from "./components/dashboard_resume";
class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route exact path="/" render={() => {window.location.href="home.html"}} />
             <Route path="/profile" component={DashboardProfile} exact/>
             <Route path="/resume" component={DashboardResume} exact/>
             <Route path="/experience" component={DashboardExperience} exact/>
             <Route path="/login" component={Login} exact/>

             <Route path="/signup" component={Signup}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;