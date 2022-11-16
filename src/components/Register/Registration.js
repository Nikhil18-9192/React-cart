import React, { useState } from "react";
// import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../_services/authServices";
import login from "../../_assets/statics/login.webp";

function Registration() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const onFinish = () => {
    registerUser(user)
      .then((response) => {
        // Handle success.
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    // <div>
    //   <input
    //     type="text"
    //     placeholder="username"
    //     onChange={(e) => setUser({ ...user, username: e.target.value })}
    //   />
    //   <input
    //     type="email"
    //     placeholder="email"
    //     onChange={(e) => setUser({ ...user, email: e.target.value })}
    //   />
    //   <input
    //     type="password"
    //     placeholder="password"
    //     onChange={(e) => setUser({ ...user, password: e.target.value })}
    //   />
    //   <input
    //     type="number"
    //     placeholder="phone"
    //     onChange={(e) => setUser({ ...user, mobile: e.target.value })}
    //   />
    //   <button type="submit" onClick={onFinish}>
    //     Register
    //   </button>
    // </div>
    <div className="main-container">
      <div className="login-container">
        <div className="left">
          <img src={login} alt="" className="image" />
        </div>
        <div className="right">
          <h2 className="login-title">Member Register</h2>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="email"
            className="login-input"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            type="number"
            className="login-input"
            placeholder="phone"
            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          />
          <button type="submit" className="login-btn" onClick={onFinish}>
            Register
          </button>
          <Link to="/login" className="register-link">
            Already have Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
