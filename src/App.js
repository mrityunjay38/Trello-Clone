import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import logo from './data/img/logo.png';
import './App.css';
import Boards from "./components/boards"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="Boards-list">
        <ul>
        <Route path="/" exact component={Boards}/>
        </ul>
        </section>
    </div>
    </Router>
  );
}

export default App;
