import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import Comment from "../comment/Comment"


export default function Blog() {
    const navigate = useNavigate()
    const blogList = useSelector((state) => state.blog.blogData)

    const {id} = useParams()
    const blog = getBlogById(id, blogList)
 
    return (
        <div className="content">
            <br />
            <button onClick={() => navigate('/')}>Back</button>
            <div className="individualBlog" >
                <h1>{ blog.title }</h1>
                <h3>{ blog.author }</h3>
                <p>{ blog.content }</p>
            </div>
            <Comment comments={blog.comments}/>
        </div>
        
    )
}

function getBlogById(id, blogList) {
    return blogList.find((blog) => blog.id.toString()===id)
}