import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogData: []
}


export const blogSlice = createSlice({
    name: 'blog', 
    initialState,
    reducers: {
      // test: (state, actions) => {
      //   console.log("test")
      //   },
      setBlogData: (state, actions) => {
        state.blogData = actions.payload
      }
    },
  })

  

export default blogSlice.reducer
export const { test, setBlogData } = blogSlice.actions