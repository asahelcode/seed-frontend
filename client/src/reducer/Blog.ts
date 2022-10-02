import { blogDispatchType } from './../action/Blog';
import { Blog } from '../action/Blog';

type BlogState = {
  blogs: Blog[];
};

const initialState: BlogState = {
  blogs: [
    {
      title: 'Breaking into web3',
      tags: ['web3', 'blockchain'],
      timestamp: '2022-10-09',
      description: 'I love programming till dawn',
    },
    {
      title: 'Waiting on God',
      tags: ['breaking', 'destiny'],
      timestamp: '2022-03-09',
      description: 'Leaving up to my potential',
    },
  ],
};

const reducer = (
  blogState: BlogState = initialState,
  action: blogDispatchType
) => {
  switch (action.type) {
    case 'FETCH_ALL_BLOG':
      return action.payload;
    case 'CREATE_BLOG':
      return action.payload;
    case 'GET_BLOG_DETAIL':
      return action.payload;
    default:
      return blogState;
  }
};

export default reducer;
