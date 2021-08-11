import React from 'react';
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar: React.FC = (): JSX.Element => {
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
        </div>
      </div>
    </div>
  );
};

export default Topbar;
