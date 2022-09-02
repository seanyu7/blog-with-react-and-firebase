import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Home.css";

const Home = () => {
  const [postLists, setPostLists] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(collection(db, "posts"));
      //console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      //forebaseの場合データの階層が複雑に構成されているためデータを取り出すことがかなり難しいので、spread構文を使ってデータを取り出すことが必要となる。
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //この方法で状態変数にデータを格納することで、useStateにて使用可能となる。
    };
    getPost();
  }, []);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        //このreturnは画面上に表示させたい部分を記述する際に使うもので、returnのなかでmap関数などの関数を使って新たに画面に表示させてい場合は、returnのなかでreturnを使うことができる。
        console.log(post);
        return (
      <div className="postContents">
        <div className="postHeader">
          <h1>{post.title}</h1>
        </div>

        <div className="postTextContainer">
          {post.postsText}
        </div>
        <div className="nameAndDeleteButton">
          <h3>@{post.author.username}</h3>
          <button>Delete</button>
        </div>
      </div>
      );
})};
    </div>
  );
};

export default Home;
