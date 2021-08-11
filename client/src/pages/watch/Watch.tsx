import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './Watch.scss';

interface LocationState {
  pathname: string;
  movie?: any;
}

const Watch: React.FC = (): JSX.Element => {
  const location: any = useLocation<LocationState>();
  const movie = location.movie;
  return (
    <div className='watch'>
      <Link to='/'>
        <div className='back'>
          <ArrowBackOutlined /> Home
        </div>
      </Link>
      <video src={movie.video} className='video' controls></video>
    </div>
  );
};

export default Watch;
