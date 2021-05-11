import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import './App.scss';
import starsImg from './assets/stars.png';
import castleImg from './assets/castle.png';
import mountainsImg from './assets/mountains.png';
import dragonImg from './assets/dragon.png';

function App() {
  const [lastYPosition, setLastYPosition] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    const handleScroll = () => {
      const yPosition = window.scrollY;
      if (yPosition > 350) {
        setLastYPosition(350);
      } else {
        setLastYPosition(yPosition);
      }
    };
    document.addEventListener('scroll', handleScroll, false);
    return () => {
      document.removeEventListener('scroll', handleScroll, false);
    };
  });

  return (
    <>
      <header>
        <audio controls>
          <source
            src='http://soundfxcenter.com/television/game-of-thrones/8d82b5_Game_of_Thrones_Theme_Song.mp3'
            type='audio/mpeg'
          />
          Your browser does not support the audio element.
        </audio>
      </header>
      <section>
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
          href='#houses'
          id='play'
          animate={{
            marginTop: `${lastYPosition * 1.5}px`,
          }}
        >
          Explore
        </motion.a>
        <img id='mountains' src={mountainsImg} alt='mountains' />
      </section>
      <div className='houses' id='houses'>
        <h2>Houses</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque
          iure ab officia nesciunt voluptatem repellat tenetur nostrum? Beatae
          ipsum doloremque nulla veritatis quaerat illum culpa iure itaque,
          aspernatur repellendus.
        </p>
      </div>
    </>
  );
}

export default App;
