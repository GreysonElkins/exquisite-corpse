import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className='title'>Exquisite Corpse</h1>
      </Link>
      <nav className="navbar">
        <NavLink to="/story-setup" activeClassName="selected">
          <button className="nav-button">New Story</button>
        </NavLink>
        <NavLink to="/library" activeClassName="selected">
          <button className="nav-button">Library</button>
        </NavLink>
        <NavLink to="/login" activeClassName="selected">
          <button className="nav-button">Sign In</button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header