import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import tambahMenu from './components/menu/tambahMenu';
import { Card } from '@material-ui/core';


function App() {
  return (
  <>
    <Router>
      <Switch>
        <Route path='/' exact component={Navigation}/>
        <Route path='/tambahMenu' exact component={tambahMenu}/>
        <Route path='/card' exact component={Card}></Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
