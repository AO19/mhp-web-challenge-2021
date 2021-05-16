import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.scss';
import CharacterDetails from './components/CharacterDetails';
import Characters from './components/Characters';
import Home from './components/Home';
import HouseDetails from './components/HouseDetails';
import Houses from './components/Houses';
import HousesBnB from './components/HousesBnB';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/houses/:houseId'>
        <HouseDetails />
      </Route>
      <Route path='/characters/:characterId'>
        <CharacterDetails />
      </Route>
      <Route path='/houses'>
        <HousesBnB />
      </Route>
      <Route path='/characters'>
        <Characters />
      </Route>
    </Switch>
  );
}

export default App;
