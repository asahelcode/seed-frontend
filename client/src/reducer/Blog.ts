import { blogDispatchType } from './../action/Blog';

const reducer = (blogState: any = [], action: blogDispatchType) => {
  switch (action.type) {
    case 'FETCH_ALL_BLOG':
      return action.payload;
    case 'CREATE_BLOG':
    case 'GET_BLOG_DETAIL':
      return blogState;
    default:
      return blogState;
  }
};

export default reducer;
