import React, { Component } from 'react';
import Home from './Home'
import Footer from './components/Footer';
import Head from './components/Head';
import View from './components/View';
import Menu from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Head />
      	<Menu /> 
      	<View>
        	<Home />
        </View>
        <Footer year="2018" type="design" creator="Jones"/>
      </div>
    );
  }
}

export default App;
