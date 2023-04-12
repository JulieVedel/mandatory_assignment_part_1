import Dialog from "../dialog/Dialog";
import { useSelector } from 'react-redux'

export default function Create() {
    const dialogFlag = useSelector((state) => state.createBlog.showDialog)

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

    }

    return (
        <div className="content">
            <h1>Create a new blog!</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author"/><br /><br />
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title"/><br /><br />
                <label htmlFor="content">Content</label><br />
                <textarea name="content" id="content"></textarea><br /><br />
                <input type="submit" value={"Submit"}/>
            </form>
            if (dialogFlag == true) {
                <Dialog></Dialog>
            }
            
        </div>
        
    )
}