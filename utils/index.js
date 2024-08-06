import { ethers } from "ethers";
import Identity from "./Identity.json";

const contractAddress = "0x7Bd6bF7E9f69D4ceCDEcE65A4Fe48D84339a6531";
const IdentityABI = Identity.abi;
export const contract = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      contractAddress,
      IdentityABI,
      signer
    );
    return contractReader;
  }
};
