import Dialog from "../dialog/Dialog";
import { useDispatch } from 'react-redux'
import { openDialog } from "./createBlogSlice";

export default function Create() {
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);

        console.log(JSON.stringify(Object.fromEntries(formData.entries())));

        const newBlogData = JSON.stringify(Object.fromEntries(formData.entries()))

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: newBlogData
        }

        fetch('http://localhost:8000/blogs', requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
        
        dispatch(openDialog())

        document.getElementById("blogForm").reset()
    }

    
    return (
        <div className="content">
            <h1>Create a new blog!</h1>
            <form action="" method="post" id="blogForm" onSubmit={handleSubmit}>
                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author"/><br /><br />
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title"/><br /><br />
                <label htmlFor="content">Content</label><br />
                <textarea name="content" id="content"></textarea><br /><br />
                <input type="submit" value={"Submit"}/>
            </form>
            <Dialog></Dialog>
        </div>
        

    )
}
