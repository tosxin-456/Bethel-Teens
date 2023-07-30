import { Link } from 'react-router-dom';
import hamburgerMenu from '../assets/hamburgerMenu.svg'

const Navbar = () => {
  return (
    <>
    <div className='barNav'>
      <nav className="navbar">
        <div className='logoWithWriteUp'>
          <a href="https://www.chapeloffaithunijos.org/"> <img src="https://res.cloudinary.com/dba1aezsn/image/upload/v1690495972/chapel_logo_cph2jz.png" alt="" /></a>
          <p className='logoName'>The Chapel of Faith</p>
        </div>
        <div className='link'>
          <Link to='/' className ="home">Home</Link>
          <Link to='/aboutUs'className="aboutUs">About Us</Link>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
