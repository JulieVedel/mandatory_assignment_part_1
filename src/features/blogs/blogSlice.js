import { createSlice } from '@reduxjs/toolkit'
import data from 'C:\\Users\\Julze\\OneDrive\\Dokumenter\\React\\mandatory_assignment_part_1\\my-app\\src\\data\\db.json'



/*const initialState = {
    blogData: (
      data.blogs.map( info => {
        return (
        <div>
          <h1>{ info.title }</h1>
          <h3>{ info.author }</h3>
          <p>{ info.content }</p>
          <br></br>
          </div>
        )
      })

    )
}*/

const initialState = {
  blogData: (
    data.blogs

  )
}


export const blogSlice = createSlice({
    name: 'blog', 
    initialState,
    reducers: {
      test: (state) => {
        console.log("hi")
      },
    },
  })

  export const { test } = blogSlice.actions

export default blogSlice.reducer