import React from "react";
import "./createpost.css";

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>creating a post</h1>
        <div className="inputPost">
          <div>Title</div>
          <input type="text" placeholder="Put in your title here" />
        </div>
        <div className="inputPost">
          <div>Tweet</div>
          <textarea placeholder="Put in your thoughts now"></textarea>
        </div>
        <button className="postButton">Tweet</button>
      </div>
    </div>
  );
};

export default CreatePost;
