import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { Grid, Row } from 'react-bootstrap';

const styles = {
  dashboard: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '& > .container': {
      width: '100%'
    }
  }
};

class Dashboard extends Component {
	render() {
    const {
      children
    } = this.props

    const {
      dashboard
    } = this.props.classes
		return (
      <div className={dashboard}>
        <Grid>
          <Row>
            {children}
          </Row>
        </Grid>
      </div>
		);
	}
}

export default injectSheet(styles)(Dashboard);
