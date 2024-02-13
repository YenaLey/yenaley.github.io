import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import R3Fm from './R3Fm';
import R3Fpc from './R3Fpc';

function HOME() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Element name="home">
      <div className="container" style={{ height: "100vh", padding: '0' }}>
        {isSmallScreen ? (<R3Fm />) : (<R3Fpc />)}
      </div>
    </Element>
  );
}

export default HOME;
