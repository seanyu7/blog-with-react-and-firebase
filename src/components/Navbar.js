import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faCoffee} />
        Home
      </Link>
      <Link to="/createpost">Create a Post</Link>
      <Link to="/login">LogIn</Link>
    </nav>
  );
};

export default Navbar;
