import './MovieList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

interface renderCellParams {
  row: {
    _id: number;
    img: string;
    title: string;
  };
}

const MovieList: React.FC = (): JSX.Element => {
  // const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext<any>(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (_id: number): void => {
    // setData(data.filter((item) => item.id !== id));
    deleteMovie(_id, dispatch);
  };

  const columns: any = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params: renderCellParams) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'Year', width: 120 },
    { field: 'limit', headerName: 'Limit', width: 120 },
    { field: 'isSeries', headerName: 'IsSeries', width: 150 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: renderCellParams) => {
        return (
          <>
            <Link
              to={{
                pathname: '/movie/' + params.row._id,
                state: { movie: params.row },
              }}
            >
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[8]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default MovieList;
