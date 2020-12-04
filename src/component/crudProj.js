import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { useRef } from 'react';

export default function CrudProj() {
  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [screen, setScreen] = useState(null);

  const refProj = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const newProject = {
      title: title,
      url: url,
      description: description,
      screenshot: screen,
    };

    console.log(newProject);

    axios.post('http://localhost:5000/project/add', newProject).then((res) => {
      console.log(res.data);
    });

    // window.location = '/';
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleUrl(e) {
    setUrl(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleScreen(e) {
    const imageValue = e.target.files[0];
    console.log(e.target.files[0]);
    setScreen(URL.createObjectURL(imageValue));
    setScreen(URL.createObjectURL(imageValue));
    //setScreen('weird');
    //setScreen(refProj.current);
    console.log(screen);
  }

  return (
    <div ref={refProj}>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='titleProject'>
          <Form.Label>Name of the Project</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Enter the name of the Project'
            onChange={handleTitle}
          />
        </Form.Group>

        <Form.Group controlId='url'>
          <Form.Label>URL</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Enter the url, of this project, if a url exist'
            onChange={handleUrl}
          />
        </Form.Group>

        <Form.Group controlId='decriptionProject'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Describe the project'
            onChange={handleDescription}
            rows={3}
          />
        </Form.Group>

        <Form.Group controlId='Screenshot'>
          <Form.Label>Screenshot</Form.Label>

          <Form.File onChange={handleScreen}></Form.File>
        </Form.Group>

        <Button type='submit'>Submit form</Button>
        <Image src={screen} thumbnail />
      </Form>
    </div>
  );
}
