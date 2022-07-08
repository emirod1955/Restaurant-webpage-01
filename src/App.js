//import react
import React from 'react';

//import router libraly
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import {Home} from './components/Home/Home';
import {Nosotros} from './components/Nosotros/Nosotros';
import {Local} from './components/Local/Local';
import {Contactanos} from './components/Contactanos/Contactanos';
import NavBar from './components/NavBar/NavBar';
import {Exito} from './components/Exito/Exito';


function App() {
  return (
      <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Nosotros" exact component={() => <Nosotros />} />
          <Route path="/nuestro-local" exact component={() => <Local />} />
          <Route path="/contactanos" exact component={() => <Contactanos />} />
          <Route path="/envio-de-datos-exitosamente" exact component={() => <Exito />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;