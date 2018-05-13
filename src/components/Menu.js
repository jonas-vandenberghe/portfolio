import React, { Component } from 'react';
import injectSheet from 'react-jss';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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

const menuItems = [
  {
    name: 'home',
    url: '/home'
  },
  {
    name: 'about',
    url: '/about'
  },
  {
    name: 'work',
    url: '/work'
  },
  {
    name: 'school',
    url: '/school'
  },
  {
    name: 'contact',
    url: '/contact'
  }
];

class Menu extends Component {
  state = {

  }
	render() {
		return (
      <Navbar inverse className={this.props.classes.menu}>
      <Navbar.Header><Navbar.Toggle /></Navbar.Header>
			<Navbar.Collapse>
	      <Nav className={this.props.classes.menuItems} pullRight>
          {menuItems.map((item, index) => {
            return (
              <LinkContainer key={index} to={item.url}>
                <NavItem eventKey={index + 1}>
                  {item.name}
                </NavItem>
              </LinkContainer>
            );
          })}
		    </Nav>
	    </Navbar.Collapse>
    </Navbar>
		);
	}
}

export default injectSheet(styles)(Menu);
