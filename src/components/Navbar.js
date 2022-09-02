import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
  faArrowRotateBack,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>

      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          LogIn
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            Create a Post
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRotateBack} />
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
