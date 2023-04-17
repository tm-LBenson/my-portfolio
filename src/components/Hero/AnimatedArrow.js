import React from 'react';
import { motion } from 'framer-motion';

const vPath1 =
  'M12 19.164L18.207 13.957L16.793 12.543L12 17.336L7.207 12.543L5.793 13.957L12 19.164Z';
const vPath2 =
  'M12 13.514L18.207 7.307L16.793 5.893L12 10.686L7.207 5.893L5.793 7.307L12 13.514Z';

const AnimatedArrow = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
    >
      <motion.path
        d={vPath1}
        stroke="hsl(35, 75%, 55%)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3.5,
          ease: 'easeInOut',
          delay: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      <motion.path
        d={vPath2}
        stroke="hsl(35, 75%, 55%)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          delay: 1,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.svg>
  );
};

export default AnimatedArrow;
