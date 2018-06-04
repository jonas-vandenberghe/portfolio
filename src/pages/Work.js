import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Dashboard from '../components/Dashboard/Dashboard';
import DashboardItem from '../components/Dashboard/DashboardItem';
import View from '../components/View';

import projects from '../fixtures/projects';

const styles = {
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '16px'
  },
  content: {
    fontWeight: '500',
    fontSize: '1rem',
    color: '#DBDBDB',
    lineHeight: '24px',
    marginBottom: '16px',
    height: '75px',
    overflow: 'hidden'
  },
  button: {
    display: 'inline',
    position: 'absolute',
    right: '16px',
    'bottom': '16px'
  }
};

class Work extends Component {
  render() {
    return (
      <View>
        <Dashboard>
        {
          projects.map((project, index) => {
            const { title, subtitle } = project;
            const { desktopSize, tabletSize, phoneSize } = project.workSizes;
            return (
              <DashboardItem title={title} subtitle={subtitle} desktopSize={desktopSize} tabletSize={tabletSize} phoneSize={phoneSize} key={index} graphic={project.thumbnail} url={project.url} size={project.size}/>
            );
          })
        }
        </Dashboard>
      </View>
    );
  }
}

export default injectSheet(styles)(Work);
