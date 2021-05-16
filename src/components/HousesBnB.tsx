import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { allRegions } from '../helpers/allfilters';
import { useHouses, useAllHouses } from '../helpers/fetchHooks';
import { House } from '../types';
import HouseListing from './HouseListing';

const { REACT_APP_API_URL } = process.env;

const HousesBnB = () => {
  const [fetchedHouses, setFetchedHouses] = useState<House[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const [region, setRegion] = useState('');
  const [hasDiedOut, setHasDiedOut] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const _ = undefined;

  const {
    isLoading: allLoading,
    data: allData,
    refetch: refetchAll,
  } = useAllHouses(showAll);

  useEffect(() => {
    const firstFetch = async () => {
      const response = await fetchHouses();
      if (response) {
        setFetchedHouses(response?.data);
        setHasMore(response?.link);
      }
    };

    firstFetch();
    return () => {
      setHasMore(false);
      setFetchedHouses([]);
      setPage(1);
      setRegion('');
      setHasDiedOut(false);
      setShowAll(false);
    };
  }, []);

  useEffect(() => {
    if (showAll) {
      setRegion('');
      setHasDiedOut(false);
      refetchAll();
    }
  }, [showAll, refetchAll]);

  const fetchHouses = async (
    page: number = 1,
    region?: string,
    hasDiedOut?: boolean
  ) => {
    setLoading(true);
    try {
      const { data, headers } = await axios.get<House[]>(
        `${REACT_APP_API_URL}/houses?page=${page}&pageSize=50&region=${
          region ?? ''
        }&hasDiedOut=${hasDiedOut ?? ''}`
      );
      const link: string = headers.link;
      return { data, link: link.includes('rel="next"') };
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegionChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const response = await fetchHouses(1, event.target.value, hasDiedOut);
    if (response) {
      setFetchedHouses(response?.data);
      setHasMore(response?.link);
    }
    setPage(1);
    setRegion(event.target.value);
  };

  const handleDiedOutChange = async () => {
    const response = await fetchHouses(1, region, !hasDiedOut);
    if (response) {
      setFetchedHouses(response?.data);
      setHasMore(response?.link);
    }
    setPage(1);
    setShowAll(false);
    setHasDiedOut(!hasDiedOut);
  };

  const handleShowAll = (event: React.MouseEvent<HTMLSpanElement>) => {
    setPage(1);
    setShowAll(!showAll);
  };

  const handleNext = async () => {
    const res = await fetchHouses(page + 1, region, hasDiedOut);
    if (res) {
      setHasMore(res?.link);
      setPage(page + 1);
      setFetchedHouses(fetchedHouses?.concat(res?.data));
    }
  };

  return (
    <div className='throneBnb'>
      <nav>
        <ul>
          <li>thronebnb</li>
          <li id='search'>
            <div className='searchbox'>
              <input type='text' placeholder='Search for Thrones' disabled />
            </div>
          </li>
          <li>
            <div className='feed__status--user'>
              <img
                className='profile__img'
                src='https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64'
                alt='profile pic'
              />
            </div>
          </li>
        </ul>
      </nav>
      <div className='houses'>
        <div className='houses__main'>
          <div className='houses__main--controls'>
            <h4>400+ thrones</h4>
            <h1>
              Thrones in&nbsp;
              <select
                onChange={handleRegionChange}
                placeholder='Select Region'
                defaultValue={region}
              >
                <option value=''>#</option>
                {allRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </h1>
            <div className='houses__main--filters'>
              <span
                onClick={handleShowAll}
                className={`filter ${showAll ? 'filter--active' : ''}`}
              >
                All
              </span>
              <span
                onClick={handleDiedOutChange}
                className={`filter ${hasDiedOut ? 'filter--active' : ''}`}
              >
                Died out
              </span>
              {isLoading || allLoading ? (
                <span
                  className={`filter ${hasDiedOut ? 'filter--active' : ''}`}
                >
                  Loading...
                </span>
              ) : null}
            </div>
          </div>
          <div className='houses-listings'>
            {showAll && allData
              ? allData.map((house, i) => (
                  <HouseListing house={house} key={i} />
                ))
              : fetchedHouses?.map((house, i) => (
                  <HouseListing house={house} key={i} />
                ))}
            {hasMore && !showAll ? (
              <button onClick={handleNext}>Load more</button>
            ) : (
              <p style={{ textAlign: 'center' }}>
                {fetchedHouses?.length === 0 ? 'No resutls' : 'The End'}
              </p>
            )}
          </div>
        </div>
        <div className='houses__map'>
          <iframe
            title='got-map'
            src={`https://maps.google.com/maps?width=100%&height=100%&hl=de&q=${encodeURI(
              `MHPLab Berlin`
            )}+(${encodeURI(
              `MHPLab Berlin`
            )})&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HousesBnB;
