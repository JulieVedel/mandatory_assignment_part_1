import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function Blog() {
    const blogList = useSelector((state) => state.blog.blogData)
    const dispatch = useDispatch()
  
    const blogPosts = () => (
      blogList.map((blog) => (
          <div key={blog.id} >
            <h1>{ blog.title }</h1>
            <h3>{ blog.author }</h3>
            <p>{ blog.content }</p>
          </div>
        )
      )
    )

    return (
      <div id={"blogs"}>
        { blogPosts() }
      </div>
    )
  }