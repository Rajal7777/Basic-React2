import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import './index.css';
import DataContext from './context/DataContext';

const Nav = () => {
  const {search, setSearch} = useContext(DataContext);
  return (
    <nav className="Nav">
      <form className='searchForm' onSubmit={(e) => e.preventDefault()} >
        <label htmlFor="search"></label>
        <input
          id='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='search...'
          type="text" />
      </form>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/post'>Post</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;