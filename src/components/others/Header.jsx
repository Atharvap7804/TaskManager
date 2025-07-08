import React, { useState } from 'react';
import { setLocalStorage } from '../../utils/localstorage';

const Header=(props)=>{
  console.log(props);
  
  const logout=()=>{
    alert('Are you sure you want to logout?')
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  return(
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props.data?.name || 'Admin'}</span></h1>
      <button onClick={logout} className='bg-[#d62828] py-2 px-5 rounded-md text-white font-medium text-lg mt'>Logout</button>
    </div>
  )
}

export default Header