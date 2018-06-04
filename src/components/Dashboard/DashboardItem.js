import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Col } from 'react-bootstrap';

const styles = {
  dashboardProject: props => {
    // const size = calculateBlock(props.size);
    return {
      backgroundImage: `url(${props.graphic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100%'
    };
  },
  dashboardBlock: {
    display: 'inline-block',
    position: 'relative',
    height: '250px',
    textDecoration: 'none',
    width: '100%',
    '&:hover': {
      textDecoration: 'none',
    }
  },
  'col': {
    padding: '4px',
    height: '250px',
    margin: '4px 0 4px 0'
  },
  'hover': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(33, 33, 33, 0.9)',
    position: 'absolute',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
    animation: 'fadein 300ms',
    color: '#FFFFFF'
  },
  blockTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  blockDescription: {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
  colorBlockOverlay: props => ({
    background: props.green ? 'rgba(80,227,194,0.7)' : props.blue ? 'rgba(74, 144, 226, 0.7)' : props.yellow ? 'rgba(184, 233, 134, 0.7)' : '',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > :hover': {
      color: 'red',
      background: props.green ? 'rgba(63, 185, 158, 0.7)' : props.blue ? 'rgba(57, 102, 190, 0.7)' : props.yellow ? 'rgba(167, 191, 98, 0.7)' : '',
    }
  }),
  colorBlockContent: {
    textAlign: 'center'
  },
  colorBlockTitle: {
    color: '#FFFFFF',
    fontSize: '36px',
    fontWeight: '400'
  },
  colorBlockSubtitle: {
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: '300'
  },
  '@keyframes fadein': {
    from: { opacity: 0 },
    to:   { opacity: 1 }
  }
};

class DashboardItem extends Component {
  state = {
    hover: false
  }

  mouseOverToggle = () => {
    this.setState({
      hover: !this.state.hover
    })
  }

	render() {
    const {
      url,
      desktopSize,
      tabletSize,
      phoneSize,
      title,
      subtitle,
      children,
      colorBlock
    } = this.props

    const {
      dashboardBlock,
      dashboardProject,
      col,
      hover,
      blockTitle,
      blockDescription,
      colorBlockOverlay,
      colorBlockContent,
      colorBlockTitle,
      colorBlockSubtitle
    } = this.props.classes

		return ( 
      <Col onMouseEnter={this.mouseOverToggle} onMouseLeave={this.mouseOverToggle} className={col} xs={phoneSize} sm={tabletSize} md={tabletSize} lg={desktopSize}>
        <a href={url} className={dashboardBlock}>
          {
            children ? children : <div className={dashboardProject}></div>
          }
          {
            !this.props.noHover
            ? this.state.hover
              ?
                <div className={hover}>
                  <div className={blockTitle}>{title}</div>
                  <div className={blockDescription}>{subtitle}</div>
                </div>
              :
                ''
            :
            colorBlock
            ?
              <div className={colorBlockOverlay}>
                <div className={colorBlockContent}>
                  <div className={colorBlockTitle}>{title}</div>
                  <div className={colorBlockSubtitle}>{subtitle}</div>
                </div>
              </div>
            :
              ''
          }
        </a>
      </Col>
		);
	}
}

export default injectSheet(styles)(DashboardItem);
