import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdminLogin from "./components/Login/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import Registration from "./components/Register/Registration";
import "../src/_assets/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
