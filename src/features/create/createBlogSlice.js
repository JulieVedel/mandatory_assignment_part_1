import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isVisible: false,
}

export const createBlogSlice = createSlice({
    name: 'createBlog', 
    initialState,
    reducers: {
      openDialog: (state) => {
        state.isVisible = true
      },
      closeDialog: (state) => {
        state.isVisible = false
      },
      emptyForm: (state) => {
        //slet indholdet af felterne
      }
    },
  })

  

export default createBlogSlice.reducer
export const { openDialog, closeDialog, emptyForm } = createBlogSlice.actions

