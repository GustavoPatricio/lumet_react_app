import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Home from './pages/home/home';
import Navbar from './pages/navbar/navbar';
import './App.css';

class App extends React.Component { 
  render() { 
    return(
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contato" component={Contato} />
        </Switch>
      </Router>
    )
  }
}

export default App;
