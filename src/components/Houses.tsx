import React, { useEffect, useState } from 'react';
import { allRegions } from '../helpers/allfilters';
import { useHouses, useAllHouses } from '../helpers/fetchHooks';
import HouseShield from './HouseShield';

const Houses = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const [region, setRegion] = useState('');
  const [hasDiedOut, setHasDiedOut] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const { isLoading, data, refetch } = useHouses(
    page,
    pageSize,
    region,
    hasDiedOut
  );
  const {
    isLoading: allLoading,
    data: allData,
    refetch: refetchAll,
  } = useAllHouses(showAll);

  useEffect(() => {
    refetch();
  }, [page, pageSize, refetch, region, hasDiedOut]);

  useEffect(() => {
    if (showAll) {
      setRegion('');
      refetchAll();
    }
  }, [showAll, refetchAll]);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  };

  const handleDiedOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasDiedOut(event.target.checked);
  };

  return (
    <div className='houses'>
      <h1>Explore all houses of ice and fire</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show All</button>
        <select
          onChange={handleRegionChange}
          placeholder='Select Region'
          value={region}
        >
          <option value=''>All</option>
          {allRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div>
          <input
            onChange={handleDiedOutChange}
            type='checkbox'
            name='diedOut'
            checked={hasDiedOut}
          />
          <label htmlFor='diedOut'>Show died out houses?</label>
        </div>
      </div>
      <div className='houses__items'>
        {showAll && allData
          ? allData.map((house, i) => <HouseShield house={house} key={i} />)
          : data?.houses?.map((house, i) => (
              <HouseShield house={house} key={i} />
            ))}
      </div>
    </div>
  );
};

export default Houses;
