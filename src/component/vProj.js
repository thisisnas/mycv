import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import InfoLine from './info-line';
import FadeIn from './fade-in';

export default function VProj() {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      fetchProjects();
    }

    return () => {
      console.log('Fetching is done');
    };
  });

  async function fetchProjects() {
    await axios
      .get('http://localhost:5000/project/')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }

  if (isLoading) {
    return <div> Loading...</div>;
  } else {
    if (projects.length > 0) {
      return (
        <div id='project' className='gap-top'>
          <FadeIn>
            <h2 className='title'>Projects</h2>
          </FadeIn>
          {projects.map((row) => {
            return (
              <FadeIn>
                <InfoLine line={row} type='project' />
              </FadeIn>
            );
          })}
        </div>
      );
    } else {
      return <></>;
    }
  }
}
