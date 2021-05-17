import React from 'react';
import ripIcon from '../assets/ripIcon.png';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img id='tombstone' src={ripIcon} alt='tombstone' />
      <h1>
        Here lies <span>everyone</span> and the page you were looking for
      </h1>
      <h4>404</h4>
      <h2>
        You can thank&nbsp;
        <a
          href='https://twitter.com/GRRMspeaking'
          target='_blank'
          rel='noreferrer'
        >
          George R. R. Martin
        </a>{' '}
        for that
      </h2>
    </div>
  );
};

export default NotFound;
