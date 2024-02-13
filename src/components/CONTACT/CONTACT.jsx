import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../LINKS/LINKS.css"

function CONTACT() {

  return (
    <Element name="contact">
      <div className="container">
        <h1>CONTACT</h1>
        <div className="underline"></div>
        <div className="content-container">
          <div className="linkCard">
            <div className="linkImg" style={{ width: "80px" }}>
              <img src="./icon/주소.png"></img>
            </div>
            <h2>Address</h2>
            <p>서울특별시 동대문구 휘경동</p>
          </div>
          <div className="linkCard">
            <div className="linkImg" style={{ width: "80px" }}>
              <img src="./icon/인스타그램.png"></img>
            </div>
            <h2>Instagram</h2>
            <p>2ye._na</p>
          </div>
          <div className="linkCard">
            <div className="linkImg" style={{ width: "80px" }}>
              <img src="./icon/메일.png"></img>
            </div>
            <h2>Mail</h2>
            <p>yena.e121@gmail.com</p>
          </div>
        </div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default CONTACT;
