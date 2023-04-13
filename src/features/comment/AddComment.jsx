
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { updateComments } from "../blogs/blogSlice";

export default function AddComment() {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    function handleSubmit(event) {
        event.preventDefault()
        
        const newComment = event.target.newComment.value

        fetch('http://localhost:8000/blogs')
            .then(response => response.json())
            .then(data => {
                const blogToUpdate = data.find( blog => blog.id.toString() === id)
                blogToUpdate.comments.splice(0, 0, newComment)
                console.log(blogToUpdate);

                const updatedJson = JSON.stringify(blogToUpdate)

                
                fetch('http://localhost:8000/blogs/'+id, {
                method: 'PUT',
                body: updatedJson,
                headers: {
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then(data => {
                    console.log("data", data);
                    dispatch(updateComments(blogToUpdate))
            });
        });

        document.getElementById("commentForm").reset()
        
    }


    return (
        <div id="newCommentForm">
            <h3>Add a comment</h3>
            <form method="post" id="commentForm" onSubmit={handleSubmit}>
                <textarea name="newComment" id="newComment" placeholder="Write your comment here..."></textarea><br />
                <input type="submit" value="Comment" />
                <br /><br />
            </form>
        </div>
    )
}