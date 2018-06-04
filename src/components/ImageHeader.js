import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  imageHeaderHead: {
    width: '100%',
    position: 'relative',
		textAlign: 'right',
		height: '285px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '24px'
  },
  imageHeaderOverlay: props => ({
    background: props.stage ? 'rgba(80,227,194,0.7)' : 'rgba(74, 144, 226, 0.7)',
    padding: '24px',
    height: '100%'
  }),
  imageHeaderTitle: {
    fontSize: '2rem',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: '600'
  },
  imageHeaderSubtitle: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    marginBottom: '24px'
  },
  imageHeaderDescription: {
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: '28px',
		marginLeft: 'auto',
    width: '50%',
    marginBottom: '48px'
  },
  imageHeaderLogo: {
    position: 'absolute',
    top: '32px',
    left: '48px',
    '& > img': {
      height: '150px'
    }
  }
};

class ImageHeader extends Component {
	render() {
    const {
      imageHeaderHead,
      imageHeaderOverlay,
      imageHeaderContent,
      imageHeaderTitle,
      imageHeaderSubtitle,
      imageHeaderDescription,
      imageHeaderLogo,
    } = this.props.classes;

    const {
      title,
      subtitle,
      description,
      logo,
      backgroundImage
    } = this.props;
		return (
      <React.Fragment>
  			<div className={imageHeaderHead} style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className={imageHeaderOverlay}>
            <div className={imageHeaderTitle}>{title}</div>
            <div className={imageHeaderSubtitle}>{subtitle}</div>
            <div className={imageHeaderContent}>
              <div className={imageHeaderDescription}>
                {description}
              </div>
            </div>
            <div className={imageHeaderLogo}>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
			</React.Fragment>
		);
	}
}

export default injectSheet(styles)(ImageHeader);
