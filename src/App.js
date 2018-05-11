import React, { Component } from 'react';
import Home from './Home'
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
      	<Route exact path="/" component={Head}/>
      	<Menu />
      	<View>
          <Route exact path="/" component={Home}/>
          {projects.map((project, index) => {
            return (
              <Route key={index} path={project.url} render={(props) => (
                <ProjectDetail
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  graphic={project.graphic}
                />
              )}/>
            );
          })}
        </View>
        <Footer year="2018" type="design" creator="Jones"/>
      </div>
    );
  }
}

export default App;
