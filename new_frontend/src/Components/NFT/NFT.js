import { ethers } from "ethers";
import { contractAbi } from "./abi";

  export async function getNFT() {
    const getAccount = async () => {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        return accounts[0];
      };
    // Create a new instance of the ethers provider using your preferred network
    const account = await getAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(account);


    // Define the contract address of the smart contract
    const contractAddress = "0x1C8b2239C5938C1edca4d5a4370C1e1e7135881C";

    // Create a new instance of the contract using the ABI and provider
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    // Call the function with the desired parameters
    const result = await contract.awardItem(
      "0x444ff6b3f3cE5409f7E10d06A7162ff433051f75",
      "ipfs://bafyreifvl4ten4lr32spysogwg2c6tqfjl5r4vgfx5a2iql65ed5ltjliy/metadata.json"
    );

    // The result variable will contain the return value of the function
    console.log(result);
  };

