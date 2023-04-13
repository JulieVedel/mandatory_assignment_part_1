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
      },
      updateComments: (state, actions) => {
        const blogIndex = state.blogData.findIndex(blog => blog.id === actions.payload.id)
        state.blogData[blogIndex] = actions.payload
      }
    },
  })

  

export default blogSlice.reducer
export const { test, setBlogData, updateComments } = blogSlice.actions