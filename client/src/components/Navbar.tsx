import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/register"}>
        <p>Register</p>
      </Link>
      <Link to={"/login"}>
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Navbar;
