import { Interface } from "@ethersproject/abi";

const iComptroller = new Interface([
    'function getRewardsDistributors() external view returns (address[] memory)',
    'function getAllMarkets() view returns (address[])',
    'function oracle() returns (address)',
    'function admin() returns (address)',
    'function suppliers(address) returns (bool)',
    'function getAllBorrowers() returns (address[])'
])

export default iComptroller