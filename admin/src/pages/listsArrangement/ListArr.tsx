import './ListArr.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ListContext } from '../../context/listContext/ListContext';
import { deleteList, getLists } from '../../context/listContext/apiCalls';

interface renderCellParams {
  row: {
    _id: number;
    img: string;
    title: string;
  };
}

const ListArr: React.FC = (): JSX.Element => {
  const { lists, dispatch } = useContext<any>(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id: number): void => {
    deleteList(id, dispatch);
  };

  const columns: any = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: renderCellParams) => {
        return (
          <>
            <Link
              to={{
                pathname: '/list/' + params.row._id,
                state: { list: params.row },
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
        rows={lists}
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

export default ListArr;
