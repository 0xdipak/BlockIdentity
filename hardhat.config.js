require("@nomicfoundation/hardhat-toolbox");

const privateKey = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: { chainId: 4202 },
    sepolia: {
      url: "RPC URL",
      accounts: [
        "PRIVATE_KEY",
      ],
    },
  },
  solidity: "0.8.24",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};
