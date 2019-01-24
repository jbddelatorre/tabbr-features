import React from 'react';
import { Row, Col } from 'reactstrap';

const style={
	image: {
		boxShadow: '1px 1px 50px 2px #ccc'
	},
	hr: {
		width:'70%',
	}
}

export default (props) => {
	return (
		<Row className="py-4 px-4 justify-content-center">
			<Col className="text-right my-auto" xs="5">
				<div style={{width: '85%', float: 'right'}}>
					<h3>{props.head}</h3>
					<hr align="right" style={style.hr}/>
					<p>{props.body}</p>
				</div>
			</Col>
			<Col className="text-center" xs="7">
				<img
					style={style.image}
					className="rounded img-fluid"
					src={props.image}
					alt={'Featured'}
					>
				</img>
			</Col>
		</Row>
	)
};
