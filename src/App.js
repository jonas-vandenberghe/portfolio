import React, { Component } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import School from './pages/School'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import Head from './components/Head';
import View from './components/View';
import Menu from './components/Menu';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

import { Route } from 'react-router-dom';

import projects from './fixtures/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Route exact path="/home" component={Head}/>
      	<Menu />
          <Route exact path="/home" component={Home}/>
          {projects.map((project, index) => {
            return (
              <Route key={index} path={project.url} render={(props) => (
                <View>
                  <ProjectDetail
                    title={project.title}
                    subtitle={project.subtitle}
                    description={project.description}
                    graphics={project.graphics}
                    gridImages={project.gridImages}
                  />
                </View>
              )}/>
            );
          })}
        <Route exact path="/about" component={About}/>
        <Route exact path="/work" component={Work}/>
        <Route path="/school" component={School}/>
        <Route exact path="/contact" component={Contact}/>
        <Footer year="2018" type="design" creator="Jones"/>
      </div>
    );
  }
}

export default App;
