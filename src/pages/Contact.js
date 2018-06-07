import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';

import View from '../components/View';

const styles = {
  contact: {
    color: '#FFFFFF'
  },
  container: {

  },
  contentOverlay: {
    background: 'linear-gradient(90deg, rgba(58,242,167,0.8) 0%, rgba(70,209,236,0.8) 100%)',
    padding: '24px',
    height: '100%'
  },
  content: {
    height: '500px',
    backgroundImage: 'url(../images/about.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  head: {
    color: '#FFFFFF',
    fontSize: '2rem',
    fontWeight: '400',
    maxWidth: '450px',
    marginBottom: '48px'
  },
  subhead: {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    fontWeight: '500',
    maxWidth: '450px'
  },
  button: {
    width: '100%',
    padding: '24px',
    background: 'linear-gradient(90deg, rgba(58,242,167,1) 0%, rgba(70,209,236,1) 100%)',
    color: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: '400',
    '&:hover': {
      background: 'linear-gradient(90deg, rgba(58,242,167,0.9) 0%, rgba(70,209,236,0.9) 100%)',
      textDecoration: 'none',
      'color': '#FFFFFF'
    },
    '&:focus': {
      textDecoration: 'none',
      outline: 'none',
      'color': '#FFFFFF'
    }
  },
  social: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  socialIcon: {
    cursor: 'pointer',
    height: '64px',
    flex: '1',
    margin: '24px',
    '@media(max-width: 676px)': {
      height: '36px',
    }
  }
};

const socialIcons = [
  {
    name: 'facebook',
    img: '../images/facebook.png',
    url: 'https://www.facebook.com/Seaqh/'
  },
  {
    name: 'dribble',
    img: '../images/dribble.png',
    url: 'https://dribbble.com/Seaqh'
  },
  {
    name: 'linkedin',
    img: '../images/linkedin.png',
    url: 'https://www.linkedin.com/in/jonas-v-64447898/'
  },
  {
    name: 'instagram',
    img: '../images/instagram.png',
    url: 'https://www.instagram.com/vdb_jonas/?hl=nl'
  }
]

class Contact extends Component {
	render() {
    const {
      contact,
      container,
      content,
      contentOverlay,
      head,
      subhead,
      button,
      social,
      socialIcon
    } = this.props.classes;
  	return (
      <div className={contact}>
        <View>
          <div className={container}>
            <div className={content}>
              <div className={contentOverlay}>
                <div className={head}>Ik sta altijd open om met creatieve geesten te praten.</div>
                <div className={subhead}>Of het nu gaat over een project of een simpele ‘Hey, hoe gaat het?’ I’m friendly so don’t be shy.</div>
              </div>
            </div>
            <a href="mailto:vdb-jonas@hotmail.com" className={button}>
              Get in touch
            </a>
            <div className={social}>
              {socialIcons.map((icon, index) => {
                return (
                  <a href={icon.url} target="_blank">
                    <img className={socialIcon} src={icon.img} alt={icon.name}/>
                  </a>
                );
              })}
            </div>
          </div>
        </View>
      </div>
		);
	}
}

export default injectSheet(styles)(Contact);
