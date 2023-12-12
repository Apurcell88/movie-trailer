"use client" // using this since button has onClick

import Logo from './logo.png';
import Image from 'next/image';

const Navbar = () => {
  
  return (
    <nav>
      <Image
        src={Logo}
        alt='Purple letter P'
        width="50"
      />
      <button className='navbar--all-movies-btn'>All Movies</button>
    </nav>
  );
}
 
export default Navbar;