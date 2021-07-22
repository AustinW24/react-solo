import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from './soundspace.png'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className='signup' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navContainer'>
      <div>
        <img src='./soundspace.png'></img>
      </div>
      < NavLink exact to="/home" className='home'>Home</NavLink>
      <div className='login-signup'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
