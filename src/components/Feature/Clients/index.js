import React from 'react';
import { Row, Col } from 'reactstrap';
import SectionHeader from '../../UI/SectionHeader';

import ClientCarousel from './ClientCarousel'

import CSB from '../../../images/clients/csb.jpg'
import ADS from '../../../images/clients/ads.jpg'
import UPDS from '../../../images/clients/upds.jpg'
import EDS from '../../../images/clients/eds.png'
import XDC from '../../../images/clients/xdc.jpg'

export default () => {
	return (
		<section className="pt-4">
			<SectionHeader title={'Tabbr Partners'}/>
			<Row>
				<Col xs="12 py-4">
					<ClientCarousel 
						images={[
							[CSB, 'CSB Debate Society'],
							[ADS, 'Ateneo Debate Society'],
							[UPDS, 'UP-Diliman Debate Society'],
							[EDS, 'Eugenio Debate Society'],
							[XDC, 'Xavier Debate Society'],
						]}
					/>
				</Col>
			</Row>
		</section>
	)
};
