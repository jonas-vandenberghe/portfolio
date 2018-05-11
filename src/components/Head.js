import React, { Component } from 'react';
import injectSheet from 'react-jss';

import View from './View.js';

const styles = {
  head: {
    height: '100vh',
    background: 'rgb(2,0,36) linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(255,179,151,1) 0%, rgba(244,106,160,1) 100%)',
    color: '#FFFFFF',
  },
  jones: {
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%'
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: '72px',
    fontWeight: '600',
    marginBottom: '24px'
  },
  description: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '64px',
    width: '676px'
  },
  button: {
    padding: '16px',
    border: '1px solid #FFFFFF',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '102px'
  }
};

class Head extends Component {
	render() {
    const { head, content, title, description, button } = this.props.classes;
  	return (
      <div className={head}>
        <img className={this.props.classes.jones} src="../images/jones.png" alt="jones" />
        <View>
          <div className={content}>
            <div className={title}>Welkom</div>
            <div className={description}>Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus.</div>
            <div className={button}>Ga verder</div>
          </div>
        </View>
      </div>
		);
	}
}

export default injectSheet(styles)(Head);
