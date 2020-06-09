import React, { useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link, withRouter, useLocation } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Home from './pages/home/home';
import Navbar from './pages/navbar/navbar';
import Cursos from './pages/cursos/cursos';
import Sobre from './pages/sobre/sobre';
import './App.css';
import ScrollToTop from 'react-router-scroll-top';


class App extends React.Component { 

  render() { 
    return(
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/cursos" component={Cursos} />
          <Route path="/contato" component={Contato} />
          <Route exact path="/sobre" component={Sobre} />
        </Switch>
      </Router>
    )
  }
}


export default App;
