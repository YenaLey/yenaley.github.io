import React from 'react';
import { Element } from 'react-scroll';
import "../LINKS/LINKS.css"

function CONTACT() {
  return (
    <Element name="contact">
      <div className="container">
        <h1>CONTACT</h1>
        <div className="underline"></div>
        <div className="content-container">
          <div className="linkCard">
              <div className="linkImg" style={{width: "80px"}}>
                <img src="./free-icon-location-535239.png"></img>
              </div>
              <h2>Address</h2>
              <p>서울특별시 동대문구 휘경동</p>
          </div>
          <div className="linkCard">
              <div className="linkImg" style={{width: "80px"}}>
                <img src="./free-icon-instagram-1384031.png"></img>
              </div>
              <h2>Instagram</h2>
              <p>2ye._na</p>
          </div>
          <div className="linkCard">
              <div className="linkImg" style={{width: "80px"}}>
                <img src="./free-icon-mail-646094.png"></img>
              </div>
              <h2>Mail</h2>
              <p>yena.e121@gmail.com</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default CONTACT;
