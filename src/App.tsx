import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import BooksPage from './components/books/BooksPage';
import CharactersPage from './components/characters/CharactersPage';
import GotAudio from './components/GotAudio';
import Home from './components/Home';
import HousesPage from './components/houses/HousesPage';
import NotFound from './components/NotFound';
import './App.scss';

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
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
