import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/'><h1>Exquisite Corpse</h1></Link>
      <nav className='navbar'>
        <NavLink to='/story-setup' activeClassName='selected'>
          <button>New Story</button>
        </NavLink>
        <NavLink to='/library' activeClassName='selected'>
          <button>Library</button>
        </NavLink>
        <NavLink to='/login' activeClassName='selected'>
          <button>Sign In</button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header