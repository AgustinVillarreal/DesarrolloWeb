import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home'
import Calendario from './components/pages/Calendario'
import Nosotros from './components/pages/Nosotros'
import Galeria from './components/pages/Galeria'
import Contacto from './components/pages/Contacto';


function App() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/galeria" component={Galeria} />
          <Route exact path="/calendario" component={Calendario} />
        </Switch>
      </Router>
  );
  
}

export default App;
