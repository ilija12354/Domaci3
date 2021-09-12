import React from 'react';
import './App.css';
import Navbar from './komponente/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pocetna from './komponente/Stranice/Pocetna';
import Prijava from './komponente/Stranice/Prijava';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Pocetna}/>
          <Route path='/prijava' exact component={Prijava}/>
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
