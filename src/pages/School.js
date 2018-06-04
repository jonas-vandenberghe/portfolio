import React, { Component } from 'react';
import injectSheet from 'react-jss';

import View from '../components/View';
import ProjectHead from './ProjectHead';
import ImageHeader from '../components/ImageHeader';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardItem from '../components/Dashboard/DashboardItem';

import { Route } from 'react-router-dom';

import projects from '../fixtures/projects';

const styles = {
  school: {
    color: '#FFFFFF'
  }
};

const schoolContent = {
  title: 'Scheppersinstituut',
  subtitle: 'Schooljaar 2017 - 2018',
  description: `Leuk dat je interesse hebt in mijn laatste jaar op het Scheppersinstituut. Ik heb Webontwikkeling & Netwerkbeheer gevolgd.  In dit jaar heb ik ontdekt dat ik best designer blijf en developers een handje help.`
}

const projectsContent = {
  title: 'Projects',
  subtitle: 'My own projects',
  description: 'Here you will find all my projects I did in my spare time'
}

const stageContent = {
  title: 'Stage',
  subtitle: 'Projects I did as a trainee',
  description: 'Here you will find all my projects I did as a trainee @ Appwise'
}

const blogContent = {
  title: 'Blog',
  subtitle: '',
  description: ''
}

class School extends Component {
	render() {
  	return (
      <View>
        <Route path="/school/choose" render={(props) => (
          <React.Fragment>
            <ProjectHead
              title={schoolContent.title}
              subtitle={schoolContent.subtitle}
              description={schoolContent.description}
              logo="../school/images/scheppers-logo.png"
            />
            <Dashboard>
              <DashboardItem blue title="Projecten" subtitle="Al mijn projecten op een rij" colorBlock noHover desktopSize={4} tabletSize={6} phoneSize={12} graphic="../school/thumbs/projects-thumb.png" url="/school/projects" size={4} />
              <DashboardItem green title="Stage" subtitle="Alles over mijn stage bij Appwise" colorBlock noHover desktopSize={4} tabletSize={6} phoneSize={12} graphic="../school/thumbs/stage-thumb.png" url="/school/stage" size={4} />
              <DashboardItem yellow title="Blog" subtitle="Stage blog" colorBlock noHover desktopSize={4} tabletSize={6} phoneSize={12} graphic="../school/thumbs/blog-thumb.png" url="/school/blog" size={4} />
            </Dashboard>
          </React.Fragment>
          )}
        />
        <Route exact path="/school/projects" render={(props) => (
          <React.Fragment>
            <ImageHeader
              title={projectsContent.title}
              subtitle={projectsContent.subtitle}
              description={projectsContent.description}
              logo="../school/images/scheppers-logo.png"
              backgroundImage="../school/images/projecten.png"
            />
            <Dashboard>
              {
                projects.map((project, index) => {
                  const { title, subtitle } = project;
                  const { desktopSize, tabletSize, phoneSize } = project.workSizes;
                  return (
                    project.customProject && <DashboardItem title={title} subtitle={subtitle} desktopSize={desktopSize} tabletSize={tabletSize} phoneSize={phoneSize} key={index} graphic={project.thumbnail} url={project.url} size={project.size}/>
                  );
                })
              }
            </Dashboard>
          </React.Fragment>
          )}
        />
        <Route exact path="/school/stage" render={(props) => (
          <React.Fragment>
            <ImageHeader
              title={stageContent.title}
              subtitle={stageContent.subtitle}
              description={stageContent.description}
              logo="../school/images/scheppers-logo.png"
              backgroundImage="../images/stage.png"
              stage
            />
            <Dashboard>
              {
                projects.map((project, index) => {
                  const { title, subtitle } = project;
                  const { desktopSize, tabletSize, phoneSize } = project.workSizes;
                  return (
                    project.stage && <DashboardItem title={title} subtitle={subtitle} desktopSize={desktopSize} tabletSize={tabletSize} phoneSize={phoneSize} key={index} graphic={project.thumbnail} url={project.url} size={project.size}/>
                  );
                })
              }
            </Dashboard>
          </React.Fragment>
          )}
        />
        <Route exact path="/school/blog" render={(props) => (
            <ImageHeader
              title={blogContent.title}
              subtitle={blogContent.subtitle}
              description={blogContent.description}
              logo="../school/images/scheppers-logo.png"
              backgroundImage="../images/blog.png"
              overlayColor="#4A90E2"
            />
          )}
        />
      </View>
		);
	}
}

export default injectSheet(styles)(School);
