/** @type import('hardhat/config').HardhatUserConfig */


require('dotenv').config();


module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {chainId:80001},
    polygon_mumbai: {
      url: `https://rpc.ankr.com/polygon_mumbai`,
      accounts:[`0x${process.env.PRIVATE_KEY}`]
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
