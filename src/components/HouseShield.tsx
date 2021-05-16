import React from 'react';
import { Link } from 'react-router-dom';
import skullIcon from '../assets/skull.png';
import getIdfromUrl from '../helpers/getIdfromUrl';
import { House } from '../types';

type HouseType = {
  house: House;
};

const HouseShield = ({ house }: HouseType) => {
  return (
    <Link
      to={`/houses/${getIdfromUrl(house?.url)}`}
      className='house-shield metal'
    >
      <span id='house-name'>{house.name}</span>
      {house.diedOut && <img id='house-dead' src={skullIcon} alt='skull' />}
    </Link>
  );
};

export default HouseShield;
