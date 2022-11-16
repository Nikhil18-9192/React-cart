// import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.login);
  const logout = () => {
    Cookies.remove("jwt");
    navigate("/login");
  };
  return (
    <div>
      <h1>{user.username}</h1>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <button onClick={logout}>Log out</button>

      {/* <Button
        onClick={() => {
          Cookies.remove("jwt");
          navigate("/login");
        }}
      >
        Log out
      </Button> */}
    </div>
  );
}

export default Home;
