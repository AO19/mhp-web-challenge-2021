import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import gotAudio from '../assets/gotFanTheme.mp3';
import harp from '../assets/harfe.png';

const GotAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio = audioRef.current;

  const variants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [15, -15, 15],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        loop: Infinity,
      },
    },
  };

  useEffect(() => {
    if (audio) {
      audio.onended = () => {
        setIsPlaying(true);
        audio.play();
      };
    }
  }, [audio]);

  const handlePlayback = () => {
    const audio = audioRef.current;
    if (audio) {
      if (!isPlaying) {
        setIsPlaying(true);
        audio.play();
      } else {
        setIsPlaying(false);
        audio.pause();
      }
    }
  };

  return (
    <div id='audio-player'>
      <motion.div
        variants={variants}
        id='playButton'
        onClick={handlePlayback}
        animate={isPlaying ? 'animate' : 'initial'}
      >
        <img src={harp} alt='harp' />
      </motion.div>
      <audio ref={audioRef}>
        <source src={gotAudio} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default GotAudio;
