import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from './components/Signin/Signin'

function App() {
  return (
    <Router>
      <div className="App">
          <Menu />
          <Switch>
            <Route path="/login" component={Signin} />
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
