import React from 'react';
import { Row, Col } from 'reactstrap';

const style={
	image: {
		boxShadow: '1px 1px 50px 2px #ccc'
	},
	hr: {
		width:'80%'
	}
}

export default (props) => {
	return (
		<Row className="py-4 px-4">
			<Col className="text-center" xs="7">
				<img
					style={style.image}
					className="rounded img-fluid"
					src={props.image}
					alt={'Featured'}
					>
				</img>
			</Col>
			<Col className="text-left my-auto" xs="5">
				<div style={{width: '85%'}}>
					<h3>{props.head}</h3>
					<hr align="left" style={style.hr}/>
					<p>{props.body}</p>
				</div>
			</Col>
		</Row>
	)
};
