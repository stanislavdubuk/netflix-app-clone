import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './FeaturedContent.scss';

interface Props {
  type?: string;
  setGenre: any;
}

const FeaturedMovie: React.FC<Props> = ({ type, setGenre }): JSX.Element => {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE1YjZmMjdlMDc4MGZjZWUxYWY0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODYxNTU1MywiZXhwIjoxNjI5MDQ3NTUzfQ.Qfle6nYLuM8k21QCS3ZN99M3f9OnfqH1WkR2iei4b8Q',
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select
            name='genre'
            id='genre'
            onChange={(e: any) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value='action'>Action</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt='avatar' />
      <div className='info'>
        <img
          src={content.imgTitle}
          alt='Mad Max Fury Road Movie Logo - Mad Max Fury Road Logo Png@seekpng.com'
        ></img>
        <span className='desc'>{content.desc}</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
