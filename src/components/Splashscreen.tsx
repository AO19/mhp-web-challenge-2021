import React from 'react';
import { motion } from 'framer-motion';

const Splashscreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { duration: 2.5 } }}
      className='splashscreen'
    >
      <h1>an app of ice and fire</h1>
    </motion.div>
  );
};

export default Splashscreen;
