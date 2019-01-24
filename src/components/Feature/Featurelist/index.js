import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import SectionHeader from '../../UI/SectionHeader';

import ImageLeft from './ImageLeft'
import ImageRight from './ImageRight'
import ImageCenter from './ImageCenter'

import Feat1 from '../../../images/feat1.png'
import Feat2 from '../../../images/feat2.png'
import Feat3 from '../../../images/feat3.png'
import Feat4 from '../../../images/feat4.png'
import Feat5 from '../../../images/feat5.png'

import MediaQuery from 'react-responsive';

const style = {
	section: {
		backgroundColor: '#f0f0f0'
	},
}

const features = [
	[Feat1, 'Manage Participants', 'Publish room rooms assignments for teams and adjudicators. Make sure there are no conflicts in each room.'],
	[Feat2, 'Automated Matchups', 'Allow the software to calculate points for teams and adjudicators. Manage individual debater performances behind the scenes.'],
	[Feat3, 'Debate Analytics', 'Measure team performances and tournament trends. '],
	[Feat4, 'Motions, Video Upload, Related Readings', 'Motions and matches are posted online live, with recommended readings for post analysis.'],
	[Feat5, 'Online Ballot Submission', 'Adjudicators and Teams can now submission scores and feedback through their mobile devices; results will automatically be tallied by the platform.'],
]

export default class Featurelist extends Component {
	render() {
		let right = false
		return (
			<section className="p-2" style={style.section}>
				<SectionHeader title={'Features'}/>

				<MediaQuery query="(min-device-width: 1600px)">
			        <Row>
					{
						features.map(f => {
							right = !right
							return (
								<Col key={f[1]} xs="12">
									{
										right ? 
											<ImageRight image = {f[0]}
												head = {f[1]}
												body = {f[2]}
											/> :
											<ImageLeft image = {f[0]}
												head = {f[1]}
												body = {f[2]}
											/>
									}
								</Col>
							)
						})
					}
					</Row>
			    </MediaQuery>
			    <MediaQuery query="(max-width: 1600px)">
			        <Row>
					{
						features.map(f => {
							return (
								<Col key={f[1]} xs="12">
									<ImageCenter image = {f[0]}
										head = {f[1]}
										body = {f[2]}
									/>
								</Col>
							)
						})
					}
					</Row>
			    </MediaQuery>


					{/*
					<Col xs="12">
						<ImageCenter image = {Feat1}
							head = {'Manage Teams, Rooms, Adjudicators'}
							body = {'Yes, it manages those things'}
						/>
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

					*/}
				
			</section>
		);
	}
}
