import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import counterReducer from '../features/counter/counterSlice'
import blogSlice from '../features/blogs/blogSlice'
import blogReducer from '../features/blogs/blogSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blog: blogSlice,
  },
})