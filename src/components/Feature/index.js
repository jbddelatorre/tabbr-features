import React, { Component, Fragment } from 'react';
import AppBar from '../Layout/Appbar';
import { Container, Row, Col } from 'reactstrap';
import LandingImage from './Landing';

const style = {
	offset: {
		marginTop:'60px'
	}
}

export default class Feature extends Component {
	render() {
		return (
			<Fragment>
				<AppBar />	
				<LandingImage>
						BOO
				</LandingImage>
				<Container>
					
				</Container>
			</Fragment>
		);
	}
}
