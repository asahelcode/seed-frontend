import { combineReducers } from 'redux';
import blogReducer from './Blog';
import bookReducer from './Book';
import projectReducer from './Project';

export default combineReducers({ blogReducer, bookReducer, projectReducer });
