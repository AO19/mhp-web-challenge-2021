import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  useCharacter,
  useNestedBooks,
  useNestedHouses,
} from '../../helpers/fetchHooks';
import getIdfromUrl from '../../helpers/getIdfromUrl';

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
      <div className='character-profile'>
        <div className='back'>
          <button onClick={goBack}>Go back</button>
        </div>
        <div className='character-profile__content'>
          <h1>
            {characterData?.data?.name ? characterData?.data?.name : 'Unknown'}
            &nbsp; (
            {characterData?.data?.playedBy
              ? characterData?.data?.playedBy.map((actor) => (
                  <span key={actor}>{actor}</span>
                ))
              : 'Unknown'}
            )
          </h1>
          <div className='character-profile__img'>
            <img
              src='https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512'
              alt='profile pic'
            />
          </div>
          <div className='info'>
            <div>
              <p>
                Gender:&nbsp;
                {characterData?.data?.gender
                  ? characterData?.data?.gender
                  : 'Unknown'}
              </p>
              <p>
                Culture:&nbsp;
                {characterData?.data?.culture
                  ? characterData?.data?.culture
                  : 'Unknown'}
              </p>
            </div>
            <div>
              <p>
                Mother:&nbsp;
                {characterData?.data?.mother ? (
                  <Link
                    to={`/characters/${getIdfromUrl(
                      characterData?.data?.mother?.url
                    )}`}
                  >
                    {characterData?.data?.mother?.name}
                  </Link>
                ) : (
                  'Unknown'
                )}
              </p>
              <p>
                Father:&nbsp;
                {characterData?.data?.father ? (
                  <Link
                    to={`/characters/${getIdfromUrl(
                      characterData?.data?.father?.url
                    )}`}
                  >
                    {characterData?.data?.father?.name}
                  </Link>
                ) : (
                  'Unknown'
                )}
              </p>
              <p>
                Spouse:&nbsp;
                {characterData?.data?.spouse?.name ? (
                  <Link
                    to={`/characters/${getIdfromUrl(
                      characterData?.data?.spouse?.url
                    )}`}
                  >
                    {characterData?.data?.spouse?.name}
                  </Link>
                ) : (
                  'Unknown'
                )}
              </p>
            </div>
          </div>
          <div className='info-lists'>
            <ul>
              Allegiances:
              {allegiances
                ? allegiances?.data?.map((ally) => (
                    <li key={getIdfromUrl(ally?.url)}>{ally?.name}</li>
                  ))
                : 'Unknown'}
            </ul>
            <ul>
              Books:
              {books
                ? books?.data?.map((books) => (
                    <Link
                      key={getIdfromUrl(books?.url)}
                      to={`/books/${getIdfromUrl(books?.url)}`}
                    >
                      <li>{books?.name}</li>
                    </Link>
                  ))
                : 'Unknown'}
            </ul>
            <ul>
              Titles:
              {characterData?.data?.titles
                ? characterData?.data?.titles.map((title) => (
                    <li key={title}>{title}</li>
                  ))
                : 'Unknown'}
            </ul>
            <ul>
              Aliases:
              {characterData?.data?.aliases
                ? characterData?.data?.aliases.map((alias) => (
                    <li key={alias}>{alias}</li>
                  ))
                : 'Unknown'}
            </ul>
            <ul>
              TV Series:
              {characterData?.data?.tvSeries
                ? characterData?.data?.tvSeries.map((tvSerie) => (
                    <li key={tvSerie}>{tvSerie}</li>
                  ))
                : 'Unknown'}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
