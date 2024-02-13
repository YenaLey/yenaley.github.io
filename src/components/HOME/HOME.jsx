import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import R3Fpc from './R3Fpc';
import "./HOME.css"

function HomeMobile() {
  return (
    <div id="home" className="container">
      <div className="light yellow-light"></div>
      <div className="light blue-light"></div>
      <div className="light green-light"></div>
      <p>Hi, there!</p>
      <h1>I'm YENA</h1>
      <p></p>
    </div>
  );
}

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
      {isSmallScreen ? (<HomeMobile />) : (
        <div className="container" style={{ height: "calc(100vh - 60px)"}}>
          <R3Fpc />
        </div>
      )}
    </Element>
  );
}

export default HOME;

