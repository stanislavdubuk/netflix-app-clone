import React, { useContext } from 'react';
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthActions';

const Topbar: React.FC = (): JSX.Element => {
  const { dispatch } = useContext<any>(AuthContext);
  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>dev ops.</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <div className='topAvatar'></div>
          <button className='topbarLogoutBtn' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
