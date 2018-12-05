import React from 'react';
import Radium from 'radium';
import { Container, Row, Col, Button } from 'reactstrap';

const style = {
	background: {
		height: '80vh',
		maxWidth: '100vw',
		backgroundColor:'gray',
		backgroundImage: "url('bg.jpg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: 'auto',
		position:'relative'
	},
	blackBg: {
		height:'80vh',
		width:'100%',
		backgroundColor:'black',
		opacity:'0.3',
		position:'absolute',
		top:'0'
	},
	content: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width:'100%',
		flexDirection:'column',
		height:'80vh',
		maxWidth:'100vw',
		color:'white',
		position:'absolute',
		top:'0'
	},
	image: {
		lg: {
			width:'450px'
		},
		xs: {
			width:'200px'
		}
	},
	button: {
		width:'150px',
	}
}
export default Radium((props) => {
	return (
		<div style={style.background}>
			<div style={style.blackBg}>
			</div>
			<div style={style.content}>
				<Row style={{width:'100%'}}>
					<Col lg="4">
						
					</Col>
					<Col xs="12"lg="3" className="pt-4">
						<h1 style={style.h1}>Tabbr</h1>
						<h5>A Debate Management and Analytics Software</h5>
						<p>Some text to explain a bit</p>
						<Button className="mr-2" outline color="light" style={style.button}>Sign Up</Button>
						<Button className="mr-2" outline color="light" style={style.button}>Log In</Button>
					</Col>
					<Col xs="12"lg="5">
						<img src={require('../../../images/tabbr.png')} alt="Tabbr Logo" style={style.image.lg}></img>
					</Col>
				</Row>
			</div>
		</div>
	)
});
