import React, { Component } from 'react';
import injectSheet from 'react-jss';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

const styles = {
  menu: {
  	backgroundColor: '#282828',
  	color: '#FFFFFF',
  	border: 'none',
  	borderRadius: '0'
  },
  menuItems: {
  	textTransform: 'uppercase',
  	'& > li a': {
  		color: '#FFFFFF !important'
  	},
  	'& > li a:hover': {
  		color: '#BCEF73 !important'
  	}
  }
};

class Menu extends Component {
	render() {
		return (
			<Navbar className={this.props.classes.menu} inverse collapseOnSelect>
	      <Nav className={this.props.classes.menuItems} pullRight>
		      <NavItem eventKey={1} href="/">
		        Home
		      </NavItem>
		      <NavItem eventKey={2} href="/about">
		        About
		      </NavItem>
		      <NavItem eventKey={3} href="/work">
		        Work
		      </NavItem>
		      <NavItem eventKey={4} href="/school">
		        School
		      </NavItem>
		      <NavItem eventKey={5} href="/contact">
		        Contact
		      </NavItem>
		    </Nav>
	    </Navbar>
		);
	}
}

export default injectSheet(styles)(Menu);
