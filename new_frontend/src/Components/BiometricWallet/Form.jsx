import { Button, Input, Box, Text, VStack, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { errors } from "ethers";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IntmaxWalletSigner, NoRedirect } from "webmax";
import zod from "zod";
import { useAccountContext } from "./useAccount";

const schema = zod.object({
  to: zod.string(),
  value: zod.string(),
});

export default function Form() {
  const { account } = useAccountContext();
  const [receipt, setReceipt] = useState(null);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    const signer = new IntmaxWalletSigner(account);
    const tx = {
      to: address,
      value: amount,
      gasLimit: 21000,
    };
    const res = await signer.sendTransaction(tx);
    setReceipt(JSON.stringify(res));
    console.log(receipt);
  };

  return (
    <div
      style={{
        backgroundColor: "#04111D",
        height: "100vh",
        padding: "10%",
      }}
    >
      <h1 style={{ color: "#fff" }}>Pay to Employee</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "30%",
            height: "40px",
            margin: "10px 0 10px 0",
            borderRadius: "10px",
            border: "none",
            padding: "0 10px 0 10px",
            fontSize: "16px",
          }}
          type="text"
          placeholder="Enter Wallet Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          style={{
            width: "30%",
            height: "40px",
            margin: "10px 0 10px 0",
            borderRadius: "10px",
            border: "none",
            padding: "0 10px 0 10px",
            fontSize: "16px",
          }}
          type="text"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          style={{
            width: "20%",
            height: "40px",
            margin: "10px 0 10px 0",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
            background: "#882de3",
            color: "#fff",
          }}
          type="submit"
          onClick={handlePayment}
        >
          Send Transaction
        </button>
      </form>
    </div>
  );
}
