import {
  Add,
  PlayArrow,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './ListItem.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Props {
  index: number;
  item: any;
}

const ListItem: React.FC<Props> = ({ index, item }): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState<any>({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE1YjZmMjdlMDc4MGZjZWUxYWY0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODYxNTU1MywiZXhwIjoxNjI5MDQ3NTUzfQ.Qfle6nYLuM8k21QCS3ZN99M3f9OnfqH1WkR2iei4b8Q',
          },
        });

        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  const newTo = {
    pathname: '/watch',
    movie: movie,
  };

  return (
    <Link to={newTo}>
      <div
        className='listItem'
        style={{ left: index * 225 - 50 + index + 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt='thumb' />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop></video>
            <div className='itemInfo'>
              <div className='icons'>
                <PlayArrow className='icon' />
                <Add className='icon' />
                <ThumbUpAltOutlined className='icon' />
                <ThumbDownAltOutlined className='icon' />
              </div>
              <div className='itemInfoTop'>
                <span>{movie.duration}</span>
                <span className='limit'>{movie.limit}+</span>
                <span>{movie.year}</span>
              </div>
              <div className='desc'>{movie.desc}</div>
              <div className='genre'>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
