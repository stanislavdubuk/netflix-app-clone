import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FeaturedContent from '../../components/featuredContent/FeaturedContent';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';

interface IProps {
  type?: string;
}

const Home: React.FC<IProps> = ({ type }): JSX.Element => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE1YjZmMjdlMDc4MGZjZWUxYWY0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODYxNTU1MywiZXhwIjoxNjI5MDQ3NTUzfQ.Qfle6nYLuM8k21QCS3ZN99M3f9OnfqH1WkR2iei4b8Q',
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <FeaturedContent type={type} />
      {lists.map((list: any, index: number) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};

export default Home;
