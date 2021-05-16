import React from 'react';
import { Link } from 'react-router-dom';
import getIdfromUrl from '../helpers/getIdfromUrl';
import { House } from '../types';
import skullIcon from '../assets/skull.png';

type HouseType = {
  house: House;
};

const HouseListing = ({ house }: HouseType) => {
  return (
    <Link to={`/houses/${getIdfromUrl(house?.url)}`} className='house-listing'>
      <div className='house-listing__img'>
        {house?.diedOut ? (
          <img id='house-listing-dead' src={skullIcon} alt='skull' />
        ) : (
          <img src='https://source.unsplash.com/620x420/?castle' alt='castle' />
        )}
      </div>
      <div className='house-listing__content'>
        <h4>{house?.name}</h4>
      </div>
      {/* <span id='house-listing-name'>{house.name}</span>
      {house.diedOut && (
        <img id='house-listing-dead' src={skullIcon} alt='skull' />
      )} */}
    </Link>
  );
};

export default HouseListing;
