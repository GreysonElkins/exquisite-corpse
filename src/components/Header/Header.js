import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link><h1>Exquisite Corpse</h1></Link>
      <nav className='navbar'>
        <NavLink to='/story-setup'><button>New Story</button></NavLink>
        <NavLink to='/library'><button>Library</button></NavLink>
        <NavLink to='/login'><button>Sign In</button></NavLink>
      </nav>
    </header>
  );
}

export default Header