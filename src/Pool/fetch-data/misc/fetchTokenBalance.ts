// Ethers
import { BigNumber } from '@ethersproject/bignumber';
import { WeiPerEther } from '@ethersproject/constants';
import { Contract } from "@ethersproject/contracts";

// Interfaces
import iERC20 from "../../../Interfaces/iERC20";

/**
 * 
 * @param tokenAddress - Token address to get balance from. (ERC20)
 * @param address - User's address to use. If not present the provider's user address will be used.
 * @param parse - This is a boolean. If true, the function will return an integer, otherwise a BigNumber will be returned.
 * @returns - The user's balance. Number or BigNumber.
 */
export async function fetchTokenBalance (
    tokenAddress: string | undefined,
    address?: string,
    parse?: boolean
  ): Promise<number | BigNumber> {
    let balance;
  
    // if (chainId !== 1) return constants.Zero;
  
    if (!tokenAddress) return 0;
  
    if (!address || address === "0x0000000000000000000000000000000000000000") {
      balance = "0";
    } else if (
      tokenAddress === "0x0000000000000000000000000000000000000000" ||
      tokenAddress === "NO_ADDRESS_HERE_USE_WETH_FOR_ADDRESS"
    ) {
      balance = await this._provider.getBalance(address);
    } else {

      const contract = new Contract(
        tokenAddress,
        iERC20,
        this._provider
      );

      balance = await contract.callStatic.balanceOf(address);
    }

    if (parse) {
    const parsedBalance = parseFloat(
      balance.div(
        WeiPerEther
        ).toString()
      )
  
      return parsedBalance;
    }

    return balance
  };