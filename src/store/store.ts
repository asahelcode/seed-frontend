import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import reducers from '../reducer/index';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: reducers,
  middleware: new MiddlewareArray().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
