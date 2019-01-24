import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import SectionHeader from '../../UI/SectionHeader';

const style={
	p: {
		marginTop: '16px',
		marginBottom: '12px',
		fontSize:'18px',
		fontWeight:'600',
		color:'#0A4778',
		fontFamily:'Open Sans !important'
	},
	button: {
		minWidth: '200px'
	},
}

export default (props) => {
	return (
		<section>
			<SectionHeader title={'Formats'}/>
			<Row>
				<Col className="text-center mb-4 px-2" sm="12" md="4">
					<Col xs={{size:12}} style={{textAlign: 'center'}}>
						<img className="img-fluid rounded" src={require('../../../images/tabbrAP.png')} alt="TabbrAP Logo"></img>
					</Col>
					<p style={style.p}>Asian Parliament Format</p>
					<a href="https://www.tabbr.co" target="_blank" rel="noopener noreferrer"><Button className="mr-2 my-2" outline color="danger" style={style.button}>Learn More</Button></a>
				</Col>
				<Col className="text-center mb-4 px-2" sm="12" md="4">
					<Col xs={{size:12, order: 1}} style={{textAlign: 'center'}}>
						<img className="img-fluid rounded" src={require('../../../images/tabbrBP.png')} alt="TabbrBP Logo"></img>
					</Col>
					<p style={style.p}>British Parliament Format</p>
					<a href="https://www.tabbr.co" target="_blank" rel="noopener noreferrer"><Button className="mr-2 my-2" outline color="danger" style={style.button}>Learn More</Button></a>
				</Col>
				<Col className="text-center mb-4 px-2" sm="12" md="4">
					<Col xs={{size:12, order: 1}} style={{textAlign: 'center'}}>
						<img className="img-fluid rounded" src={require('../../../images/tabbrPF.png')} alt="TabbrPF Logo"></img>
					</Col>
					<p style={style.p}>Public Forum Format</p>
					<a href="https://www.tabbr.co" target="_blank" rel="noopener noreferrer"><Button className="mr-2 my-2" outline color="danger" style={style.button}>Learn More</Button></a>
				</Col>
			</Row>
		</section>
	)
};
