import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  footer: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: '64px 0 24px 0',
    fontSize: '0.8rem'
  },
  creatorName: {
    color: '#BCEF73'
  }
};

class Footer extends Component {
	render() {
    const {
      footer,
      creatorName
    } = this.props.classes

    const {
      year,
      type,
      creator
    } = this.props
		return (
      <div className={footer}>
        {`Copyright © ${year} - ${type} by `}
        <span className={creatorName}>{creator}</span>
      </div>
		);
	}
}

export default injectSheet(styles)(Footer);
