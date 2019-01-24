import React from 'react';
import { Row, Col } from 'reactstrap';

const style = {
	head: {
		height: '34px',
		fontWeight: '500',
		textTransform: 'uppercase'
	},
	p: {
		width:'90%',
		margin: '0 auto',
		textAlign:'center'
	}
}

export default (props) => {
	return (
		<Col sm="12" lg="4" className="py-4 text-center">
			<Row>
				<Col xs="12" sm="3" lg="12" className="pr-0 mb-2">
					{props.img}
				</Col>
				<Col xs="12" sm="9" lg="12">
					<h5 className="mt-2" style={style.head}>{props.title}</h5>
					<hr/>
					<p style={style.p}>{props.body}</p>
				</Col>
			</Row>
		</Col>
	)
};
