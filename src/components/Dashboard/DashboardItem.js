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
  title: {
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  description: {
    fontSize: '1.2rem',
    fontWeight: '500',
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
      hoverTitle,
      hoverSubtitle,
      children
    } = this.props

    const {
      dashboardBlock,
      dashboardProject,
      col,
      hover,
      title,
      description
    } = this.props.classes

		return ( 
      <Col onMouseEnter={this.mouseOverToggle} onMouseLeave={this.mouseOverToggle} className={col} xs={phoneSize} sm={tabletSize} md={tabletSize} lg={desktopSize}>
        <a href={url} className={dashboardBlock}>
          {
            children ? children : <div className={dashboardProject}></div>
          }
          {!this.props.noHover ? this.state.hover ? <div className={hover}>
            <div className={title}>{hoverTitle}</div>
            <div className={description}>{hoverSubtitle}</div>
          </div> : '' : ''}
        </a>
      </Col>
		);
	}
}

export default injectSheet(styles)(DashboardItem);
