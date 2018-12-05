import React, { Component, Fragment } from 'react';
import AppBar from './Appbar';
import { Container, Row, Col } from 'reactstrap';
import LandingImage from './Landing';
import Formats from './Formats';

const style = {
	offset: {
		marginTop:'60px'
	},
	padding: {
		paddingTop:'24px',
		paddingBottom:'24px'
	},
	height: {
		lg: {
			height:'40vh'
		}
	}
}

export default class Feature extends Component {
	render() {
		return (
			<Fragment>
				<AppBar />	
				<LandingImage />
				<Container>
					<Formats padding={style.padding} height={style.height.lg}/>
				</Container>
			</Fragment>
		);
	}
}
