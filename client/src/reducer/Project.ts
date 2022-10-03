import { projectDispatchTypes } from './../action/Project';

export const reducer = (projects: any = [], action: projectDispatchTypes) => {
  switch (action.type) {
    case 'FETCH_ALL_PROJECT':
      return action.payload;
    case 'CREATE_PROJECT':
      return projects;
    default:
      return projects;
  }
};

export default reducer;
