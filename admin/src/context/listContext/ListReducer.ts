const ListsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_LISTS_START':
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case 'GET_LISTS_SUCCESS':
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };
    case 'GET_LISTS_FAIL':
      return {
        lists: [],
        isFetching: false,
        error: true,
      };
    case 'CREATE_LIST_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CREATE_LIST_SUCCESS':
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };
    case 'CREATE_LIST_FAIL':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // UPDATE
    case 'UPLOAD_LIST_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'UPLOAD_LIST_SUCCESS':
      return {
        lists: state.lists.map(
          (list: any) =>
            list._id === action.payload._id &&
            action.payload._id &&
            action.payload
        ),
        isFetching: false,
        error: false,
      };
    case 'UPLOAD_LIST_FAIL':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'DELETE_LIST_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_LIST_SUCCESS':
      return {
        lists: state.lists.filter((list: any) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case 'DELETE_LIST_FAIL':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ListsReducer;
