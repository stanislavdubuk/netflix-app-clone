export const getListsStart = () => ({
  type: 'GET_LISTS_START',
});
export const getListsSuccess = (lists: any) => ({
  type: 'GET_LISTS_SUCCESS',
  payload: lists,
});
export const getListsFail = () => ({
  type: 'GET_LISTS_FAIL',
});

export const createListStart = () => ({
  type: 'CREATE_LIST_START',
});
export const createListSuccess = (list: any) => ({
  type: 'CREATE_LIST_SUCCESS',
  payload: list,
});
export const createListFail = () => ({
  type: 'CREATE_LIST_FAIL',
});

// UPDATE
export const updateListStart = () => ({
  type: 'UPDATE_LIST_START',
});
export const updateListSuccess = (list: any) => ({
  type: 'UPDATE_LIST_SUCCESS',
  payload: list,
});
export const updateListFail = () => ({
  type: 'UPDATE_LIST_FAIL',
});

// DELETE
export const deleteListStart = () => ({
  type: 'DELETE_LIST_START',
});
export const deleteListSuccess = (id: number | string) => ({
  type: 'DELETE_LIST_SUCCESS',
  payload: id,
});
export const deleteListFail = () => ({
  type: 'DELETE_LIST_FAIL',
});
