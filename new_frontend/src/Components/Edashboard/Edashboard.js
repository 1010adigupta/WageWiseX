import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Edashboard.module.css";
import { Table } from "antd";
import { dataSource, columns } from "./Table";
import LoginButton from "../../HelperComponents/LoginButton/LoginButton";
import { Link } from "react-router-dom";
import profile from "./assets/profile.png"

function Edashboard() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div>
          <div className="icon">
            <img src={profile} className={style.profile}></img>
          </div>
          <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginRight: "100px",
            }}>
            <div> 
              <p className={style.name}> Name: Aditya Gupta </p>
              <p className={style.designation}>
                Wallet Address: 0x444ff6b3f3cE5409f7E10d06A7162ff433051f75{" "}
              </p>
            </div>
            <Link to="/swap">
              <LoginButton text={"Perform Cross Chain Swap"} />
            </Link>
          </div>
        </div>
        <h3 className={style.heading}>Employee Portfolio</h3>
        <Table
          dataSource={dataSource}
          columns={columns}
          style={{
            width: "86.4%",
            position: "absolute",
            height: "20%",
            left: "6.4%",
            top: "55%",
            background: "#2352D5",
            opacity: "0.7",
            borderRadius: "10px 10px 0px 0px",
          }}
        />
      </div>
    </>
  );
}
export default Edashboard;
