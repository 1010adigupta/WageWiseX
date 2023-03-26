import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Hdashboard.module.css";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../searchBar/SearchBar";
import { Table } from "antd";
import { dataSource, columns } from "../Table/Table";
import LoginButton from "../../HelperComponents/LoginButton/LoginButton";
import { useAccountContext } from "./../BiometricWallet/useAccount";
import { IntmaxWalletSigner } from "webmax";
import profile from "./assets/photo.png"

function Hdashboard() {
  const navigate = useNavigate();
  const handlePay = () => {
    navigate("/form");
  }  
  const { account, setAccount } = useAccountContext();
  const handleConnect = async () => {
    const signer = new IntmaxWalletSigner();
    const res = await signer.connectToAccount();
    setAccount(res);
  };
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.top}>
          <div>
            <div className="icon">
              <img src={profile} className={style.profile}></img>
            </div>
            <div>
              <p className={style.name}>Name: Vaishnavi</p>
              <p className={style.id}>Wallet Address: 0xAf9b360b3AbC858f399c4C60E5ed0B6451918c69 </p>
            </div>
          </div>
          <LoginButton
            text={"Connect to Biometric Wallet"}
            onClick={handleConnect}
          />
        </div>
        <Table
          dataSource={dataSource}
          columns={columns(handlePay)}
          style={{
            position: "absolute",
            height: "20%",
            width: "61.7%",
            top: "55%",
            left: "20%",
            opacity: "0.7",
            borderRadius: "10px 10px 0px 0px",
          }}
        />
      </div>
    </>
  );
}

export default Hdashboard;
