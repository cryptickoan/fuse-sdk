import { PoolInformation } from "../../types";
import { Provider } from "@ethersproject/abstract-provider";
/**
 * @returns - Pool general info. Name, creator, comptroller address and time of creation.
 */
export declare function getPool(provider: Provider, fuseDirectoryAddress: string, poolId: number): Promise<PoolInformation>;
