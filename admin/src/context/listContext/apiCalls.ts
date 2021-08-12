import axios from 'axios';
import {
  getListsFail,
  getListsStart,
  getListsSuccess,
  createListFail,
  createListStart,
  createListSuccess,
  deleteListFail,
  deleteListStart,
  deleteListSuccess,
} from './ListActions';

export const getLists = async (
  dispatch: (params: { type: string }) => void
) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get('/lists', {
      headers: {
        token:
          'Bearer ' + JSON.parse(localStorage.getItem('user')!).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFail());
  }
};

// CREATE
export const createList = async (
  list: any,
  dispatch: (params: { type: string }) => void
) => {
  dispatch(createListStart());
  try {
    const res = await axios.post('/lists/', list, {
      headers: {
        token:
          'Bearer ' + JSON.parse(localStorage.getItem('user')!).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFail());
  }
};

// DELETE
export const deleteList = async (
  id: number | string,
  dispatch: (params: { type: string }) => void
) => {
  dispatch(deleteListStart());
  try {
    await axios.delete('/lists/' + id, {
      headers: {
        token:
          'Bearer ' + JSON.parse(localStorage.getItem('user')!).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFail());
  }
};
