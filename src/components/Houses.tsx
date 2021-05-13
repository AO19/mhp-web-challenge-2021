import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const { REACT_APP_API_URL } = process.env;

const Houses = () => {
  const { isLoading, data } = useQuery('houses', async () => {
    return axios.get(`${REACT_APP_API_URL}houses`);
  });
  return (
    <div className='houses'>
      <h1>Explore all the houses of ice and fire</h1>
    </div>
  );
};

export default Houses;
