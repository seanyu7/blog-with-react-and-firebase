import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    //how to make a function of Logout
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>Logging out</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
