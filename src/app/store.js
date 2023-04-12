import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import blogSlice from '../features/blogs/blogSlice'
import blogReducer from '../features/blogs/blogSlice'
import createBlogSlice from '../features/create/createBlogSlice'
import { jokeApi } from './jokeApi'

export const store = configureStore({
  reducer: {
    blog: blogSlice,
    createBlog: createBlogSlice,
    [jokeApi.reducerPath]: jokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(jokeApi.middleware);
  }
})
