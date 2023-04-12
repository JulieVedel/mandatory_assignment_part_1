export default function Comment(props) {
    console.log(props.comments);

    if (props.comments == undefined) {
        return (
            <div>
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
            <h3 className="commentTitle">Comments:</h3>
            <div id="outline">
                { commentList() }
            </div>

        </div>
    )
}