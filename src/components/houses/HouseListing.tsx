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
        <p>
          Weapons:&nbsp;
          {house?.ancestralWeapons[0] === ''
            ? house?.ancestralWeapons?.length - 1
            : house?.ancestralWeapons?.length}
        </p>
        <p>
          Sworn Members:&nbsp;
          {house?.swornMembers[0] === ''
            ? house?.swornMembers?.length - 1
            : house?.swornMembers?.length}
        </p>
        <p>
          Cadet Branches:&nbsp;
          {house?.cadetBranches[0] === ''
            ? house?.cadetBranches?.length - 1
            : house?.cadetBranches?.length}
        </p>
        <p>
          Seats:&nbsp;
          {house?.seats[0] === ''
            ? house?.seats?.length - 1
            : house?.seats?.length}
        </p>
      </div>
    </Link>
  );
};

export default HouseListing;
