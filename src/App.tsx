import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.scss';
import BooksPage from './components/books/BooksPage';
import CharacterDetails from './components/characters/CharacterDetails';
import Characters from './components/characters/Characters';
import CharactersPage from './components/characters/CharactersPage';
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
        <Route path='/houses'>
          <HousesPage />
        </Route>
        <Route path='/characters'>
          <CharactersPage />
        </Route>
        <Route path='/books'>
          <BooksPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
