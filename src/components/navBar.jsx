import { Link } from 'react-router-dom';
import hamburgerMenu from '../assets/hamburgerMenu.svg'

const Navbar = () => {
  return (
    <>
    <div className='barNav'>
      <nav className="navbar">
        <div className='logoWithWriteUp'>
          <img src="https://res.cloudinary.com/dba1aezsn/image/upload/v1690495972/chapel_logo_cph2jz.png" alt="" />
          <p className='logoName'>The Chapel of Faith</p>
        </div>
        <div className='link'>
          <Link to='/' className ="home">Home</Link>
          <Link to='/aboutUs'className="aboutUs">About Us</Link>
        </div>
          <img src={hamburgerMenu} alt="" />
      </nav>
    </div>
    </>
  );
}

export default Navbar;
