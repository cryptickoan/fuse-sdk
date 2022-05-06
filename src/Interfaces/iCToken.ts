import { Interface } from "@ethersproject/abi";

const iCToken = new Interface([
    'function redeemUnderlying(uint redeemAmount) external returns (uint)',
    'function borrow(uint borrowAmount) returns (uint)',
    'function repayBorrow(uint repayAmount) returns (uint)',
    'function repayBorrow() payable',
    'function mint() payable',
    'function mint(uint mintAmount) returns (uint)'
])

export default iCToken