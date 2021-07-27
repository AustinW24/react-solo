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
        <NavLink className='signup' to="/signup"><button className='createAccount'>Create account</button></NavLink>
      </>
    );
  }

  return (
    <div className='navContainer'>

      <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3-iR8wiDc8Gyx5EBgp9WZMnd_HQjcadf-e6NxZ_0lcC5thPULltrZ7PeNMwmoX-AVsc&usqp=CAU'></img>

      <div className='navLinks'>
      < NavLink exact to="/home" className='home'>Home</NavLink>
      <div className='signup-login'>
        <a className='uploadLink' href='/upload'>Upload</a>
        {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
