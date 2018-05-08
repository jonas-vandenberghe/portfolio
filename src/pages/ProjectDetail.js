import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  projectDetail: {},
  projectHead: {
    width: '100%',
    marginBottom: '24px'
  },
  projectTitle: {
    fontSize: '36px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: '600'
  },
  projectSubtitle: {
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500'
  },
  projectDescription: {
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: '28px',
    width: '50%',
    marginBottom: '24px'
  },
  projectGraphic: {
    '& > img': {
      width: '100%',
      borderRadius: props => {
        return props.roundedImg ? '24px' : '0';
      }
    }
  }
};

class ProjectDetail extends Component {
	render() {
    const {
      projectDetail,
      projectHead,
      projectContent,
      projectTitle,
      projectSubtitle,
      projectDescription,
      projectGraphic
    } = this.props.classes

    const {
      title,
      subtitle,
      description,
      graphic
    } = this.props
		return (
      <div className={projectDetail}>
  			<div className={projectHead}>
          <div className={projectTitle}>{title}</div>
          <div className={projectSubtitle}>{subtitle}</div>
        </div>
        <div className={projectContent}>
          <div className={projectDescription}>
            {description}
          </div>
        </div>
        <div className={projectGraphic}>
          <img src={graphic}></img>
        </div>
      </div>
		);
	}
}

export default injectSheet(styles)(ProjectDetail);