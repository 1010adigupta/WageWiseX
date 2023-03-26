import React from "react";
import style from "./Auth.module.css";
import logo from "./assets/logo.png";
import LoginButton from "../../HelperComponents/LoginButton/LoginButton";
import {Link}  from "react-router-dom";

const HRLogin = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.logo}>
          <img style={{width:"400px"}} src={logo} alt="logo" />
        </div>
        <h1 className={style.heading}>Login</h1>
        <div>
            <form className={style.form}>
                <input className={style.inputBox} type="text" placeholder="Username" />
                <input className={style.inputBox} type="password" placeholder="Password" />
                <Link to="/hdashboard"><button className={style.button} type="submit">Login</button></Link>
            </form>
        </div>
      </div>
    </div>
  );
};

export default HRLogin;
