import { useState } from "react";
import data from '../../data/db.json'

export default function Create() {
    const [blogData, setBlogData] = useState({author: "", title: "", content: ""})


    function handleSubmit(event) {
        event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);

        console.log(JSON.stringify(Object.fromEntries(formData.entries())));

        const newBlogData = Object.fromEntries(formData.entries())

        console.log(newBlogData);
        console.log(data.blogs);

        //data.blogs.push(JSON.stringify(Object.fromEntries(formData.entries())))

        const test = {
            id: 5,
            author: "Julie", 
            title: "Hejsa", 
            content: "Dette er en test"
        }

        const dataArray = data.blogs
        console.log(dataArray);


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
        </div>
    )
}
