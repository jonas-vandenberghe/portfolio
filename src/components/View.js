import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  view: {
    position: 'relative',
    padding: '24px',
    paddingTop: '64px',
    // maxWidth: '900px',
    margin: 'auto',
    height: '100%',
    '@media(max-width: 676px)': {
      padding: '0',
      paddingTop: '50px'
    }
  }
};

class View extends Component {
	render() {
  	return (
      <div className={this.props.classes.view}>
        {this.props.children}
      </div>
		);
	}
}

export default injectSheet(styles)(View);
