import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import starsImg from '../assets/stars.png';
import castleImg from '../assets/castle.png';
import mountainsImg from '../assets/mountains.png';
import dragonImg from '../assets/dragon.png';
import castleIcon from '../assets/castleIcon.png';
import booksIcon from '../assets/booksIcon.png';
import knightIcon from '../assets/knightIcon.png';
import Header from './layout/Header';
import Splashscreen from './Splashscreen';

const Home = () => {
  const [showSplashscreen, setShowSplashscreen] = useState(true);
  const [lastYPosition, setLastYPosition] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  const handleScroll = () => {
    const yPosition = window.scrollY;
    if (yPosition > 350) {
      setLastYPosition(350);
    } else {
      setLastYPosition(yPosition);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, false);
    setTimeout(() => setShowSplashscreen(false), 2000);
    return () => {
      document.removeEventListener('scroll', handleScroll, false);
    };
  });

  return (
    <>
      {showSplashscreen ? (
        <Splashscreen />
      ) : (
        <>
          <Header />
          <section className='hero'>
            <motion.img
              id='stars'
              src={starsImg}
              alt='stars'
              animate={{ left: `${lastYPosition * 0.25}px` }}
            />
            <motion.img
              id='castle'
              src={castleImg}
              alt='castle'
              initial={{ top: -100 }}
              animate={{ top: `${lastYPosition * 0.5}px` }}
            />
            <motion.img
              id='dragon'
              src={dragonImg}
              alt='dragon'
              initial={{ transform: 'scale(1)' }}
              animate={{
                marginTop: `${lastYPosition * 0.5}px`,
                transform: `scale(${scrollYProgress.get() * 0.5})`,
              }}
            />
            <motion.a
              href='#explore'
              id='play'
              animate={{
                marginTop: `${lastYPosition * 1.5}px`,
              }}
            >
              Explore
            </motion.a>
            <img id='mountains' src={mountainsImg} alt='mountains' />
          </section>
          <section className='explore'>
            <h1>Explore the world of ice and fire</h1>
            <div className='explore-selection'>
              <Link to='/houses' className='explore-selection__item'>
                <img
                  className='explore-selection__img'
                  src={castleIcon}
                  alt='castle icon'
                />
                <h2 id='explore'> Explore all houses</h2>
              </Link>
              <Link to='/characters' className='explore-selection__item'>
                <img
                  className='explore-selection__img'
                  src={knightIcon}
                  alt='castle icon'
                />
                <h2>Explore all characters</h2>
              </Link>
              <Link to='/books' className='explore-selection__item'>
                <img
                  className='explore-selection__img'
                  src={booksIcon}
                  alt='castle icon'
                />
                <h2>Explore all books</h2>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
