import React, { Component } from 'react';
import Home from './Home'
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Footer year="2018" type="design" creator="Jones"/>
      </div>
    );
  }
}

export default App;
