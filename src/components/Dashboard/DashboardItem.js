import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  dashboardItem: props => {
    return {
      flex: props.size,
      backgroundImage: `url(${props.graphic})`,
      height: '200px',
      backgroundPosition: 'center'
    };
  }
};

class DashboardItem extends Component {
	render() {
    const {
      url
    } = this.props

    const {
      dashboardItem
    } = this.props.classes
		return (
      <a href={url} className={dashboardItem}></a>
		);
	}
}

export default injectSheet(styles)(DashboardItem);