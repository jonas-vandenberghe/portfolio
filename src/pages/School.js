import React, { Component } from 'react';
import injectSheet from 'react-jss';

import View from '../components/View';

const styles = {
  school: {
    color: '#FFFFFF'
  }
};

class School extends Component {
	render() {
  	return (
      <View>
        <div className={this.props.classes.school}>
          School
        </div>
      </View>
		);
	}
}

export default injectSheet(styles)(School);
