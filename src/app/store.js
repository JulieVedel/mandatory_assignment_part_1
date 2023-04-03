import { configureStore } from '@reduxjs/toolkit'
import blogSlice from '../features/blogs/blogSlice'
import blogReducer from '../features/blogs/blogSlice'

export const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
})