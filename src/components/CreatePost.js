import React, { useEffect } from "react";
import "./createpost.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        //上記auth.currentUser.displayNameはどのユーザーが現在使用しているのかについてfirebase内にあるデータから取得するためにfirebase側が用意したプロパティのこと。
        id: auth.currentUser.uid,
        //これを使うことで、どのユーザーが投稿したのかを判別することができる。
      },
    });
    navigate("/");
  };

  useEffect(()=>{
    if (!isAuth){
      navigate("/login");
    }
  })


  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>creating a post</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="Put in your title here"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Tweet</div>
          <textarea
            placeholder="Put in your thoughts now"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          Tweet
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
