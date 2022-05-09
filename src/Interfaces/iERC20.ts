import { Interface } from "@ethersproject/abi";

const iERC20 = new Interface([
    'function decimals() public view returns (uint)',
    'function balanceOf(address) view returns (uint)',
    'function allowance(address owner, address spender) public view returns (uint256 remaining)',
    'function approve(address spender, uint256 value) public returns (bool success)',
])

export default iERC20