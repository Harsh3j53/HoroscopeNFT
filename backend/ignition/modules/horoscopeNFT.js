const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("horoscopeNFT", (m) => {
  const horoscopeNFT = m.contract("horoscopeNFT");
  const recipient = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f";
  const zodiacSign = "leo";

  m.call(horoscopeNFT, "mintNFT", [recipient, zodiacSign]);

  return { horoscopeNFT };
});