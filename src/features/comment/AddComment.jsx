
import { useParams } from "react-router-dom";

export default function AddComment(props) {
    const {id} = useParams()

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