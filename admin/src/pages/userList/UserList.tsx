import './UserList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface renderCellParams {
  row: {
    avatar: string;
    username: string;
    id: number;
  };
}

const UserList: React.FC = (): JSX.Element => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number): void => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns: any = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      editable: true,
      renderCell: (params: renderCellParams): JSX.Element => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      editable: true,
      renderCell: (params: renderCellParams): JSX.Element => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>

            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[8]}
      />
    </div>
  );
};

export default UserList;
