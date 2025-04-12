import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <motion.div
        className="relative w-16 h-16 md:w-20 md:h-20"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#7928CA] border-r-[#FF0080]"
          animate={{
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#FF0080] border-r-[#7928CA]"
          animate={{
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;