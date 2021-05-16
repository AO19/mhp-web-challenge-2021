import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  useCharacter,
  useNestedBooks,
  useNestedHouses,
} from '../../helpers/fetchHooks';
import getIdfromUrl from '../../helpers/getIdfromUrl';
import motherIcon from '../../assets/motherIcon.png';
import fatherIcon from '../../assets/fatherIcon.png';
import spouseIcon from '../../assets/spouseIcon.png';
import genderIcon from '../../assets/genderIcon.png';
import cultureIcon from '../../assets/cultureIcon.png';
import titleIcon from '../../assets/titleIcon.png';
import aliasIcon from '../../assets/aliasIcon.png';
import allyIcon from '../../assets/allyIcon.png';
import tvIcon from '../../assets/tvIcon.png';
import booksIcon from '../../assets/booksIcon.png';

type ParamsType = {
  characterId: string;
};

const CharacterDetails = () => {
  const history = useHistory();
  const { characterId } = useParams<ParamsType>();
  const characterData = useCharacter(characterId);
  const allegiances = useNestedHouses(characterData?.data?.allegiances);
  const books = useNestedBooks(characterData?.data?.books);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className='character'>
      <div className='back'>
        <button onClick={goBack}>Go back</button>
      </div>
      <div className='character__header'>
        <h1>
          {characterData?.data?.name ? characterData?.data?.name : 'Unknown'}
        </h1>
        <h2>
          {characterData?.data?.playedBy
            ? characterData?.data?.playedBy.map((actor) => (
                <span key={actor}>-{actor}-</span>
              ))
            : 'Unknown'}
        </h2>
        <img
          id='profile-img-tritter'
          src='https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512'
          alt='profile pic'
        />
        <h4>
          {characterData?.data?.born} - {characterData?.data?.died}
        </h4>
        <div className='character-details'>
          <div className='character-details__item'>
            <img className='img-icon' src={motherIcon} alt='mother' />
            {characterData?.data?.mother ? (
              <Link
                to={`/characters/${getIdfromUrl(
                  characterData?.data?.mother?.url
                )}`}
              >
                <span>{characterData?.data?.mother?.name}</span>
              </Link>
            ) : (
              <span>Mother unknown</span>
            )}
          </div>
          <div className='character-details__item'>
            <img className='img-icon' src={fatherIcon} alt='father' />
            {characterData?.data?.father ? (
              <Link
                to={`/characters/${getIdfromUrl(
                  characterData?.data?.father?.url
                )}`}
              >
                <span>{characterData?.data?.father?.name}</span>
              </Link>
            ) : (
              <span>Father unknown</span>
            )}
          </div>
          <div className='character-details__item'>
            <img className='img-icon' src={spouseIcon} alt='spouse' />
            {characterData?.data?.spouse ? (
              <Link
                to={`/characters/${getIdfromUrl(
                  characterData?.data?.spouse?.url
                )}`}
              >
                <span>{characterData?.data?.spouse?.name}</span>
              </Link>
            ) : (
              <span>Spouse unknown</span>
            )}
          </div>
          <div className='character-details__item'>
            <img className='img-icon' src={genderIcon} alt='gender' />
            {characterData?.data?.gender ? (
              <span>{characterData?.data?.gender}</span>
            ) : (
              <span>Gender unknown</span>
            )}
          </div>
          <div className='character-details__item'>
            <img className='img-icon' src={cultureIcon} alt='culture' />
            {characterData?.data?.culture ? (
              <span>{characterData?.data?.culture}</span>
            ) : (
              <span>Culture unknown</span>
            )}
          </div>
        </div>
        <div className='character-details-lists'>
          <div className='character-details-lists__item'>
            <img className='img-icon' src={titleIcon} alt='titles' />
            {characterData?.data?.titles[0] !== '' ? (
              <ul>
                {characterData?.data?.titles?.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            ) : (
              <span>Titles unknown</span>
            )}
          </div>
          <div className='character-details-lists__item'>
            <img className='img-icon' src={aliasIcon} alt='aliases' />
            {characterData?.data?.aliases[0] !== '' ? (
              <ul>
                {characterData?.data?.aliases?.map((alias) => (
                  <li key={alias}>{alias}</li>
                ))}
              </ul>
            ) : (
              <span>Aliases unknown</span>
            )}
          </div>
          <div className='character-details-lists__item'>
            <img className='img-icon' src={allyIcon} alt='allegiances' />
            {allegiances?.data ? (
              <ul>
                {allegiances?.data?.map((allegiance) => (
                  <li key={getIdfromUrl(allegiance?.url)}>
                    <Link to={`/houses/${getIdfromUrl(allegiance?.url)}`}>
                      {allegiance?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Allegiances unknown</span>
            )}
          </div>
          <div className='character-details-lists__item'>
            <img className='img-icon' src={booksIcon} alt='books' />
            {books?.data ? (
              <ul>
                {books?.data?.map((book) => (
                  <li key={getIdfromUrl(book?.url)}>
                    <Link to={`/books/${getIdfromUrl(book?.url)}`}>
                      {book?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Books unknown</span>
            )}
          </div>
          <div className='character-details-lists__item'>
            <img className='img-icon' src={tvIcon} alt='tv' />
            {characterData?.data?.tvSeries[0] !== '' ? (
              <ul>
                {characterData?.data?.tvSeries?.map((tv) => (
                  <li key={tv}>{tv}</li>
                ))}
              </ul>
            ) : (
              <span>Seasons unknown</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
