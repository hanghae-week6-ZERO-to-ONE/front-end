import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/_todoSlice';
import comments from '../modules/_commentsSlice';

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
