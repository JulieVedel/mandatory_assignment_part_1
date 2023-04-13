import AddComment from "./AddComment";

export default function Comment(props) {

    if (props.comments == undefined) {
        return (
            <div>
                <AddComment></AddComment>
                <h3 className="commentTitle">There is no comments yet</h3>  
            </div>
        )
    } 

    const commentList = () => (
        props.comments.map((comment) => (
            <div className="comment">
                <p>{comment}</p>    
            </div>
          )
        )
      )


    return (
        <div>
            <AddComment commentList={props.comments}></AddComment>
            <h3 className="commentTitle">Comments:</h3>
            <div id="outline">
                { commentList() }
            </div>

        </div>
    )
}