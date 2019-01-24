import React from 'react';
import { Row, Col } from 'reactstrap';

import MediaQuery from 'react-responsive';

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
		<Row className="pb-2 px-4">
			<Col className="text-center my-auto" xs="12">
				<MediaQuery query="(min-device-width: 770px)">
					<div style={{width: '70%', margin: '0 auto', textAlign:'justified'}}>
						<h3>{props.head}</h3>
						<p style={{marginBottom: '12px'}}>{props.body}</p>
					</div>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 770px)">
					<div style={{width: '100%', textAlign:'justified'}}>
						<h3>{props.head}</h3>
						<p style={{marginBottom: '12px'}}>{props.body}</p>
					</div>
				</MediaQuery>
			</Col>
			<Col className="text-center" xs="12">
				<img
					style={style.image}
					className="rounded img-fluid"
					src={props.image}
					alt={'Featured'}
					>
				</img>
			</Col>
			<Col className="py-2 text-center my-auto" xs="12">
				<hr align="center" style={style.hr}/>
			</Col>
		</Row>
	)
};
