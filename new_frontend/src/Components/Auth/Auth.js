import React from "react";
import style from "./Auth.module.css";
import logo from "./assets/logo.png";
import LoginButton from "../../HelperComponents/LoginButton/LoginButton";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.logo}>
          <img style={{width:"400px"}} src={logo} alt="logo" />
        </div>
        <h1 className={style.heading}>Login</h1>
        <div className={style.buttonGroup}>
          <Link to="/e/login" ><LoginButton text={"As an employee"} /></Link>
          <Link to="/h/login"><LoginButton text={"As an HR"} /></Link>
          <p style={{ color: "white", fontSize: "32px" }}>Forgot Password?</p>
        </div>
        <div className={style.footer}>
          <p style={{ color: "white", fontSize: "32px" }}>
            Don't have an account? Create one here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
