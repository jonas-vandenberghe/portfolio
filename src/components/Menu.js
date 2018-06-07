import React, { Component } from 'react';
import injectSheet from 'react-jss';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import classNames from 'classnames';

const styles = {
  menu: {
  	backgroundColor: '#282828',
  	color: '#FFFFFF',
  	border: 'none',
  	borderRadius: '0',
    marginBottom: '0',
  },
  sticky: {
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    zIndex: '1'
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
    url: '/'
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
    url: '/school/choose'
  },
  {
    name: 'contact',
    url: '/contact'
  }
];

class Menu extends Component {
  constructor(props) {
    super(props)
    this.menu = React.createRef()
  }
  state = {
    sticky: false
  }
  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll = () => {
    const el = document.querySelector('#menu');
    const header = document.querySelector('#header');
    let elDistanceToTop = el ? el.getBoundingClientRect().top : false;
    let headerDistanceToBottom = header ? header.getBoundingClientRect().bottom : false;

    if (headerDistanceToBottom && headerDistanceToBottom >= 0) {
      this.setState({
        sticky: false
      })
    }

    else if (elDistanceToTop <= 0) {
      this.setState({
        sticky: true
      })
    }
  }

	render() {
		return (
      <Navbar ref={this.menu} id="menu" inverse className={classNames(this.props.classes.menu, this.state.sticky ? this.props.classes.sticky : '')}>
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
