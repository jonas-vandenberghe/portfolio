import React, { Component } from 'react';
import logo from './logo.svg';
import injectSheet from 'react-jss';

import ProjectDetail from './ProjectDetail';

import projects from './fixtures/projects';

const styles = {
  projectDetail: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    marginBottom: '16px'
  },
  projectHead: {
    width: '100%',
    marginBottom: '24px'
  },
  projectTitle: {
    fontSize: '36px',
    textTransform: 'uppercase',
    color: '#5C5C5C',
    fontWeight: '700'
  },
  projectSubtitle: {
    fontSize: '20px',
    color: 'rgba(92, 92, 92, 0.7)',
    fontWeight: '700'
  },
  projectDescription: {
    color: '#5C5C5C',
    fontWeight: '400',
    lineHeight: '28px'
  },
};

class Home extends Component {
  render() {
    const { projectDetail } = this.props.classes;

    return (
      <React.Fragment>
        {projects.map(project => {
          return (
            <div className={projectDetail}>
              <ProjectDetail title={project.title} subtitle={project.title} description={project.title} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Home);