import React from 'react';
import { Row, Col } from 'reactstrap';

const style={
	image: {
		width: '893px',
		height: '378px',
		boxShadow: '1px 1px 50px 2px #ccc'
	},
	hr: {
		width:'70%',
	}
}

export default (props) => {
	return (
		<Row className="py-4 px-4">
			<Col className="text-right my-auto" xs="5">
				<h3>{props.head}</h3>
				<hr align="right" style={style.hr}/>
				<p>{props.body}</p>
			</Col>
			<Col className="text-center" xs="7">
				<img
					style={style.image}
					className="rounded"
					src={props.image}
					>
				</img>
			</Col>
		</Row>
	)
};
