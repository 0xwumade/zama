require("dotenv").config();
const { ethers } = require("ethers");

async function main() {
  const contractAddress = "0x0a4C834d8D9F723b6B383A4cf008869E938a7106";

  const abi = [
    "function unlockTime() view returns (uint256)"
  ];

  // Use Infura directly
  const provider = new ethers.JsonRpcProvider(
    `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
  );

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const lock = new ethers.Contract(contractAddress, abi, wallet);

  const unlockTime = await lock.unlockTime();
  console.log("🔐 unlockTime:", unlockTime.toString());
}

main().catch((error) => {
  console.error("🚨 Interaction failed:", error);
  process.exitCode = 1;
});
