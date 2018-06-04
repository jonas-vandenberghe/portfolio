import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  projectHead: {
    width: '100%',
    position: 'relative'
  },
  projectTitle: {
    fontSize: '2rem',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: '600'
  },
  projectSubtitle: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    marginBottom: '24px'
  },
  projectDescription: {
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: '28px',
    width: '50%',
    marginBottom: '48px'
  },
  projectLogo: {
    position: 'absolute',
    top: '10px',
    right: '48px',
    '& > img': {
      height: '150px'
    }
  }
};

class ProjectHead extends Component {
	render() {
    const {
      projectHead,
      projectContent,
      projectTitle,
      projectSubtitle,
      projectDescription,
      projectLogo,
    } = this.props.classes

    const {
      title,
      subtitle,
      description,
      logo
    } = this.props
		return (
      <React.Fragment>
  			<div className={projectHead}>
          <div className={projectTitle}>{title}</div>
          <div className={projectSubtitle}>{subtitle}</div>
          <div className={projectContent}>
            <div className={projectDescription}>
              {description}
            </div>
          </div>
          <div className={projectLogo}>
            <img src={logo} alt="" />
          </div>
        </div>
			</React.Fragment>
		);
	}
}

export default injectSheet(styles)(ProjectHead);
