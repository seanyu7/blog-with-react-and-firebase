import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
const navigate = useNavigate();

  const logInWithGoogle = () => {
    //how to make a function of login with google account.
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      //このままではログインした状態にはなるがリロードすれば、またログインしていない状態になってしまうため、リロードしても状態を保って置けるようにしなければならない。
      navigate("/");
    // used a navigation to navigate which autiomatically move into the home page.
    });
  };

  return (
    <div>
      <p>Login to get started</p>
      <button onClick={logInWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
