// import Chart from '../../components/chart/Chart';
// import { productData } from '../../dummyData';
import { Link, useLocation } from 'react-router-dom';
import './List.css';
import { Publish } from '@material-ui/icons';

interface LocationState {
  pathname: string;
  list: any;
}

const List: React.FC = (): JSX.Element => {
  const location = useLocation<LocationState>();
  const list = location.state.list;

  return (
    <div className='movie'>
      <div className='movieTitleContainer'>
        <h1 className='movieTitle'>List</h1>
        <Link to='/new-list'>
          <button className='movieAddButton'>Create</button>
        </Link>
      </div>
      <div className='movieTop'>
        {/* <div className='movieTopLeft'>
          <Chart title='Yearly Sales' data={productData} dataKey='Sales' />
        </div> */}
        <div className='movieTopRight'>
          <div className='movieInfoTop'>
            <span className='movieName'>{list.title}</span>
          </div>
          <div className='movieInfoBottom'>
            <div className='movieInfoItem'>
              <span className='movieInfoKey'>ID:</span>
              <span className='movieInfoValue'>{list._id}</span>
            </div>
            <div className='movieInfoItem'>
              <span className='movieInfoKey'>Genre</span>
              <span className='movieInfoValue'>{list.genre}</span>
            </div>
            <div className='movieInfoItem'>
              <span className='movieInfoKey'>Type:</span>
              <span className='movieInfoValue'>{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='movieBottom'>
        <form className='movieForm'>
          <div className='movieFormLeft'>
            <label>List Title</label>
            <input type='text' placeholder={list.title} />
            <label>Type</label>
            <input type='text' placeholder={list.type} />
            <label>Genre</label>
            <input type='text' placeholder={list.genre} />
          </div>
          <div className='movieFormRight'>
            {/* <div className='movieUpload'>
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div> */}
            <button className='movieButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
