import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import thronIcon from '../../assets/thron.png';
import HouseDetails from './HouseDetails';
import HousesBnB from './HousesBnB';

const HousesPage = () => {
  return (
    <div>
      <nav id='throneBnb__nav'>
        <ul>
          <li>
            <Link className='logo links' to='/houses'>
              <img id='thrones-logo' src={thronIcon} alt='thrones' />
              <span>thronebnb</span>
            </Link>
          </li>
          <li id='search'>
            <div className='searchbox'>
              <input type='text' placeholder='Search for Thrones' disabled />
            </div>
          </li>
          <li>
            <Link to='/characters' className='feed__status--user'>
              <img
                className='profile__img'
                src='https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64'
                alt='profile pic'
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/houses'>
          <HousesBnB />
        </Route>
        <Route exact path='/houses/:houseId'>
          <HouseDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default HousesPage;
