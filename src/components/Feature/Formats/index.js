import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default (props) => {
	return (
		<section style={{...props.padding, ...props.height}}>
			<Row>
				<Col xs="12">
					<h2>Formats Available</h2>
				</Col>
			</Row>
			<Row>
				<Col xs="12" md="6">
					<h2>AP</h2>
				</Col>
				<Col xs="12" md="6">
					<h2>BP</h2>
				</Col>
			</Row>
		</section>
	)
};
