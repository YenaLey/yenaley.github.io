import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./LINKS.css"

function LINKS() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Element name="links">
      <div className="container">
        <h1>LINKS</h1>
        <div className="underline"></div>
        <div className="content-container">
          <motion.div className="linkCard"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <div className="linkImg">
              <img src="./icon/깃허브.png"></img>
            </div>
            <h2>Github</h2>
            <p>깃깃깃</p>
          </motion.div>
          <motion.div className="linkCard"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <div className="linkImg">
              <img src="./icon/깃허브.png"></img>
            </div>
            <h2>Github</h2>
            <p>깃깃깃</p>
          </motion.div>
          <motion.div className="linkCard"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <div className="linkImg">
              <img src="./icon/깃허브.png"></img>
            </div>
            <h2>Github</h2>
            <p>깃깃깃</p>
          </motion.div>
        </div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default LINKS;
