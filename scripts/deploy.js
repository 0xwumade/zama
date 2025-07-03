const hre = require("hardhat");

async function main() {
  const ONE_MINUTE_IN_SECS = 60;
  const unlockTime = Math.floor(Date.now() / 1000) + ONE_MINUTE_IN_SECS;

  const lockedAmount = hre.ethers.parseEther("0.0001");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // ✅ No need to call lock.deployed(); just wait for .deploy()
  console.log("✅ Lock deployed to:", lock.target); // use `.target` instead of `.address` in Ethers v6
}

main().catch((error) => {
  console.error("🚨 Deployment failed:", error);
  process.exitCode = 1;
});
