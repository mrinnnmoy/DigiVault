// Import the Hardhat runtime environment
const hre = require("hardhat");

// Main function to deploy the contract
async function main() {
  // Get the contract factory for the Storage contract
  const Storage = await hre.ethers.getContractFactory("Storage");

  // Deploy & Log the deployed Storage contract
  const storage = await Storage.deploy();
  await storage.deployed();
  console.log("Contract Deployed at:", storage.address);
}

// Call the main function and handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});