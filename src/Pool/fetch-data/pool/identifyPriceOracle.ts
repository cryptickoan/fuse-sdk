import { keccak256 } from '@ethersproject/keccak256';

/**
 * @param oracleAddress - Oracle address to use.
 * @returns - The oracle model.
 */
export const identifyPriceOracle = async function (oracleAddress: string): Promise<string | null> {
    // Get price oracle contract name from runtime bytecode hash
    const runtimeBytecodeHash = keccak256(
      await this._provider.getCode(oracleAddress)
    );
    
    for (const model of Object.keys(
      this.oracleHashes
    )) {
      if (
        runtimeBytecodeHash ===
        this.oracleHashes[model]
      )
        return model;
    }
    return null;
  };