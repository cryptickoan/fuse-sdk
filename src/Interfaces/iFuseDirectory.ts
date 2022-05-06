import { Interface } from "@ethersproject/abi";

const iFuseDirectory = new Interface([
    'function pools(uint256) view returns (string name, address creator, address comptroller, uint256 blockPosted, uint256 timestampPosted)'
])

export default iFuseDirectory