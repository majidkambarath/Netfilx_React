import React from 'react'
import avatar from './petter-removebg-preview.png'
import './NarBar.css'
function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="Netfilx_logo" />
      
         <img className='avatar' src={avatar} alt=" avatar_logo" />
    </div>
  )
}

export default NavBar