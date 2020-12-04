import axios from 'axios';
import React from 'react';
import InfoLine from './info-line';
import FadeIn from './fade-in';

class VExp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      experiences: '',
      isLoading: true,
      isVisible: '',
      refexp: React.createRef(),
    };
    this.refexp = React.createRef();
  }

  async componentDidMount() {
    await axios
      .get('http://localhost:5000/experience/')
      .then((res) => {
        this.setState({ experiences: res.data });
      })
      .catch((error) => {
        console.log(error);
      });

    const tmp = this.state.experiences.map((row) => {
      row.from = new Date(row.from);
      row.to = new Date(row.to);
    });

    this.setState({ isLoading: false });
  }

  componentDidUpdate() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.changeOpacity();
        console.log('Herrre I am');
      }
    });
  }

  changeOpacity() {
    this.setState({ isVisible: 'isVisible' });
  }

  handleClick = (evt) => {
    if (evt.detail === 7) {
      window.location = '/crudexp';
    }
  };

  render() {
    const { isLoading, experiences } = this.state;

    if (isLoading) {
      return <div> Loading...</div>;
    }
    return (
      <div
        id='experience'
        className='gap-top'
        onClick={this.handleClick}
        ref={this.refexp}
      >
        <FadeIn>
          <h2 className='title'>Work Experience</h2>
        </FadeIn>

        {experiences.map((row) => {
          return (
            <FadeIn ref={this.ref}>
              <InfoLine line={row} />
            </FadeIn>
          );
        })}
      </div>
    );
  }
}

export default VExp;
