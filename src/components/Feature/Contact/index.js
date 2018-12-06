import React, { Component } from 'react';
import Background from '../../../images/contact.jpg'
import { Container, Row, Col, Button } from 'reactstrap'; 


const style = {
	bg: {
		backgroundImage: `url(${Background})`,
		backgroundSize:'cover',
		position:'relative',
		minHeight:'60vh'
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
		position:'absolute',
		top:'0',
		minHeight:'60vh',
		width:'100%',
		zIndex:'99',
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
			<section style={style.bg}>
				<div style={style.darkBg}></div>
				<div style={style.content}>
					<Container>
						<Row style={{minHeight:'60vh'}}>
							<Col className="text-center my-auto" xs="6">
								<h3>Like what you see?</h3>
								<h1>Tabbr</h1>
								<p>We'd like to hear from you</p>
							</Col>
							<Col className="text-center my-auto" xs="6">
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
			</section>

		);
	}
}
