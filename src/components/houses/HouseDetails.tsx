import React from 'react';
import { useParams } from 'react-router';
import {
  useNestedHouses,
  useCharacter,
  useHouse,
  useNestedCharacters,
} from '../../helpers/fetchHooks';
import { Link } from 'react-router-dom';
import getIdfromUrl from '../../helpers/getIdfromUrl';
import kingIcon from '../../assets/kingIcon.png';
import overlordIcon from '../../assets/overlordIcon.png';
import princeIcon from '../../assets/princeIcon.png';
import founderIcon from '../../assets/founderIcon.png';

type HouseParams = {
  houseId: string;
};

const HouseDetails = () => {
  const { houseId } = useParams<HouseParams>();
  const { isLoading, data } = useHouse(houseId);
  const currentLord = useCharacter(data?.currentLord);
  const heir = useCharacter(data?.heir);
  const overlord = useHouse(getIdfromUrl(data?.overlord ?? ''));
  const { data: founder } = useCharacter(data?.founder);
  const cadetBranches = useNestedHouses(data?.cadetBranches ?? []);
  const swornMembers = useNestedCharacters(data?.swornMembers ?? []);

  return (
    <div className='house'>
      <div className='house-paper'>
        <div className='house-header'>
          <h1 className='house-header__name'>
            {data?.name}&nbsp;({data?.founded}-{data?.diedOut})
          </h1>
          <h2 className='house-header__id'>{houseId}</h2>
        </div>
        <div className='house-content'>
          <div className='gallery'>
            <figure className='gallery__item gallery__item--1'>
              <img
                src='https://images.unsplash.com/photo-1572000140626-01d664c09c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&h=420'
                alt='castle'
                className='gallery__img'
              />
            </figure>
            <figure className='gallery__item gallery__item--2'>
              <img
                src='https://images.unsplash.com/photo-1572000140626-01d664c09c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&h=420'
                alt='castle'
                className='gallery__img'
              />
            </figure>
            <figure className='gallery__item gallery__item--3'>
              <img
                src='https://images.unsplash.com/photo-1572000140626-01d664c09c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&h=420'
                alt='castle'
                className='gallery__img'
              />
            </figure>
            <figure className='gallery__item gallery__item--4'>
              <img
                src='https://images.unsplash.com/photo-1572000140626-01d664c09c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&h=420'
                alt='castle'
                className='gallery__img'
              />
            </figure>
            <figure className='gallery__item gallery__item--5'>
              <img
                src='https://images.unsplash.com/photo-1572000140626-01d664c09c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&h=420'
                alt='castle'
                className='gallery__img'
              />
            </figure>
          </div>
          <h2>{data?.region ? data?.region : 'Unknown region'}</h2>
          <h4>{data?.words ? `"${data?.words}"` : 'Unknown words'}</h4>
          <h4>
            {data?.coatOfArms ? data?.coatOfArms : 'Unknown coat of arms'}
          </h4>
          <div className='cadets'>
            <ul>
              {cadetBranches?.data?.map((cadet) => (
                <li>{cadet.name}</li>
              ))}
            </ul>
          </div>
          <div className='house-details'>
            <div className='house-details__item'>
              <img src={overlordIcon} alt='overlord' />
              {overlord?.data ? (
                <Link to={`/houses/${getIdfromUrl(overlord?.data?.url)}`}>
                  <span>{overlord?.data?.name}</span>
                </Link>
              ) : (
                <span>Overlord unknown</span>
              )}
            </div>
            <div className='house-details__item'>
              <img src={kingIcon} alt='current lord' />
              {currentLord?.data ? (
                <Link
                  to={`/characters/${getIdfromUrl(currentLord?.data?.url)}`}
                >
                  <span>{currentLord?.data?.name}</span>
                </Link>
              ) : (
                <span>Current lord unknown</span>
              )}
            </div>
            <div className='house-details__item'>
              <img src={princeIcon} alt='heir' />
              {heir?.data ? (
                <Link to={`/characters/${getIdfromUrl(heir?.data?.url)}`}>
                  <span>{heir?.data?.name}</span>
                </Link>
              ) : (
                <span>Heir unknown</span>
              )}
            </div>
            <div className='house-details__item'>
              <img src={founderIcon} alt='founder' />
              {founder ? (
                <Link to={`/characters/${getIdfromUrl(founder?.url)}`}>
                  <span>{founder?.name}</span>
                </Link>
              ) : (
                <span>Founder unknown</span>
              )}
            </div>
            {/* <div className='swornMembers'>
              <ul>
                <button onClick={() => swornMembers.refetch()}>Show</button>
                Sworn Members ({data?.swornMembers.length})
                {swornMembers.isLoading
                  ? 'Loading'
                  : swornMembers?.data?.map((member) => <li>{member.name}</li>)}
              </ul>
            </div>
            <p>{currentLord?.data?.name}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
