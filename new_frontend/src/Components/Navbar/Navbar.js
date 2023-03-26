import React from "react";
import style from "./Navbar.module.css";
import logo from "./assets/logo.png";

const Navbar = () => {
    return(
        <div className={style.navbar}>
            <div className={style.navbar__logo}>
                <img style={{width:"200px"}} src={logo} alt="logo" />
            </div>
            <div className={style.navbar__links}>
                <button className={style.navButton} type="submit">Logout</button>
            </div>
        </div>
    )
}

export default Navbar;