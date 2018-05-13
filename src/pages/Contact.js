import React, { Component } from 'react';
import injectSheet from 'react-jss';

import View from '../components/View';

const styles = {
  contact: {
    color: '#FFFFFF'
  }
};

class Contact extends Component {
	render() {
  	return (
      <View>
        <div className={this.props.classes.contact}>
          Contact
        </div>
      </View>
		);
	}
}

export default injectSheet(styles)(Contact);
