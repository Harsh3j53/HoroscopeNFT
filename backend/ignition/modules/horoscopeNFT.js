const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("horoscopeNFT", (m) => {
  const horoscopeNFT = m.contract("horoscopeNFT");
  const recipient = "your_recepient_address";
  const zodiacSign = "zodiacSign";

  m.call(horoscopeNFT, "mintNFT", [recipient, zodiacSign]);

  return { horoscopeNFT };
});