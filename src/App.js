import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './componentes/body';
import Nav from './componentes/nav';
import SuperNav from './componentes/SuperNav';

class App extends Component {
  render() {
    return (
      <div>
        <SuperNav/>
        <Nav/>
        <Body/>
      </div>
    );
  }
}

export default App;
