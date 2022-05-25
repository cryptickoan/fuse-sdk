import { FusePoolData, OracleHashes } from "../../types";
import { Provider } from "@ethersproject/abstract-provider";
/**
 * @param fuseDirectoryAddress - Address for the fuse directory contract.
 * @param provider - An ethers provider.
 * @param poolId - The pool ID.
 * @param oracleHashes - A list of all known oracle hashes. Used to identify oracle version.
 * @returns - General pool data of the given pool. i.e Pool name, admin's address, oracle address, oracle model and comptroller's address.
 */
export declare function fetchFusePoolData(provider: Provider, fuseDirectoryAddress: string, poolId: number, oracleHashes: OracleHashes): Promise<FusePoolData | undefined>;
