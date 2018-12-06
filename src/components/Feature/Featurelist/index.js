import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ImageLeft from './ImageLeft'
import ImageRight from './ImageRight'

import Feat1 from '../../../images/feat1.png'
import Feat2 from '../../../images/feat2.png'
import Feat3 from '../../../images/feat3.png'
import Feat4 from '../../../images/feat4.png'
import Feat5 from '../../../images/feat5.png'


const style = {
	section: {
		backgroundColor: '#f0f0f0'
	}
}

export default class Featurelist extends Component {
	render() {
		return (
			<section className="p-2" style={style.section}>
				<Row>
					<Col className="text-center description my-4" xs="12">
						Features
					</Col>
					<Col xs="12">
						<ImageRight image = {Feat1}
							head = {'Manage Teams, Rooms, Adjudicators'}
							body = {'Yes, it manages those things'}
						/>
					</Col>
					<Col xs="12">
						<ImageLeft image = {Feat2}
							head = {'Setting and Scoring Rooms'}
							body = {'Automatically allocate rooms with teams and adjudicators'}
						/>
					</Col>
					<Col xs="12">
						<ImageRight image = {Feat3}
							head = {'Easily calculate break scores'}
							body = {'Save time on calulation'}
						/>
					</Col>
					<Col xs="12">
						<ImageLeft image = {Feat4}
							head = {'Gather analytics'}
							body = {'Collect and analyze results'}
						/>
					</Col>
					<Col xs="12">
						<ImageRight image = {Feat5}
							head = {'Online submission of scores'}
							body = {'Organize teams, rooms, adjudicators'}
						/>
					</Col>
				</Row>
			</section>
		);
	}
}
