import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../helpers/fetchHooks';
import getIdfromUrl from '../helpers/getIdfromUrl';
import { Character } from '../types';
import FeedItem from './FeedItem';

const Characters = () => {
  const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);

  useEffect(() => {
    fetchNext();
  }, []);

  const fetchNext = async () => {
    const res = await fetchCharacters(page, pageSize);
    if (res) {
      setFetchedCharacters(fetchedCharacters.concat(res?.data));
      setHasMore(res.link);
      setPage(page + 1);
    }
  };

  return (
    <div className='dritter-layout'>
      <nav className='dritter-layout__nav'>
        <div>
          <img />
          <h4>Dritter</h4>
        </div>
        <ul>
          <li>
            <img />
            <h2>Homepage</h2>
          </li>
          <li>
            <img />
            <h2>Explore</h2>
          </li>
          <li>
            <img />
            <h2>Messages</h2>
          </li>
          <li>
            <img />
            <h2>Profile</h2>
          </li>
        </ul>
      </nav>
      <div className='dritter-layout__feed'>
        <div className='feed__header'>
          <h1>Homepage</h1>
        </div>
        <div className='feed__status'>
          <div className='feed__status--user'>
            <img
              className='profile__img'
              src='https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64'
              alt='profile pic'
            />
          </div>
          <div className='feed__status--controls'>
            <div className='feed__status--input'>
              <textarea placeholder="What's new?" />
            </div>
            <div className='feed__status--button'>
              <div></div>
              <button>Send Fire</button>
            </div>
          </div>
        </div>
        <div className='feed__list'>
          {fetchedCharacters?.map((character, i) => (
            <FeedItem key={getIdfromUrl(character?.url)} info={character} />
          ))}
          {hasMore ? (
            <button onClick={fetchNext}>Load more</button>
          ) : (
            <p>The End</p>
          )}
        </div>
      </div>
      <div className='dritter-layout__trends'>
        <div className='trends__box'>
          <h4 className='trends__box-header'>Trends for you</h4>
          <div className='trends__box-item'>
            <p>Trends in The Westerlands</p>
            <p>*doit</p>
            <p>10.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Westerlands</p>
            <p>*doit</p>
            <p>10.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Westerlands</p>
            <p>*doit</p>
            <p>10.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Westerlands</p>
            <p>*doit</p>
            <p>10.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Westerlands</p>
            <p>*doit</p>
            <p>10.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Westerlands</p>
            <p>*doit</p>
            <p>10.100 Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
