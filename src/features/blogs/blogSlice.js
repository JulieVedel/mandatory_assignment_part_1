import { createSlice } from '@reduxjs/toolkit'
import data from 'C:\\Users\\Julze\\OneDrive\\Dokumenter\\React\\mandatory_assignment_part_1\\my-app\\src\\data\\db.json'

const initialState = {
  blogData: (
    data.blogs
  )
}

export const blogSlice = createSlice({
    name: 'blog', 
    initialState,
    reducers: {
      // test: (state, actions) => {
      //   const currentBlogID = actions.payload
        
        
      // },
      // showAll: (state) => {
      //   state = initialState
      //   console.log("showAll aktiveret")
      // }
    },
  })

  

export default blogSlice.reducer
export const { test, showAll } = blogSlice.actions