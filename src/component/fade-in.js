import React, { useState, useEffect, useRef } from 'react';

export default function FadeIn(props) {
  const [isVisible, setIsVisible] = useState(false);

  const refFade = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      }
    });
    observer.observe(refFade.current);
    return () => {
      observer.unobserve(refFade.current);
    };
  }, []);
  return (
    <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={refFade}>
      {props.children}
    </div>
  );
}
