import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVxqlv8JFL--SOWGPMSbFH-6RTZc2n47U",
  authDomain: "blog-with-react-and-fire-92e57.firebaseapp.com",
  projectId: "blog-with-react-and-fire-92e57",
  storageBucket: "blog-with-react-and-fire-92e57.appspot.com",
  messagingSenderId: "710623400670",
  appId: "1:710623400670:web:0c2fc8fe6eaf70ae85a84f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //この記述はfirebaseを初期化する際に必要となるもので、firebaseのauthentificationを使う際には必要となる。（認証の初期化）
const provider = new GoogleAuthProvider(); //Google認証のためのプロバイダーを作成する。//インスタンス化というらしい。
const db = getFirestore(app); //firestoreのデータベースを初期化する。

export {auth, provider, db};