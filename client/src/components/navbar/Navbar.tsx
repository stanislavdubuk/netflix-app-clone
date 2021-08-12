import './Navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext<any>(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt='logo'
          />

          <Link to='/' className='link'>
            <span>Home</span>
          </Link>
          <Link to='/series' className='link'>
            <span className='navbarMainLink'>TV Shows</span>
          </Link>
          <Link to='/movies' className='link'>
            <span className='navbarMainLink'>Movies</span>
          </Link>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>KIDS</span>
          <Notifications className='icon' />
          <div className='profile'>
            <img
              src='https://images.pexels.com/photos/2103939/pexels-photo-2103939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='avatar'
            />
            <ArrowDropDown className='icon' />
          </div>
          <div className='options-container'>
            <div className='settings-arrow'></div>
            <div className='options'>
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
