import React from 'react';
import { Row, Col } from 'reactstrap';
import Sub from './Sub'

const style = {
	head: {
		height: '26px'
	},
	icon: {
		color: '#2196f3',
		opacity: '0.6'
	},
	h3: {
		fontWeight: '300',
		fontSize: '24px',
		fontFamily: 'Montserrat, sans-serif'
	}
}

export default () => {
	const clock = <i className="far fa-clock fa-5x" style={style.icon}></i>
	const tab = <i className="far fa-edit fa-5x" style={style.icon}></i>
	const eff = <i className="fas fa-chart-line fa-5x" style={style.icon}></i>
	return (
		<Row className="px-4 mx-4 mt-4">
			<Col className="text-center my-4" xs="12">
				<h3 style={style.h3}>Tabbr aims to be the preferred tabbing platform for debate tournaments</h3>
			</Col>
			<Sub title={'Save valuable time'} body={'Tabbr reduces setup time before rounds and makes sure tournaments run on time'} img={clock} />
			<Sub title={'Automated Tabbing'} body={'Scores are automatically tabulated, and sequentially generates upcoming fixtures'} img={tab} />
			<Sub title={'Maximize Efficiency'} body={'Published matches and online adjudicator/team submissions reduces unnecessary engagements'} img={eff} />
		</Row>
	)
};
