import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./LINKS.css"

function LINKS() {

  return (
    <Element name="links">
      <div className="container">
        <h1>LINKS</h1>
        <div className="underline"></div>
        <div className="content-container">
          <div className="linkCard">
            <div className="linkImg">
              <img src="./icon/깃허브.png"></img>
            </div>
            <h2>Github</h2>
            <p>깃깃깃</p>
          </div>
          <div className="linkCard">
            <div className="linkImg">
              <img src="./icon/깃허브.png"></img>
            </div>
            <h2>Github</h2>
            <p>깃깃깃</p>
          </div>
          <div className="linkCard">
            <div className="linkImg">
              <img src="./icon/깃허브.png"></img>
            </div>
            <h2>Github</h2>
            <p>깃깃깃</p>
          </div>
        </div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default LINKS;
