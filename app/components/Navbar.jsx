import Logo from './logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  
  return (
    <nav>
      <Link href='/'>
        <Image
          src={Logo}
          alt='Purple letter P'
          width="50"
        />
      </Link>
      <Link href='/movies' className='navbar--link'>
        <button className='navbar--all-movies-btn'>Popular Movies</button>
      </Link>
    </nav>
  );
}
 
export default Navbar;