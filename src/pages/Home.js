import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Dashboard from '../components/Dashboard/Dashboard';
import DashboardItem from '../components/Dashboard/DashboardItem';
import View from '../components/View';

import { Link } from 'react-router-dom';

import projects from '../fixtures/projects';

const styles = {
  intro: {
    backgroundColor: '#3E3E3E',
    textAlign: 'left',
    padding: '24px',
    color: '#FFFFFF',
    height: '250px',
    position: 'relative',
    '& :last-child': {
      textAlign: 'right',
    }
  },
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
    textDecoration: 'none',
    bottom: '16px',
    background: 'rgb(2,0,36) linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(160,221,255,1) 0%, rgba(145,155,253,1) 100%)',
    borderRadius: '8px',
    padding: '16px',
    color: '#FFFFFF',
    '&:hover': {
      background: 'rgb(2,0,36) linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(130,191,225,1) 0%, rgba(115,125,223,1) 100%)',
      color: '#FFFFFF',
      textDecoration: 'none'
    }
  }
};

class Home extends Component {
  render() {
    return (
      <View>
        <Dashboard>
          <DashboardItem noHover desktopSize={8} tabletSize={6} phoneSize={12} url="/about" size={8}>
            <div className={this.props.classes.intro}>
              <div className={this.props.classes.title}>Hey, I'm Jones!</div>
              <div className={this.props.classes.content}>
                Welcome on my dashboard, here you have an small overview over some projects. If you wanna know more about me. Then press the button.
              </div>
              <Link to="/about" className={this.props.classes.button}>Lees meer</Link>
            </div>
          </DashboardItem>
          <DashboardItem title="Seaqh" subtitle="The guy behind it" desktopSize={4} tabletSize={6} phoneSize={12} graphic="../seaqh/thumbs/seaqh-thumb.png" url="/about" size={4} />
        {
          projects.map((project, index) => {
            const { desktopSize, tabletSize, phoneSize, title, subtitle } = project;
            return (
              project.highlight && <DashboardItem title={title} subtitle={subtitle} desktopSize={desktopSize} tabletSize={tabletSize} phoneSize={phoneSize} key={index} graphic={project.thumbnail} url={project.url} size={project.size}/>
            );
          })
        }
        <DashboardItem title="My school" subtitle="I did study you know" desktopSize={4} tabletSize={6} phoneSize={12} graphic="../school/thumbs/school-thumb.png" url="/school" size={4} />
        <DashboardItem title="View all projects" subtitle="You know you want to" desktopSize={4} tabletSize={6} phoneSize={12} graphic="../images/more.png" url="/work" size={4} />
        </Dashboard>
      </View>
    );
  }
}

export default injectSheet(styles)(Home);
