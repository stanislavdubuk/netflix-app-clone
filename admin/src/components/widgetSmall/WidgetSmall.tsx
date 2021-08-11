import { Visibility } from '@material-ui/icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './WidgetSmall.css';

const WidgetSmall: React.FC = (): JSX.Element => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE1YjZmMjdlMDc4MGZjZWUxYWY0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODYxNTU1MywiZXhwIjoxNjI5MDQ3NTUzfQ.Qfle6nYLuM8k21QCS3ZN99M3f9OnfqH1WkR2iei4b8Q',
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className='widgetSmall'>
      <h3 className='widgetSmallTitle'>New Join Members</h3>
      <ul className='widgetSmallList'>
        {newUsers.map((user: any, i: number) => (
          <li key={i} className='widgetSmallListItem'>
            <img
              src={
                user.profilePic ||
                'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
              }
              alt='Avatar'
              className='widgetSmallImg'
            />
            <div className='widgetSmallUser'>
              <span className='widgetSmallUserName'>{user.username}</span>
            </div>
            <button className='widgetSmallButton'>
              <Visibility className='widgetSmallIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
