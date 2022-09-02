import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
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
      <div className="postContents">
        <div className="postHeader">
          <h1>Title</h1>
        </div>

        <div className="postTextContainer">
          put some tweet here as your tweet for the day
        </div>
        <div className="nameAndDeleteButton">
          <h3>@SeanYuTakaki</h3>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
