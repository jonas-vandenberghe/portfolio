import React, { Component } from 'react';
import injectSheet from 'react-jss';

import ProjectHead from './ProjectHead';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardItem from '../components/Dashboard/DashboardItem'

const styles = {
  projectDetail: {},
  projectGraphic: {
    '& > img': {
      width: '100%',
      marginBottom: '16px',
      borderRadius: props => {
        return props.roundedImg ? '24px' : '0';
      }
    }
  }
};

class ProjectDetail extends Component {
  renderGrid = (images) => {
    <Dashboard>
      {
        images.map((image, index) => {
          return (
            <DashboardItem desktopSize={4} tabletSize={6} phoneSize={8} key={index} graphic={image}/>
          );
        })
      }
    </Dashboard>
  }
	render() {
    const {
      projectDetail,
      projectHead,
      projectGraphic
    } = this.props.classes

    const {
      title,
      subtitle,
      description,
      graphics,
      gridImages
    } = this.props
		return (
      <div className={projectDetail}>
        <ProjectHead title={title} subtitle={subtitle} description={description}/>
        <div className={projectGraphic}>
          {
            graphics.map((graphic, index) => {
              return <img key={index} src={graphic} alt=''></img>
            })
          }
        </div>
        <div>
          {
            gridImages ? this.renderGrid(gridImages) : false
          }
        </div>
      </div>
		);
	}
}

export default injectSheet(styles)(ProjectDetail);
