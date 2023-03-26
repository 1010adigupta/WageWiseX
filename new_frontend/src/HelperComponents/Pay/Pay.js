import React from "react";
import style from "./Pay.module.css";
import { Navigate } from "react-router-dom";

const Pay = (props) => {

    const handlePay = () => {

    }
    return(
        <button className={style.button} onClick={props.onClick}>{props.text}</button>
    )
}

export default Pay;