import { Interface } from "@ethersproject/abi";

const iERC20 = new Interface([
    'function decimals() public view returns (uint8)',
    'function balanceOf(address) view returns (uint)'
])

export default iERC20