import axios from 'axios';
import React from 'react';
import { Link } from 'react-scroll';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/initial-rune.png';
import vEd from './vEd';

class Navi extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cssName: '',
      scrollPos: 0,
    };
    this.refed = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if (e.currentTarget.scrollY > this.state.scrollPos) {
        this.setState({ cssName: 'nav-hide nav-background' });
        this.setState({ scrollPos: e.currentTarget.scrollY });
      } else {
        this.setState({ cssName: 'nav-visible nav-background' });
        this.setState({ scrollPos: e.currentTarget.scrollY });
      }
    });
  }

  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          bg='dark'
          variant='dark'
          fixed='top'
          expand='lg'
          className={this.state.cssName}
        >
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link
                eventKey='1'
                as={Link}
                to='about'
                activeClass='active'
                spy={true}
                offset={-70}
                smooth={true}
                duration={2000}
                className='pointer'
              >
                About
              </Nav.Link>
              <Nav.Link
                eventKey='2'
                as={Link}
                to='experience'
                spy={true}
                activeClass='active'
                offset={-70}
                smooth={true}
                duration={1500}
                className='pointer'
              >
                Experiences
              </Nav.Link>
              <Nav.Link
                activeClass='active'
                eventKey='3'
                as={Link}
                to='education'
                spy={true}
                offset={-70}
                smooth={true}
                duration={2000}
                className='pointer'
              >
                Education
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navi;
