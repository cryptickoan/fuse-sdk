import { Interface } from "@ethersproject/abi";

const iFlywheel = new Interface([
    'function isFlywheel() view returns (bool)',
    'function isRewardsDistributor() public view returns (bool)',
  ])

export default iFlywheel