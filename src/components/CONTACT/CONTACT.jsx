import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../LINKS/LINKS.css"

function CONTACT() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Element name="contact">
      <div className="container">
        <h1>CONTACT</h1>
        <div className="underline"></div>
        <div className="content-container">
          <motion.div className="linkCard"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}>
              <div className="linkImg" style={{width: "80px"}}>
                <img src="./icon/주소.png"></img>
              </div>
              <h2>Address</h2>
              <p>서울특별시 동대문구 휘경동</p>
          </motion.div>
          <motion.div className="linkCard"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}>
              <div className="linkImg" style={{width: "80px"}}>
                <img src="./icon/인스타그램.png"></img>
              </div>
              <h2>Instagram</h2>
              <p>2ye._na</p>
          </motion.div>
          <motion.div className="linkCard"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}>
              <div className="linkImg" style={{width: "80px"}}>
                <img src="./icon/메일.png"></img>
              </div>
              <h2>Mail</h2>
              <p>yena.e121@gmail.com</p>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

export default CONTACT;
