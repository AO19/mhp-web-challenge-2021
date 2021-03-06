import { Link, Route, Switch } from 'react-router-dom';
import dragonLogo from '../../assets/dragonLogo.png';
import Characters from './Characters';
import CharacterDetails from './CharacterDetails';

const CharactersPage = () => {
  return (
    <div className='dritter-layout'>
      <nav className='dritter-layout__nav'>
        <ul>
          <li>
            <Link className='links' to='/'>
              <h2>Homepage</h2>
            </Link>
          </li>
          <li>
            <h2>Explore</h2>
          </li>
          <li>
            <h2>Messages</h2>
          </li>
          <li>
            <Link className='links' to='/noOneAlive'>
              <h2>Profile</h2>
            </Link>
          </li>
          <li>
            <Link className='links' to='/houses'>
              <h2>Houses</h2>
            </Link>
          </li>
          <li>
            <Link className='links' to='/books'>
              <h2>Books</h2>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='dritter-layout__feed'>
        <div className='feed__header'>
          <Link to='/characters'>
            <img id='dritter-logo' src={dragonLogo} alt='dritter logo' />
            <h1>Dritter</h1>
          </Link>
        </div>
        <div className='feed__status'>
          <div className='feed__status--user'>
            <img
              className='profile__img'
              src='https://images.unsplash.com/photo-1615672969032-45c313ae0a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64'
              alt='profile pic'
            />
          </div>
          <div className='feed__status--controls'>
            <div className='feed__status--input'>
              <textarea placeholder="What's new?" />
            </div>
            <div className='feed__status--button'>
              <div></div>
              <button>Send Fire</button>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path='/characters'>
            <Characters />
          </Route>
          <Route exact path='/characters/:characterId'>
            <CharacterDetails />
          </Route>
        </Switch>
      </div>
      <div className='dritter-layout__trends'>
        <div className='trends__box'>
          <h4 className='trends__box-header'>Trends for you</h4>
          <div className='trends__box-item'>
            <p>Trends in The North</p>
            <p>
              <span className='hashtag'>#</span>WinterIsComing
            </p>
            <p>33.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The North</p>
            <p>
              <span className='hashtag'>#</span>TeamStark
            </p>
            <p>100.000 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The North</p>
            <p>
              <span className='hashtag'>#</span>Northmen
            </p>
            <p>1.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in Beyond the Wall</p>
            <p>
              <span className='hashtag'>#</span>MauerMussWeg
            </p>
            <p>10.100.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Crownlands</p>
            <p>
              <span className='hashtag'>#</span>KingOfKings
            </p>
            <p>32.100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Neck</p>
            <p>
              <span className='hashtag'>#</span>Cold
            </p>
            <p>100 Tweets</p>
          </div>
          <div className='trends__box-item'>
            <p>Trends in The Riverlands</p>
            <p>
              <span className='hashtag'>#</span>TheWitcher
            </p>
            <p>99.100 Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
