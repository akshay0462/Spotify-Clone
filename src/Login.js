import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="\Logo3.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO PLAYER</a>
    </div>
  );
}

export default Login;