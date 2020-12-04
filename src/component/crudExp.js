import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class CRUDExp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      company: '',
      from: '', //new Date(),
      to: '', //new Date(),
      description: '',
    };
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeCompany = (e) => {
    this.setState({ company: e.target.value });
  };

  onChangeFrom = (e) => {
    const fdate = new Date('2020-10-01T00:00:00.000Z');
    console.log(fdate);
    this.setState({ from: fdate });
  };

  onChangeTo = (e) => {
    const fdate = new Date(e.target.value);
    this.setState({ to: fdate });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onSubmit = (e) => {
    //e.persist();
    e.preventDefault();

    const newExperience = {
      title: this.state.title,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description,
      company: this.state.company,
    };

    console.log(newExperience);
    axios
      .post('http://localhost:5000/experience/add', newExperience)
      .then((res) => console.log(res.data));

    window.location = '/';
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId='titleExperience'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='textarea'
              placeholder='Enter the name of your mission'
              onChange={this.onChangeTitle}
            />
          </Form.Group>

          <Form.Group controlId='companyExperience'>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type='textarea'
              placeholder='Enter the name of the company'
              onChange={this.onChangeCompany}
            />
          </Form.Group>

          <Form.Group controlId='fromExperience' className='champs'>
            <Form.Label>From</Form.Label>
            <Form.Control
              type='date'
              placeholder='date'
              onChange={this.onChangeFrom}
            />
          </Form.Group>

          <Form.Group controlId='toExperience' className='champs'>
            <Form.Label>To</Form.Label>
            <Form.Control
              type='date'
              placeholder='date'
              onChange={this.onChangeTo}
            />
          </Form.Group>

          <Form.Group controlId='decriptionExperience'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              placeholder='Describe this experience'
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

export default CRUDExp;
