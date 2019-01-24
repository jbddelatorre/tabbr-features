import React from 'react';
import Radium from 'radium';
import Background from '../../../images/bg.jpg'
import { Row, Col, Button } from 'reactstrap';

import MediaQuery from 'react-responsive';

const style = {
	background: {
		height: '70vh',
		maxWidth: '100vw',
		backgroundColor:'gray',
		backgroundImage: `url(${Background})`,
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
		height:'60vh',
		maxWidth:'100vw',
		color:'white',
		position:'absolute',
		top:'0'
	},
	image: {
		lg: {
			width:'300px'
		},
		xs: {
			width:'200px'
		}
	},
	button: {
		minWidth:'250px',
	},
	h1: {
		marginTop:'16px',
		marginBottom: '0px',
		textAlign:'center',
		fontFamily: 'Roboto',
		fontWeight: '500'
	},
	h5: {
		textAlign:'center',
		marginTop: '0px',
		fontSize: '22px',
		fontFamily: 'Roboto',
	},
}
export default Radium((props) => {
	return (
		<div style={style.background}>
			<div style={style.blackBg}>
			</div>
			<div style={style.content}>
				<Row style={{width:'100%'}} className="justify-content-center">

					<Col xs={{size:12, order: 1}} style={{textAlign: 'center'}}>
						<MediaQuery query="(min-device-width: 600px)">
							<img className="img-fluid"src={require('../../../images/tabbr.png')} alt="Tabbr Logo" style={style.image.lg}></img>
						</MediaQuery>
						<MediaQuery query="(max-device-width: 600px)">
							<img className="img-fluid"src={require('../../../images/tabbr.png')} alt="Tabbr Logo" style={style.image.xs}></img>
						</MediaQuery>
					</Col>

					<Col xs={{size:12, order: 2}} className="px-4 align-self-center">
						<h1 style={style.h1}>Tabbr</h1>
						<h5 style={style.h5}>A Debate Management and Analytics Software</h5>

						<Row className="my-2 mx-4 justify-content-center">
							<a href="https://www.tabbr.co" target="_blank" rel="noopener noreferrer"><Button className="mr-2 my-2" size="lg" outline color="light" style={style.button}>Create an Account</Button></a>
							<a href="https://www.tabbr.co" target="_blank" rel="noopener noreferrer"><Button className="mr-2 my-2" size="lg" outline color="light" style={style.button}>Log In</Button></a>
						</Row>

					</Col>
				</Row>
			</div>
		</div>
	)
});
