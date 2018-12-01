import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const style = {
	background: {
		height: '80vh',
		width: '100vw',
		backgroundColor:'gray',
		backgroundImage: "url('bg.jpg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: 'auto',
	},
	blackBg: {
		height:'100%',
		width:'100%',
		backgroundColor:'black',
		opacity:'0.3',
		zIndex:'1',
	},
	content: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width:'100%',
		flexDirection:'column',
		height:'80vh',
		width:'100vw',
		color:'white'
	},
	image: {
		width:'450px'
	}
}
export default (props) => {
	return (
		<div style={style.background}>
			<div style={style.blackBg}></div>
			<div className="fixed-top" style={style.content}>
				<Row style={{width:'100%'}}>
					<Col xs="7">
						<Button outline color="light">Sign Up</Button>
						<Button outline color="light">Log In</Button>
					</Col>
					<Col xs="5">
						<img src={require('../../../images/tabbr.png')} alt="Tabbr Logo" style={style.image}></img>
						<h1>Tabbr</h1>
						<h5>A Debate Management and Analytics Software</h5>
					</Col>
				</Row>
			</div>
		</div>
	)
};
