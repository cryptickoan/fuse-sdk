import { keccak256 } from '@ethersproject/keccak256';
import { Provider } from '@ethersproject/abstract-provider';

/**
 * @param oracleAddress - Oracle address to use.
 * @returns - The oracle model.
 */
export const identifyPriceOracle = async function (
    oracleAddress: string,
    provider: Provider,
    oracleHashes: string[],
  ): Promise<string | null> {
    // Get price oracle contract name from runtime bytecode hash
    const runtimeBytecodeHash = keccak256(
      await provider.getCode(oracleAddress)
    );
    
    for (const model of Object.keys(
      oracleHashes
    )) {
      if (
        runtimeBytecodeHash ===
        oracleHashes[model]
      )
        return model;
    }
    return null;
  };