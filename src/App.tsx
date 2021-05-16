import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.scss';
import CharacterDetails from './components/characters/CharacterDetails';
import Characters from './components/characters/Characters';
import GotAudio from './components/GotAudio';
import Home from './components/Home';
import HousesPage from './components/houses/HousesPage';

function App() {
  return (
    <>
      <GotAudio />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/characters/:characterId'>
          <CharacterDetails />
        </Route>
        <Route path='/houses'>
          <HousesPage />
        </Route>
        <Route path='/characters'>
          <Characters />
        </Route>
      </Switch>
    </>
  );
}

export default App;
