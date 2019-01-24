import React, { Component } from 'react';
import Background from '../../../images/contact.jpg'
import { Container, Row, Col, Button } from 'reactstrap'; 

import TransBg from '../../UI/TransparentBackground'

const style = {
	bg: {
		backgroundImage: `url(${Background})`,
		backgroundSize:'cover',
		
		minHeight:'60vh',
	},
	darkBg: {
		backgroundColor:'black',
		opacity:'0.5',
		minHeight:'60vh',
		width:'100%',
		position:'absolute',
		top:'0',
		zIndex:'1'
	},
	content: {
		minHeight:'60vh',
		width:'100%',
		color:'white'
	},
	card: {
		color:'#3C4858',
		boxShadow:'1px 1px 25px 0 #aaa'
	}
}

export default class index extends Component {

	render() {
		return (
			<TransBg bgimage={Background}>
				<div style={style.content}>
					<Container>
						<Row style={{minHeight:'60vh'}}>
							<Col className="text-center my-auto" xs="12" md="5">
								<h3>Like what you see?</h3>
								<p>Tabbr would like to hear from you!</p>
							</Col>
							<Col className="text-center my-auto" xs="12" md="7">
								<div className="card" style={style.card}>
									<div className="card-body">
										<div className="form-group">
											<label>Name</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Email</label>
											<input type="email" className="form-control"/>
										</div>
										<div className="form-group">
										    <label>Message</label>
										   	<textarea className="form-control" id="" rows="5"></textarea>
										</div>
										<div className="form-group">
											<Button outline color="success">Submit Message</Button>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</TransBg>	
		);
	}
}
