import React, { useState, useCallback } from "react";
import TextEditor from "./TextEditor";
import ImageUpload from "./ImageUpload";



function CreatePost() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const handleContentChange = useCallback((newContent) => setContent(newContent), []);
  const handleImageChange = useCallback((newImage) => setImage(newImage), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content: content, image }),
      });
      const blogPost = await response.json();
      console.log(blogPost);
    } catch (error) {
      console.error(error);
    }
  };
    return (
      <form onSubmit={handleSubmit}>
        <h4 className="font-bold">Add New Post</h4>
        <input
          className="h-12 shadow-zinc-800 w-full rounded-sm mb-4 pl-4"
          placeholder="Title"
          name="title"
        />
        <span className="font-bold">Content</span>
        <TextEditor
          content={content}
          onChange={handleContentChange}
          style={{
            height: 2000,
          }}
        />
        <div className="mt-6">
          <span className="font-bold">Thumbnail</span>
        </div>
        <ImageUpload onChange={handleImageChange}/>
        <button className="btn btn-primary mt-4" type="submit">
          Submit
        </button>
      </form>
    );
  }
  
  export default CreatePost;
  
  
  
  