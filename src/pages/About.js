import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { Grid, Row, Col } from 'react-bootstrap';

import View from '../components/View';

const styles = {
  about: {
    color: '#FFFFFF'
  },
  divider: {
    width: '100%',
    border: '0.5px solid #EEEEEE'
  },
  container: {

  },
  contentOverlay: {
    background: 'linear-gradient(90deg, rgba(58,242,167,0.8) 0%, rgba(70,209,236,0.8) 100%)',
    padding: '24px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media(max-width: 676px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
    }
  },
  content: {
    height: '350px',
    backgroundImage: 'url(../images/about.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'right',
    '@media(max-width: 676px)': {
      textAlign: 'center'
    }
  },
  contentText: {

  },
  avatar: {
    width: '200px',
    height: '200px',
    '@media(max-width: 676px)': {
      width: '100px',
      height: '100px',
    },
    backgroundImage: 'url(../images/about-avatar.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginLeft: '24px',
    marginRight: '24px',
    border: '2px solid #3af2a7',
    borderRadius: '50%'
  },
  head: {
    color: '#FFFFFF',
    fontSize: '2rem',
    fontWeight: '400',
    maxWidth: '450px',
    marginBottom: '24px',
    marginLeft: 'auto'
  },
  subhead: {
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: '400',
    maxWidth: '450px',
    marginLeft: 'auto',
    lineHeight: '1.4rem'
  },
  descriptionBlock: {
    color: '#6B6B6B',
    padding: '24px',
    backgroundColor: '#FFFFFF'
  },
  descriptionTitle: {
    fontWeight: '500',
    fontSize: '1.8rem',
    marginBottom: '16px'
  },
  description: {
    fontWeight: '400',
    fontSize: '0.8rem',
    lineHeight: '1.5rem'
  },
  expertisesContainer: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    width: '100%',
    textAlign: 'center'
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexWrap: 'wrap'
  },
  expertiseItem: {
    // flex: '1',
    // justifyContent: 'space-between'
    marginBottom: '16px'
  },
  expertiseIconWrapper: {
    margin: 'auto',
    marginBottom: '16px',
    height: '64px',
    width: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > .ui': {
      width: '50px',
      height: '50px'
    },
    '& > .ux': {
      width: '72px',
      height: '64px'
    },
    '& > .branding': {
      width: '64px',
      height: '64px'
    }
  },
  expertiseIcon: {

  },
  expertiseTitle: {
    fontWeight: '500',
    color: '#6B6B6B',
    marginBottom: '16px',
    fontSize: '0.9rem'
  },
  expertiseDescription: {
    color: '#6B6B6B',
    fontWeight: '400',
    lineHeight: '1.2rem',
    fontSize: '0.8rem'
  }
};

const expertises = [
  {
    title: 'UI Design',
    description: 'The combination of using colours, styling, typography and whitespace to solve a problem and invoke an emotion is the reason why I do what I do.',
    icon: '/images/UI-design.png',
    class: 'ui'
  },
  {
    title: 'UX Design',
    description: 'I develop interactive prototypes to demonstrate real world scenarios. Other techniques include generating user flows, personas, wireframes and animation.',
    icon: '/images/UX-design.png',
    class: 'ux'
  },
  {
    title: 'Branding & Identity',
    description: 'A brand is not just a font type or icon, a brand invokes an emotion. The simpler the design, the more memorable.',
    icon: '/images/Branding-Identity.png',
    class: 'branding'
  }
]

class About extends Component {
	render() {
    const {
      about,
      divider,
      container,
      content,
      contentText,
      avatar,
      contentOverlay,
      head,
      subhead,
      descriptionBlock,
      descriptionTitle,
      description,
      expertisesContainer,
      expertiseItem,
      expertiseIconWrapper,
      expertiseIcon,
      expertiseTitle,
      expertiseDescription,
    } = this.props.classes;
  	return (
      <div className={about}>
        <View>
          <div className={container}>
            <div className={content}>
              <div className={contentOverlay}>
                <div className={avatar}></div>
                <div className={contentText}>
                  <div className={head}>Hey, I'm Jones.</div>
                  <div className={subhead}>Welcome to my about me page. If you want to know more about me after reading, you can always contact me.</div>
                </div>
              </div>
            </div>
            <div className={descriptionBlock}>
              <div className={descriptionTitle}>
                Allow me to introduce myself...
              </div>
              <div className={description}>
                <p>
                  Hi, my name is Jonas Vandenberghe. I’m a 19 years old designer who lives in Belgium, Antwerp.  I’ve studied multimedia at the St. Cordula institute.
                  When I was 12 years old I’ve got inspired by other designers on Youtube.
                  It all started when I downloaded photoshop when I was 12 years old. I’ve watched a lot of tutorials and learned it by myself.
                  2 years later I started studying multimedia. Afterwards I finished an extra year ‘7CW’.
                </p>
                <p>
                  I plan to continue getting better and better in design.
                  If I should describe myself in three words; I am a quiet, helpful and healthy boy, I watch my food and my body and stay fit. I live together with Ruby and Pancho, my cat and dog.
                </p>
                <p>
                  If you would like to connect with me, then be sure to check out my contact page.
                </p>
              </div>
            </div>
            <div className={divider}></div>
            <Grid className={expertisesContainer}>
              <Row>
                {expertises.map((expertise, index) => {
                  return (
                    <Col key={index} className={expertiseItem} xs={12} sm={6} md={6} lg={4}>
                      <div className={expertiseIconWrapper}>
                        <img className={classNames(expertiseIcon, expertise.class)} src={expertise.icon} alt={expertise.title}/>
                      </div>
                      <div className={expertiseTitle}>{expertise.title}</div>
                      <div className={expertiseDescription}>{expertise.description}</div>
                    </Col>
                  );
                })}
              </Row>
            </Grid>
          </div>
        </View>
      </div>
		);
	}
}

export default injectSheet(styles)(About);
