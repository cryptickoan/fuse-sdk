// Ethers
import { keccak256 } from '@ethersproject/keccak256';
import { Provider } from '@ethersproject/abstract-provider';

// Types
import { OracleHashes } from '../../types';

/**
 * @param oracleAddress - Oracle address to use.
 * @returns - The oracle model.
 */
export const identifyPriceOracle = async function (
    provider: Provider,
    oracleAddress: string,
    oracleHashes: OracleHashes,
  ): Promise<string | null> {
    // Get price oracle contract name from runtime bytecode hash
    const runtimeBytecodeHash = keccak256(
      await provider.getCode(oracleAddress)
    );
        return oracleHashes[runtimeBytecodeHash];
  }