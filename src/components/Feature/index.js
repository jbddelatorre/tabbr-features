import React, { Component, Fragment } from 'react';
import AppBar from './Appbar';
import { Container, Row, Col } from 'reactstrap';

import LandingImage from './Landing';
import Formats from './Formats';
import Featurelist from './Featurelist'
import Clients from './Clients'
// import Testimonials from './Testimonials'
import Subbar from './Subbar'
import Contact from './Contact'
import Usercount from './Usercount'
import Footer from './Footer'


const style = {
	main: {
		width:'95vw',
		margin:'0 auto',
		marginTop:'-100px',
	},
	card: {
		borderRadius:'10px',
		boxShadow:'1px 10px 50px 1px #aaa',
		color:'#3C4858'
	},
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
				<main className="main-raised" style={style.main}>
					<div className="card" style={style.card}>	
						<Subbar />
						<Formats padding={style.padding} height={style.height.lg}/>
						<Featurelist />
						<Usercount />
						<Clients />
						<Contact />
						<Footer />	
					</div>
				</main>
					
			</Fragment>
		);
	}
}
