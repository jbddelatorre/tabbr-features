import React from 'react';
import { Row, Col, Button} from 'reactstrap';

export default (props) => {
	return (
		<section style={{...props.padding, ...props.height}}>
			<Row>
				<Col xs="12" className="text-center description my-4">
					Formats Available
				</Col>
			</Row>
			<Row>
				<Col className="text-center" xs="12" md="6">
					<h2>Asian Parliament Image</h2>
					<Button className="mr-2" outline color="danger">Learn More</Button>
				</Col>
				<Col className="text-center" xs="12" md="6">
					<h2>British Parliament Image</h2>
					<Button className="mr-2" outline color="danger">Learn More</Button>
				</Col>
			</Row>
		</section>
	)
};
