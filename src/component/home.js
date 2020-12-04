import axios from 'axios';
import React from 'react';
import VExp from './vExp';
import VEd from './vEd';
import VProj from './vProj';
import Navi from './nav';
import About from './about';
import SkillsDiagram from './skills-diagram';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      experiences: '',
      educations: '',
      isLoading: true,
    };
    this.refexp = React.createRef();
    this.refed = React.createRef();
  }

  render() {
    return (
      <div className='homeManage'>
        <Navi />
        <Container fluid='true' className='gap-top '>
          <Row noGutters>
            <Col md={5} className=''>
              <About />
            </Col>
            <Col md={{ span: 5, offset: 2 }}>
              <SkillsDiagram />
            </Col>
          </Row>
        </Container>

        <VExp ref={this.refexp} />
        <VEd ref={this.refed} />
        <VProj />
      </div>
    );
  }
}

export default Home;
