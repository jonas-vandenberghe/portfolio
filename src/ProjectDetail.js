import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
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

class ProjectDetail extends Component {
	render() {
    const {
      projectHead,
      projectContent,
      projectTitle,
      projectSubtitle,
      projectDescription
    } = this.props.classes

    const {
      title,
      subtitle,
      description
    } = this.props
		return (
      <React.Fragment>
  			<div className={projectHead}>
          <div className={projectTitle}>{title}</div>
          <div className={projectSubtitle}>{subtitle}</div>
        </div>
        <div className={projectContent}>
          <div className={projectDescription}>
            {description}
          </div>
        </div>
      </React.Fragment>
		);
	}
}

export default injectSheet(styles)(ProjectDetail);