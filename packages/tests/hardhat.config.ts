import "@nomiclabs/hardhat-waffle";
import * as dotenv from 'dotenv';
import path from 'path'

dotenv.config({path: path.resolve('../../','.env')});

const rpcUrl = process.env.RPC_URL

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: "0.8.4",

  networks: {
    hardhat: {
      forking: {
        url: rpcUrl
      }
    }
  }
};
