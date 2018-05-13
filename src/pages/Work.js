import React, { Component } from 'react';
import injectSheet from 'react-jss';

import View from '../components/View';

const styles = {
  work: {
    color: '#FFFFFF'
  }
};

class Work extends Component {
	render() {
  	return (
      <View>
        <div className={this.props.classes.work}>
          Work
        </div>
      </View>
		);
	}
}

export default injectSheet(styles)(Work);
