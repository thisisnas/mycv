import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class CRUDEd extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      school: '',
      from: new Date(),
      to: new Date(),
      description: '',
    };
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeSchool = (e) => {
    this.setState({ school: e.target.value });
  };

  onChangeFrom = (e) => {
    this.setState({ from: e.target.value });
  };

  onChangeTo = (e) => {
    this.setState({ to: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newEducation = {
      title: this.state.title,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description,
      school: this.state.school,
    };

    console.log(newEducation);

    axios
      .post('http://localhost:5000/education/add', newEducation)
      .then((res) => {
        console.log(res.data);
      });

    window.location = '/';
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId='titleEducation'>
            <Form.Label>Diploma</Form.Label>
            <Form.Control
              type='textarea'
              placeholder='Enter the name of the diploma'
              onChange={this.onChangeTitle}
            />
          </Form.Group>

          <Form.Group controlId='school'>
            <Form.Label>School</Form.Label>
            <Form.Control
              type='textarea'
              placeholder='Enter the name of the school'
              onChange={this.onChangeSchool}
            />
          </Form.Group>

          <Form.Group controlId='fromEducation' className='champs'>
            <Form.Label>From</Form.Label>
            <Form.Control
              type='date'
              placeholder='date'
              onChange={this.onChangeFrom}
            />
          </Form.Group>

          <Form.Group controlId='toEducation' className='champs'>
            <Form.Label>To</Form.Label>
            <Form.Control
              type='date'
              placeholder='date'
              onChange={this.onChangeTo}
            />
          </Form.Group>

          <Form.Group controlId='decriptionEducation'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              placeholder='Describe the diploma'
              onChange={this.onChangeDescription}
              rows={3}
            />
          </Form.Group>

          <Button type='submit'>Submit form</Button>
        </Form>
      </div>
    );
  }
}

export default CRUDEd;
