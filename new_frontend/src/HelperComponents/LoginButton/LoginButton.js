import React from "react";
import style from "./LoginButton.module.css";

const LoginButton = (props) => {
    return(
        <button className={style.button} onClick={props.onClick}>{props.text}</button>
    )
}

export default LoginButton;
