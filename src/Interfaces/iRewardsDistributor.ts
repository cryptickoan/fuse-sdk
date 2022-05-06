import { Interface } from "@ethersproject/abi";

const iRewardsDistributor = new Interface([
    'function getAllMarkets() view returns (address[])',
    'function compSupplySpeeds(address) public returns (uint256)',
    'function compBorrowSpeeds(address) public returns (uint256)',
    'function rewardToken() view returns (address)'
])

export default iRewardsDistributor