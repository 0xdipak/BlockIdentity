const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Identity", (m) => {
  const identity = m.contract('Identity')
  return {identity}
})
