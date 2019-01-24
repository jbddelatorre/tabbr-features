import React from 'react';
import { Row, Col } from 'reactstrap';

const style = {
	footer: {
		backgroundColor: '#e0e0e0'
	}
}

export default () => {
	return (
		<section>
			<Row className="mx-0">
				<Col xs="12" className="text-center py-2 px-0" style={style.footer}>
					Copyright &copy; 2018 &middot; Tabbr
				</Col>
			</Row>
		</section>
	)
};
