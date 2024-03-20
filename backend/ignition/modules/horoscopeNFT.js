const { ethers } = require("ethers");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { PRIVATE_KEY } = process.env;

module.exports = buildModule("horoscopeNFT", async (m) => {
  const horoscopeNFT = m.contract("horoscopeNFT");
  const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/d13gG0RvRZ8mHqYMnnSEyBpkRuvUiHHt"); // Replace with your provider URL
  const wallet = new ethers.Wallet(`0x${PRIVATE_KEY}`, provider); // Replace with your wallet private key
  const signer = wallet.connect(provider);

  // Deploy the contract
  const deployTx = await horoscopeNFT.deploy().connect(signer);
  await deployTx.wait();

  // Get the transaction hash
  console.log("Transaction hash:", deployTx.hash);

  return { horoscopeNFT: deployTx.contract };
});
