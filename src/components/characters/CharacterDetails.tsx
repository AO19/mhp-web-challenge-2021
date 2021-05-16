import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useCharacter } from '../../helpers/fetchHooks';

type ParamsType = {
  characterId: string;
};

const CharacterDetails = () => {
  const history = useHistory();
  const { characterId } = useParams<ParamsType>();
  const characterData = useCharacter(characterId);

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
          <h1>{characterData?.data?.name}</h1>
          <div className='character-profile__img'>
            <img
              src='https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=512'
              alt='profile pic'
            />
          </div>
          <div className='info'>
            <div>
              <p>Gender: {characterData?.data?.gender}</p>
              <p>Born: {characterData?.data?.born}</p>
              <p>Died: {characterData?.data?.died}</p>
              <p>Culture: {characterData?.data?.culture}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
