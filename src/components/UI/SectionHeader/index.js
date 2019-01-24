import React from 'react';
import { Row, Col } from 'reactstrap';

const style = {
	subheader: {
		letterSpacing:'1px',
		fontSize: '24px',
		color: '#2196f3',
		fontWeight: '600',
		paddingBottom: '2px',
		width: '40%',
		margin: '0 auto',
		borderBottom: '1px solid #2196f3',
		marginBottom: '12px'
	}
}

export default (props) => {
	return (
		<Row>
			<Col xs="12" className="text-center description my-4">
				<h6 style={style.subheader}>{props.title}</h6>
			</Col>
		</Row>
	)
};
