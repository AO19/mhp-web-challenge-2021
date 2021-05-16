import React from 'react';
import { useParams } from 'react-router';
import {
  useNestedHouses,
  useCharacter,
  useHouse,
  useNestedCharacters,
} from '../../helpers/fetchHooks';

type HouseParams = {
  houseId: string;
};

const HouseDetails = () => {
  const { houseId } = useParams<HouseParams>();
  const { isLoading, data } = useHouse(houseId);
  const currentLord = useCharacter(data?.currentLord ?? '');
  const cadetBranches = useNestedHouses(data?.cadetBranches ?? []);
  const swornMembers = useNestedCharacters(data?.swornMembers ?? []);

  return (
    <div className='house'>
      <div className='house-paper'>
        <div className='house-header'>
          <h2 className='house-header__id'>{houseId}</h2>
          <h1 className='house-header__name'>{data?.name}</h1>
        </div>
        <div className='house-body'>
          <h2>"{data?.words}"</h2>
          <img
            id='castle-image'
            src='https://source.unsplash.com/620x420/?castle'
            alt='Castle'
          />
          <h2>{data?.coatOfArms}</h2>
          <div className='cadets'>
            <ul>
              {cadetBranches?.data?.map((cadet) => (
                <li>{cadet.name}</li>
              ))}
            </ul>
          </div>
          <div className='swornMembers'>
            <ul>
              <button onClick={() => swornMembers.refetch()}>Show</button>
              Sworn Members ({data?.swornMembers.length})
              {swornMembers.isLoading
                ? 'Loading'
                : swornMembers?.data?.map((member) => <li>{member.name}</li>)}
            </ul>
          </div>
          <p>{currentLord?.data?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
