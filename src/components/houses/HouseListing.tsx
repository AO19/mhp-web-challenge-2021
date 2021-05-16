import React from 'react';
import { Link } from 'react-router-dom';
import getIdfromUrl from '../../helpers/getIdfromUrl';
import { House } from '../../types';
import skullIcon from '../../assets/skull.png';

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
          <img
            src='https://images.unsplash.com/photo-1572000140626-01d664c09c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&h=420'
            alt='castle'
          />
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
