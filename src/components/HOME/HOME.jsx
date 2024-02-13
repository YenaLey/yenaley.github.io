import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HOME() {
  return (
    <Element name="home">
      <p>home</p>
    </Element>
  );
}

export default HOME;
