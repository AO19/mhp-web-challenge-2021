import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Houses from './components/Houses';

function App() {
  // DELETE
  // var lookup: any = {};
  // var items = json;
  // var result = [];

  // for (var item, i = 0; (item = items[i++]); ) {
  //   var name = item.region;

  //   if (!(name in lookup)) {
  //     lookup[name] = 1;
  //     result.push(name);
  //   }
  // }

  // console.log(result);

  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/houses'>
        <Houses />
      </Route>
    </Switch>
  );
}

export default App;
