import { bookDispatchType } from './../action/Book';

const reducer = (books: any = [], action: bookDispatchType) => {
  switch (action.type) {
    case 'FETCH_ALL_BOOKS':
      return action.payload;
    case 'CREATE_BOOK':
      return action.payload;
    default:
      return books;
  }
};

export default reducer;
