import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css'
// import 'odometer/themes/odometer-theme-car.css'

const style = {
  label: {
    fontSize:'20px'
  }
}

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      odo1: 0,
      odo2: 0,
      odo3: 0,
      odo4: 0,
    }
  }

  componentDidMount() {
    (() => {
      window.addEventListener('scroll', this.triggerOdomenter)
    })()
  }

  triggerOdomenter = () => {
    const y = window.scrollY
    if(y >= 2700 ) {
        this.setState({
          odo1: 2000,
          odo2: 4000,
          odo3: 6000,
          odo4: 8900,
        })
    }
  }

  render() {
    return (
      <section>
        <Container>
          <Row className="py-4">
            <Col className="text-center description my-4" xs="12">
              Some user metrics
            </Col>
            <Col className="text-center" xs="3">
              <Odometer
                value={this.state.odo1} 
                format="d"
                duration={500} />
              <p style={style.label}>Visitors</p>
            </Col>
            <Col className="text-center" xs="3">
              <Odometer
                value={this.state.odo2} 
                format="d"
                duration={500} />
              <p style={style.label}>Registered User</p>
            </Col>
            <Col className="text-center" xs="3">
              <Odometer
                value={this.state.odo3} 
                format="d"
                duration={500} />
              <p style={style.label}>Tournaments Hosted</p>
            </Col>
            <Col className="text-center" xs="3">
              <Odometer
                className="wow"
                value={this.state.odo4} 
                format="d"
                duration={500} />
              <p style={style.label}>Debaters Reached</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
