import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Book, Character, FullCharacter, House } from '../types';
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
  return useQuery<HousesQueryType>(['houses'], async () => {
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

const useHouse = (houseId: string | null) => {
  return useQuery<House>(
    ['house', houseId],
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

const useNestedHouses = (housesArray: string[] | undefined) => {
  return useQuery<House[]>(
    ['nestedHouses', housesArray],
    async () => {
      const nestedHouses: House[] = [];
      if (housesArray) {
        for (const nestedHouse of housesArray) {
          const { data } = await axios.get<House>(
            `${REACT_APP_API_URL}/houses/${getIdfromUrl(nestedHouse)}`
          );
          if (data) nestedHouses.push(data);
        }
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
  return useQuery<FullCharacter | null>(
    ['character', characterId],
    async () => {
      let tmpCharacter: Character | FullCharacter;
      let fullCharacter: FullCharacter;
      const { data } = await axios.get<Character>(
        `${REACT_APP_API_URL}/characters/${characterId}`
      );
      if (data) {
        tmpCharacter = Object.assign(data);
        if (data?.father) {
          const father = await axios.get<Character>(
            `${REACT_APP_API_URL}/characters/${getIdfromUrl(data?.father)}`
          );
          if (father?.data) tmpCharacter.father = father?.data;
        }
        if (data?.mother) {
          const mother = await axios.get<Character>(
            `${REACT_APP_API_URL}/characters/${getIdfromUrl(data?.mother)}`
          );
          if (mother?.data) tmpCharacter.mother = mother?.data;
        }
        if (data?.spouse) {
          const spouse = await axios.get<Character>(
            `${REACT_APP_API_URL}/characters/${getIdfromUrl(data?.spouse)}`
          );
          if (spouse?.data) tmpCharacter.spouse = spouse?.data;
        }
        fullCharacter = tmpCharacter as FullCharacter;
        return fullCharacter;
      } else {
        return null;
      }
    },
    { enabled: !!characterUrl, retry: false }
  );
};

const useNestedCharacters = (charactersArray: string[]) => {
  return useQuery<Character[]>(
    ['nestedCharacters', charactersArray],
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

const useNestedBooks = (booksArray: string[] | undefined) => {
  return useQuery<Book[]>(
    ['nestedBooks', booksArray],
    async () => {
      const nestedBooks: Book[] = [];
      if (booksArray) {
        for (const nestedBook of booksArray) {
          const { data } = await axios.get<Book>(
            `${REACT_APP_API_URL}/books/${getIdfromUrl(nestedBook)}`
          );
          if (data) nestedBooks.push(data);
        }
      }
      return nestedBooks;
    },
    { enabled: !!booksArray }
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
  useNestedBooks,
};
