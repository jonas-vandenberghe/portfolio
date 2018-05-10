import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Dashboard from './components/Dashboard/Dashboard';
import DashboardItem from './components/Dashboard/DashboardItem';

import projects from './fixtures/projects';

const styles = {
  intro: {
    backgroundColor: '#3E3E3E',
    textAlign: 'left',
    padding: '24px',
    color: '#FFFFFF',
    height: '200px',
    position: 'relative',
    '& :last-child': {
      textAlign: 'right',
    }
  },
  title: {
    fontSize: '36px',
    fontWeight: '600',
    marginBottom: '16px'
  },
  content: {
    fontWeight: '500',
    fontSize: '16px',
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

class Home extends Component {
  render() {
    return (
      <Dashboard>
        <DashboardItem noHover desktopSize={8} tabletSize={6} phoneSize={12} url="#" size={8}>
          <div className={this.props.classes.intro}>
            <div className={this.props.classes.title}>Hey, I'm Jones</div>
            <div className={this.props.classes.content}>
              Welcome on my dashboard, here you have an small overview over some projects. If you wanna know more about me. Then press the button.
            </div>
            <div className={this.props.classes.button}>Lees meer</div>
          </div>
        </DashboardItem>
        <DashboardItem hoverTitle="Seaqh" hoverSubtitle="The guy behind it" desktopSize={4} tabletSize={6} phoneSize={12} graphic="../seaqh/thumbs/seaqh-thumb.png" url="#" size={4} />
      {
        projects.map((project, index) => {
          const { desktopSize, tabletSize, phoneSize, title, subtitle } = project;
          return (
            <DashboardItem hoverTitle={title} hoverSubtitle={subtitle} desktopSize={desktopSize} tabletSize={tabletSize} phoneSize={phoneSize} key={index} graphic={project.thumbnail} url={project.url} size={project.size}/>
          );
        })
      }
      </Dashboard>
    );
  }
}

export default injectSheet(styles)(Home);