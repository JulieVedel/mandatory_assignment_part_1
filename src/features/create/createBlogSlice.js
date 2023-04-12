import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showDialog: false
}

export const createBlogSlice = createSlice({
    name: 'createBlog', 
    initialState,
    reducers: {
      openDialog: (state, actions) => {
        state.showDialog = true
      },
      emptyForm: (state, actions) => {
        state.showDialog = false
        //slet indholdet af felterne
      }
    },
  })

  

export default createBlogSlice.reducer
export const { openDialog, emptyForm } = createBlogSlice.actions

