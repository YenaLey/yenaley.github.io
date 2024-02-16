import React from 'react';
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../CONTACT/CONTACT.css"

function CONTACT() {

  return (
    <Element name="contact">
      <div className="container">
        <h1>CONTACT</h1>
        <div className="underline"></div>
        <div className="content-container">
          <a id="contactHref" href="https://github.com/YenaLey">
            <div className="contactCard">
              <div className="contactImg" style={{ width: "80px" }}>
                <img src="./icon/깃허브.png"></img>
              </div>
              <h2>Github</h2>
              <p>YenaLey</p>
            </div>
          </a>
          <a id="contactHref" href="https://www.instagram.com/2ye._na/">
            <div className="contactCard">
              <div className="contactImg" style={{ width: "80px" }}>
                <img src="./icon/인스타그램.png"></img>
              </div>
              <h2>Instagram</h2>
              <p>2ye._na</p>
            </div>
          </a>
          <a id="contactHref" href="mailto: yena.e121@gmail.com">
            <div className="contactCard">
              <div className="contactImg" style={{ width: "80px" }}>
                <img src="./icon/메일.png"></img>
              </div>
              <h2>Mail</h2>
              <p>yena.e121@gmail.com</p>
            </div>
          </a>
        </div>
        <div className="blank-container"></div>
        <div className="blank-container"></div>
        <div id="footer" className="container">
          <Link activeClass="active-menu-item" to="home" spy={true} smooth={true} duration={500}>YENA.</Link>
          <div className="footer-img-container">
            <a href="https://github.com/YenaLey">
              <div className="footer-img">
                <img src="./icon/깃허브_푸터.png"></img>
              </div>
            </a>
            <a href="https://www.instagram.com/2ye._na/">
              <div className="footer-img">
                <img src="./icon/인스타그램_푸터.png"></img>
              </div>
            </a>
            <a href="mailto: yena.e121@gmail.com">
              <div className="footer-img">
                <img src="./icon/메일_푸터.png"></img>
              </div>
            </a>
          </div>
          <p>Copyright 2024. 이예나. All rights reserved.</p>
          <p>icon designed by Flaticon(Freepik)</p>
        </div>
      </div>
    </Element>
  );
}

export default CONTACT;
