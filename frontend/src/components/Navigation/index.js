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
      <img className='logo' src='https://thumbs.dreamstime.com/b/ss-logo-s-s-design-white-ss-letter-ss-s-s-letter-logo-design-initial-letter-ss-linked-circle-uppercase-monogram-logo-ss-logo-s-s-196993582.jpg'></img>

      <div className='navLinks'>
      < NavLink exact to="/home" className='home'>Home</NavLink>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
