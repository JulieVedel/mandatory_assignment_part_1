import AddComment from "./AddComment";

export default function Comment(props) {

    if (!props.comments.length) {
        return (
            <div>
                <AddComment></AddComment>
                <h3 className="commentTitle">There is no comments yet</h3>  
            </div>
        )
    } 
    console.log(props.comments);
    const commentList = () => (
        props.comments.map((comment, index) => (
            <div key={`${comment}-${index}`} className="comment">
                <p>{comment}</p>    
            </div>
          )
        )
      )


    return (
        <div>
            <AddComment></AddComment>
            <h3 className="commentTitle">Comments:</h3>
            <div>
                { commentList() }
            </div>

        </div>
    )
}