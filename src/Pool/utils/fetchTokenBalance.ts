// Ethers
import { BigNumber } from '@ethersproject/bignumber';
import { WeiPerEther } from '@ethersproject/constants';
import { Contract } from "@ethersproject/contracts";
import { Provider } from '@ethersproject/abstract-provider';
import { Zero } from '@ethersproject/constants';

// Interfaces
import iERC20 from "../../Interfaces/iERC20";

/**
 * 
 * @param tokenAddress - Token address to get balance from. (ERC20)
 * @param address - User's address to use. If not present the provider's user address will be used.
 * @param parse - This is a boolean. If true, the function will return an integer, otherwise a BigNumber will be returned.
 * @returns - The user's balance. Number or BigNumber.
 */
export async function fetchTokenBalance (
    provider: Provider,
    tokenAddress: string | undefined,
    address?: string,
    parse?: boolean
  ): Promise<number | BigNumber> {
    let balance: BigNumber;
  
    if (!tokenAddress) return 0;
  
    if (
      tokenAddress === "0x0000000000000000000000000000000000000000" ||
      tokenAddress === "NO_ADDRESS_HERE_USE_WETH_FOR_ADDRESS"
    ) {
      balance = await provider.getBalance(address);
    } else {

      const contract = new Contract(
        tokenAddress,
        iERC20,
        provider
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