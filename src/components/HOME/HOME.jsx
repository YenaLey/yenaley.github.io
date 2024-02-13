import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import R3Fmobile from './R3Fmobile';
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
      <div className="container" style={{ height: "calc(100vh - 60px)", padding: "0px"}}>
        {isSmallScreen ? (<R3Fmobile />) : (<R3Fpc />)}
      </div>
    </Element>
  );
}

export default HOME;
