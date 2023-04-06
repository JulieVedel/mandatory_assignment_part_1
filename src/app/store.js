import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import blogSlice from '../features/blogs/blogSlice'
import blogReducer from '../features/blogs/blogSlice'
import { jokeApi } from './jokeApi'

export const store = configureStore({
  reducer: {
    blog: blogSlice,
    [jokeApi.reducerPath]: jokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(jokeApi.middleware);
  }
})
