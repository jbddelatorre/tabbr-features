import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../../../animate/animate.css'

const style = {
  fixedTop: {
    position: 'fixed',
    top:'0'
  },
  navbar: {
    backgroundColor:'#2196f3',
    boxShadow: '0 2px 20px 0 #aaa'
  },
  textDefault: {
    opacity:'0',
    zIndex:'999',
    height: '0px',
    transition: 'opacity 1s, height 2s',
  },
  textScroll: {
    display:'block',
    opacity:'1',
    zIndex:'999',
    transition: 'opacity 1s'
  },
  main: {
    color:'white',
    fontSize: '28px'
  },
  sub: {
    color:'white'
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
    // const scrollable = document.body.scrollHeight - window.innerHeight
    const y = window.scrollY
    // const bool = 100*y/scrollable < 20 ? true : false;
    const bool = y < 500 ? true : false;

    this.setState ({
      top: bool
    })
  }

  render() {
    return (
      <div 
        className="fixed-top" 
        style={this.state.top ? style.textDefault : style.textScroll}
        >
        <Navbar className="animated fadeIn" color="faded" light expand="md" style={style.navbar}>
            <NavbarBrand href="/" style={style.main}>tabbr</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/" style={style.sub}>Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap" style={style.sub}>Login</NavLink>
                </NavItem>
                {/*<UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={style.sub}>
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
                </UncontrolledDropdown>*/}
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}