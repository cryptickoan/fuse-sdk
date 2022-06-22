import * as dotenv from 'dotenv'
import path from 'path'

import { TASK_NODE_CREATE_SERVER } from "hardhat/builtin-tasks/task-names";
import { JsonRpcProvider } from "@ethersproject/providers";

import hre from 'hardhat';

dotenv.config({path: path.resolve('../../', '.env')})

const provider = new JsonRpcProvider(process.env.HH_NODE)

async function resetForkedChain() {
    // Parent directory's hardhat.config.js needs these to be set
    const forkUrl = hre.config.networks.hardhat.forking?.url;
    const forkBlockNumber = hre.config.networks.hardhat.forking?.blockNumber;
    await hre.network.provider.request({
      method: 'hardhat_reset',
      params: [{
        forking: {
          jsonRpcUrl: forkUrl,
          blockNumber: forkBlockNumber
        }
      }]
    });
  }

  export {
    resetForkedChain,
    provider
  }