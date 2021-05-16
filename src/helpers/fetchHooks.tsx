import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Character, House } from '../types';
import getIdfromUrl from './getIdfromUrl';

const { REACT_APP_API_URL } = process.env;

type HousesQueryType = {
  houses: House[];
  link: boolean;
};

const useHouses = (
  page: number = 1,
  pageSize: number = 50,
  region?: string,
  hasDiedOut?: boolean
) => {
  return useQuery<HousesQueryType>('houses', async () => {
    const { data, headers } = await axios.get<House[]>(
      `${REACT_APP_API_URL}/houses?page=${page}&pageSize=${pageSize}`,
      {
        params: { region, hasDiedOut },
      }
    );
    const link: string = headers.link;
    const modifiedData = { houses: data, link: link.includes('rel="next"') };
    return modifiedData;
  });
};

const useHouse = (houseId: string) => {
  return useQuery<House>(
    'house',
    async () => {
      const { data } = await axios.get<House>(
        `${REACT_APP_API_URL}/houses/${houseId}`
      );
      return data;
    },
    { enabled: !!houseId }
  );
};

const useAllHouses = (showAll: boolean) => {
  return useQuery<House[]>(
    'allHouses',
    async () => {
      const allHouses: House[] = [];
      let page = 1;
      let next = true;
      while (next) {
        const { data, headers } = await axios.get<House[]>(
          `${REACT_APP_API_URL}/houses?page=${page}&pageSize=50`
        );
        const link: string = headers.link;
        if (data) {
          allHouses.push(...data);
          page = page + 1;
        }
        if (!link.includes('rel="next"')) next = false;
      }
      return allHouses;
    },
    { enabled: showAll }
  );
};

const useNestedHouses = (housesArray: string[]) => {
  return useQuery<House[]>(
    'nestedHouses',
    async () => {
      const nestedHouses: House[] = [];
      for (const nestedHouse of housesArray) {
        const { data } = await axios.get<House>(
          `${REACT_APP_API_URL}/houses/${getIdfromUrl(nestedHouse)}`
        );
        if (data) nestedHouses.push(data);
      }
      return nestedHouses;
    },
    { enabled: !!housesArray }
  );
};

const fetchCharacters = async (page: number = 1, pageSize: number = 50) => {
  try {
    const { data, headers } = await axios.get<Character[]>(
      `${REACT_APP_API_URL}/characters?page=${page}&pageSize=${pageSize}`
    );
    const link: string = headers.link;
    return { data, link: link.includes('rel="next"') };
  } catch (error) {
    console.error(error);
  }
};

const useCharacter = (characterUrl: string | undefined) => {
  const characterId = characterUrl && getIdfromUrl(characterUrl);
  return useQuery<Character>(
    'character',
    async () => {
      const { data } = await axios.get<Character>(
        `${REACT_APP_API_URL}/characters/${characterId}`
      );
      return data;
    },
    { enabled: !!characterUrl }
  );
};

const useNestedCharacters = (charactersArray: string[]) => {
  return useQuery<Character[]>(
    'nestedCharacters',
    async () => {
      const nestedCharacters: Character[] = [];
      for (const nestedCharacter of charactersArray) {
        const { data } = await axios.get<Character>(
          `${REACT_APP_API_URL}/characters/${getIdfromUrl(nestedCharacter)}`
        );
        if (data) nestedCharacters.push(data);
      }
      return nestedCharacters;
    },
    { enabled: !!charactersArray }
  );
};

export {
  useHouses,
  useHouse,
  useAllHouses,
  useNestedHouses,
  fetchCharacters,
  useCharacter,
  useNestedCharacters,
};
