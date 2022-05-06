import { Interface } from "@ethersproject/abi";

const iMPO = new Interface([
    'function price(address underlying) external view returns (uint)'
])

export default iMPO