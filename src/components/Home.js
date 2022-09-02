import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db , auth} from "../firebase";
import "./Home.css";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(collection(db, "posts"));
      //console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      //forebaseの場合データの階層が複雑に構成されているためデータを取り出すことがかなり難しいので、spread構文を使ってデータを取り出すことが必要となる。
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //この方法で状態変数にデータを格納することで、useStateにて使用可能となる。
    };
    getPost();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
    //上記の書き方をした場合、削除ボタンを押すことで自走的にページがリロードされることで、データが削除されたことが反映される。
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        //このreturnは画面上に表示させたい部分を記述する際に使うもので、returnのなかでmap関数などの関数を使って新たに画面に表示させてい場合は、returnのなかでreturnを使うことができる。
        console.log(post);
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>

            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>@</h3>
              {post.author.id === auth.currentUser.uid && (
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              )}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Home;
