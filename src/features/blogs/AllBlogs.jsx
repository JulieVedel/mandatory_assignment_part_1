import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { test, showAll } from './blogSlice'

export default function Blog() {
    const navigate = useNavigate()
    const blogList = useSelector((state) => state.blog.blogData)
    const dispatch = useDispatch()
  
    const blogPosts = () => (
      blogList.map((blog) => (
          <div key={blog.id} className="blog" onClick={() => navigate('/blog/' + blog.id)}>
            <h1>{ blog.title }</h1>
            <h3>{ blog.author }</h3>
            <p>{ blog.content }</p>
          </div>
        )
      )
    )

    return (
      <div className='content'>
        <h1>All blogs</h1>
        { blogPosts() }
      </div>
    )
  }