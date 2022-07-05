//import react
import React from 'react';

//import router libraly
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import {Home} from './components/Home/Home';
import {Nosotros} from './components/Nosotros/Nosotros';
import {Component2} from './components/Component2/Component2';
import {Contactanos} from './components/ElLocal/Contactanos';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
      <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Nosotros" exact component={() => <Nosotros />} />
          <Route path="/component2" exact component={() => <Component2 />} />
          <Route path="/contactanos" exact component={() => <Contactanos />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
