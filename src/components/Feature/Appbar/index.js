import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

const style = {
  fixedTop: {
    position: 'fixed',
    top:'0'
  },
  textDefault: {
    opacity:'0',
    zIndex:'999'
  },
  textScroll: {
    opacity:'1',
    zIndex:'999'
  }
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      top: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  componentDidMount() {
    (() => {
      window.addEventListener('scroll', this.handleScroll)
    })()
  }

  handleScroll = (e) => {
    const scrollable = document.body.scrollHeight - window.innerHeight
    const y = window.scrollY
    const bool = 100*y/scrollable < 40 ? true : false;

    this.setState ({
      top: bool
    })
  }

  render() {
    console.log(this.state.top)
    return (
      <div 
        className="fixed-top" 
        style={this.state.top ? style.textDefault : style.textScroll}
        >
        <Navbar color="faded" light expand="md">
          <Container>
            <NavbarBrand href="/">tabbr</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Sign Up
                    </DropdownItem>
                    <DropdownItem>
                      Login
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}