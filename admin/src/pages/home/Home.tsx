import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const Home: React.FC = (): JSX.Element => {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState<any>([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE1YjZmMjdlMDc4MGZjZWUxYWY0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODYxNTU1MywiZXhwIjoxNjI5MDQ3NTUzfQ.Qfle6nYLuM8k21QCS3ZN99M3f9OnfqH1WkR2iei4b8Q',
          },
        });
        const statsList = res.data.sort(
          (a: { _id: number }, b: { _id: number }) => {
            return a._id - b._id;
          }
        );
        statsList.map((item: any) => {
          setUserStats((prevState: any) => [
            ...prevState,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} title='User Analytics' grid dataKey='New User' />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
