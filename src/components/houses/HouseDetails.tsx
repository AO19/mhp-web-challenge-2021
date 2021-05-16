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
import swordsIcon from '../../assets/swordsIcon.png';
import seatsIcon from '../../assets/seatsIcon.png';
import titleIcon from '../../assets/titleIcon.png';
import memberIcon from '../../assets/memberIcon.png';
import cadetIcon from '../../assets/cadetIcon.png';

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
          <div className='house-details'>
            <div className='house-details__item'>
              <img className='img-icon' src={overlordIcon} alt='overlord' />
              {overlord?.data ? (
                <Link to={`/houses/${getIdfromUrl(overlord?.data?.url)}`}>
                  <span>{overlord?.data?.name}</span>
                </Link>
              ) : (
                <span>Overlord unknown</span>
              )}
            </div>
            <div className='house-details__item'>
              <img className='img-icon' src={kingIcon} alt='current lord' />
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
              <img className='img-icon' src={princeIcon} alt='heir' />
              {heir?.data ? (
                <Link to={`/characters/${getIdfromUrl(heir?.data?.url)}`}>
                  <span>{heir?.data?.name}</span>
                </Link>
              ) : (
                <span>Heir unknown</span>
              )}
            </div>
            <div className='house-details__item'>
              <img className='img-icon' src={founderIcon} alt='founder' />
              {founder ? (
                <Link to={`/characters/${getIdfromUrl(founder?.url)}`}>
                  <span>{founder?.name}</span>
                </Link>
              ) : (
                <span>Founder unknown</span>
              )}
            </div>
          </div>
          <div className='house-lists'>
            <div className='house-lists__item'>
              <img className='img-icon' src={swordsIcon} alt='weapons' />
              {data?.ancestralWeapons[0] !== '' ? (
                <>
                  {data?.ancestralWeapons?.map((weapon) => (
                    <span key={weapon}>{weapon},</span>
                  ))}
                </>
              ) : (
                <span>Ancestral weapons unknown</span>
              )}
            </div>
            <div className='house-lists__item'>
              <img className='img-icon' src={seatsIcon} alt='seats' />
              {data?.seats[0] !== '' ? (
                <>
                  {data?.seats?.map((seat) => (
                    <span key={seat}>{seat},</span>
                  ))}
                </>
              ) : (
                <span>Seats unknown</span>
              )}
            </div>
            <div className='house-lists__item'>
              <img className='img-icon' src={titleIcon} alt='title' />
              {data?.titles[0] !== '' ? (
                <>
                  {data?.titles?.map((title) => (
                    <span key={title}>{title},</span>
                  ))}
                </>
              ) : (
                <span>Titles unknown</span>
              )}
            </div>
            <div className='house-lists__item'>
              <img className='img-icon' src={memberIcon} alt='members' />
              {swornMembers?.data?.length !== 0 ? (
                <div className='long-lists'>
                  {swornMembers?.data?.map((member) => (
                    <Link
                      key={getIdfromUrl(member?.url)}
                      className='long-lists__item'
                      to={`/characters/${getIdfromUrl(member?.url)}`}
                    >
                      {member?.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <span>Sworn members unknown</span>
              )}
            </div>
            <div className='house-lists__item'>
              <img className='img-icon' src={cadetIcon} alt='cadet branches' />
              {cadetBranches?.data?.length !== 0 ? (
                <div className='long-lists'>
                  {cadetBranches?.data?.map((cadet) => (
                    <Link
                      key={getIdfromUrl(cadet?.url)}
                      className='long-lists__item'
                      to={`/houses/${getIdfromUrl(cadet?.url)}`}
                    >
                      {cadet?.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <span>Cadet branches unknown</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
