import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getUser, userLogin } from "../../_services/authServices";
import { useState } from "react";
import login from "../../_assets/statics/login.webp";
import "./adminLogin.scss";
// import { Button, Form, Input } from "antd";

function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  // const [password, setPassword] = useState(null)
  const onFinish = (values) => {
    userLogin({
      username: user.username,
      password: user.password,
    })
      .then((response) => {
        Cookies.set("jwt", response.jwt, { expires: 365 });
        dispatch({
          type: "LOGIN",
          payload: {
            username: response.user.username,
            email: response.user.email,
            mobile: response.user.mobile,
            jwt: response.jwt,
            isAuth: true,
          },
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if (!jwt && jwt === undefined) {
      return;
    }
    try {
      getUser({ jwt: jwt }).then((res) => {
        if (res) {
          dispatch({
            type: "LOGIN",
            payload: {
              username: res.data.username,
              email: res.data.email,
              mobile: res.data.mobile,
              role: res.data.userRole,
              jwt: jwt,
              isAuth: true,
            },
          });
          navigate("/");
        } else {
          Cookies.remove("jwt");
        }
      });
    } catch (error) {
      Cookies.remove("jwt");
      navigate("/login");
    }
  });

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="left">
          <img src={login} alt="" className="image" />
        </div>
        <div className="right">
          <h2 className="login-title">Member Login</h2>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit" className="login-btn" onClick={onFinish}>
            login
          </button>
          <Link to="/registration" className="register-link">
            Create your Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
