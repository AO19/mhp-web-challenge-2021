import React from 'react';
import { Link } from 'react-router-dom';
import getIdfromUrl from '../helpers/getIdfromUrl';
import { Character } from '../types';

type FeedItemType = {
  info: Character;
};

const FeedItem = ({ info }: FeedItemType) => {
  return (
    <Link
      to={`characters/${getIdfromUrl(info?.url)}`}
      className='feed__list-item'
    >
      <div className='feed__list-item-user'>
        <img
          className='profile__img'
          src='https://source.unsplash.com/64x64/?profile'
          alt='profile pic'
        />
      </div>
      <div className='feed__list-item-content'>
        <div className='feed__list-item-content--meta'>
          <span>
            <strong>{info?.name}</strong>
          </span>
          <span>{`@${getIdfromUrl(info?.url)}`}</span>-<span>{info?.born}</span>
        </div>
        <div className='feed__list-item-content--text'>
          <p>Played by: {info?.playedBy}</p>
          <p>Born as: {info?.culture}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeedItem;
