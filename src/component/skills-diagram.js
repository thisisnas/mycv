import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './../App.scss';

class SkillsDiagram extends React.Component {
  render() {
    return (
      <div className=''>
        <h1>Skills</h1>

        <div className='skills-line'>
          <span> HTML/CSS </span>
          <ProgressBar now={80} label='80%' />
        </div>
        <div className='skills-line'>
          <span> Javascript </span> <ProgressBar now='90' label='90%' />
        </div>
        <div className='skills-line'>
          <span> ReactJS </span> <ProgressBar now='70' label='70%' />
        </div>
        <div className='skills-line'>
          <span> NodeJS </span> <ProgressBar now='70' label='70%' />
        </div>
        <div className='skills-line'>
          <span> Java </span> <ProgressBar now='70' label='70%' />
        </div>
      </div>
    );
  }
}

export default SkillsDiagram;
