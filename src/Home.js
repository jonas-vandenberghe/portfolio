import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Dashboard from './components/Dashboard/Dashboard';
import DashboardItem from './components/Dashboard/DashboardItem';

import projects from './fixtures/projects';

const styles = {};

class Home extends Component {
  render() {
    const {
      image,
      url,
      size
    } = projects
    return (
      <Dashboard>
      {
        projects.map(project => {
          return (
            <DashboardItem graphic={project.thumbnail} url={project.url} size={project.size}/>
          );
        })
      }
      </Dashboard>
    );
  }
}

export default injectSheet(styles)(Home);