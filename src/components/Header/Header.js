import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">
          <span className="first-letter">E</span>xquisite{" "}
          <span className="first-letter">C</span>orpse
        </h1>
      </Link>
      <nav className="navbar">
        <NavLink exact to="/" className="nav" activeClassName="selected">
          / Home /
        </NavLink>
        <NavLink to="/story-setup" className="nav" activeClassName="selected">
          / New Story /
        </NavLink>
        <NavLink to="/library" className="nav" activeClassName="selected">
          / Library /
        </NavLink>
        {props.currentUser.name && (
          <NavLink className="nav" activeClassName="selected">
            / Sign Out /
          </NavLink>
        )}
        {!props.currentUser.name && (
          <NavLink to="/login" className="nav" activeClassName="selected">
            / Sign In /
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header