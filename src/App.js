import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import logo from './data/img/logo.png';
import './App.css';
import Boards from "./components/boards";
import Board from "./components/board";
import Modal from "./components/modal";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
        <Route path="/" exact component={Boards}/>
        <Route path="/b/:boardId/:boardName" component={Board}/>
        <Route path="/c/:cardId" component={Modal}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
