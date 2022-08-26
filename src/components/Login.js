import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const logInWithGoogle = () => {
    //how to make a function of login with google account.
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
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
