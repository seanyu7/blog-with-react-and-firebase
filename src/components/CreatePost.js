import React from "react";
import "./createpost.css";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const createPost = () => {
    console.log(title)
    console.log(postText)
  }

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>creating a post</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="Put in your title here"
            onchange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Tweet</div>
          <textarea
            placeholder="Put in your thoughts now"
            onchange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>Tweet</button>
      </div>
    </div>
  );
};

export default CreatePost;
