import { Provider } from '@ethersproject/abstract-provider';
/**
 *
 * @param rdAddress - The reward's distributor contract address.
 * @param marketAddress - The market to get speeds for.
 * @param oracleAddress - The comptroller's oracle.
 * @param comptrollerAddress - The comptroller's address.
 * @param type - Will be used to get the reward distribution speed for supply or borrow.
 * @returns - An object with APR and APY of given type. i.e Supply APR/APY, Borrow APR/APY.
 */
export declare function getRewardAPYForMarket(rdAddress: string, marketAddress: string, oracleAddress: string, comptrollerAddress: string, type: 'supply' | 'borrow', provider: Provider): Promise<{
    supplyAPR: number;
    supplyAPY: number;
}>;
