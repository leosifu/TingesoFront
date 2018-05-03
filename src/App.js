import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './componentes/cards';
import Nav from './componentes/nav';
import Grafico from './componentes/grafico';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Cards />
        <Grafico />
      </div>
    );
  }
}

export default App;
