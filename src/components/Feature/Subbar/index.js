import React from 'react';
import { Row, Col } from 'reactstrap';

export default () => {
	return (
		<Row className="px-4 mx-4">
			<Col className="text-center my-4" xs="12">
				<h3>Something witty about taking tabbing to the next level</h3>
			</Col>
			<Col xs="4" className="py-4 text-center">
				<h5>Save Time</h5>
				<hr/>
				<p>Some explanation how it saves time</p>
			</Col>
			<Col xs="4" className="py-4 text-center">
				<h5>Be Organized</h5>
				<hr/>
				<p>Some explanation how it's organized</p>
			</Col>
			<Col xs="4" className="py-4 text-center">
				<h5>Efficient</h5>
				<hr/>
				<p>Some explanation how it's efficient</p>
			</Col>
		</Row>
	)
};
