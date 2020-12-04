import axios from 'axios';
import React, { useEffect } from 'react';
import InfoLine from './info-line';
import FadeIn from './fade-in';

class VEd extends React.Component {
  constructor(props) {
    super();
    this.state = {
      educations: '',
      isLoading: true,
    };
    this.refed = React.createRef();
  }

  async componentDidMount() {
    await axios
      .get('http://localhost:5000/education/')
      .then((res) => {
        this.setState({ educations: res.data });
      })
      .catch((error) => {
        console.log(error);
      });

    this.state.educations.map((row) => {
      row.from = new Date(row.from);
      row.to = new Date(row.to);
    });

    this.setState({ isLoading: false });
    console.log(
      `this is the thing there I want to see : ${this.refed.current.offsetTop}`
    );
  }

  handleClick = (evt) => {
    if (evt.detail === 7) {
      window.location = '/cruded';
    }
  };

  render() {
    const { isLoading, educations } = this.state;

    if (isLoading) {
      return <div> Loading... </div>;
    }
    return (
      <div
        id='education'
        className='gap-top'
        onClick={this.handleClick}
        ref={this.refed}
      >
        <FadeIn>
          <h2 className='title'>Education</h2>
        </FadeIn>
        {educations.map((row) => {
          let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
          return (
            <FadeIn>
              <InfoLine line={row} />
            </FadeIn>
          );
        })}
      </div>
    );
  }
}

export default VEd;
