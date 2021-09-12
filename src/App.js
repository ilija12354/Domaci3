import React from 'react';
import './App.css';
import Navbar from './komponente/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
