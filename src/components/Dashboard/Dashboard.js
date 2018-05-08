import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  dashboard: {
    display: 'flex',
    width: '100%',
    overflow: 'auto',
    height: 'auto',
    justifyContent: 'space-between'
  }
};

class Dashboard extends Component {
	render() {
    const {
      children
    } = this.props

    const {
      dashboard
    } = this.props.classes
		return (
      <div className={dashboard}>
        {children}
      </div>
		);
	}
}

export default injectSheet(styles)(Dashboard);