/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../helpers/fetchHooks';
import getIdfromUrl from '../../helpers/getIdfromUrl';
import { Character } from '../../types';
import FeedItem from './FeedItem';

const Characters = () => {
  const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(50);

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
  );
};

export default Characters;
