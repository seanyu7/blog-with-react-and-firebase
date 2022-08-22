import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/createpost">Create a Post</Link>
      <Link to="/login">LogIn</Link>
    </nav>
  );
};

export default Navbar;
