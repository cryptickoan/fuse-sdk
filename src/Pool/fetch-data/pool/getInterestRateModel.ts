import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { keccak256 } from "@ethersproject/keccak256";
import { Provider } from '@ethersproject/abstract-provider';

// IRMS
import DAIInterestRateModelV2 from '../../irm/DAIInterestRateModelV2';
import JumpRateModel from '../../irm/JumpRateModel';
import JumpRateModelV2 from '../../irm/JumpRateModelV2';
import WhitePaperInterestRateModel from "../../irm/WhitePaperInterestRateModel";

/**
 * @param marketAddress - The cToken/market address to query.
 * @returns - An initiated IRM class, used to simulate future supply/borrow rates.
 */
export const getInterestRateModel = async function (
    marketAddress: string,
    provider: Provider
  ): Promise<any | undefined> {

    const cTokenInterface = new Interface([
      "function interestRateModel() view returns (address)"
    ])
    // Get interest rate model address from asset address
    const assetContract = new Contract(
      marketAddress,
      cTokenInterface,
      provider
    );

    // Get IRM address
    const interestRateModelAddress: string =
      await assetContract.callStatic.interestRateModel();

    //  Identify IRM
    const interestRateModels: { [key: string]: any } = {
      JumpRateModel: JumpRateModel,
      JumpRateModelV2: JumpRateModelV2,
      DAIInterestRateModelV2: DAIInterestRateModelV2,
      WhitePaperInterestRateModel: WhitePaperInterestRateModel,
    };

    const runtimeBytecodeHash = keccak256( await provider.getCode(interestRateModelAddress))

    let irm;
    outerLoop: for (const model of Object.keys(interestRateModels)) {
      if (interestRateModels[model].RUNTIME_BYTECODE_HASHES !== undefined) {
        for (const hash of interestRateModels[model]
          .RUNTIME_BYTECODE_HASHES) {
          if (runtimeBytecodeHash === hash) {
            irm = new interestRateModels[model]();
            break outerLoop;
          }
        }
      } else if (
        runtimeBytecodeHash ===
        interestRateModels[model].RUNTIME_BYTECODE_HASH
      ) {
        irm = new interestRateModels[model]();
        break;
      }
    }

    await irm.init(
      interestRateModelAddress,
      marketAddress,
      provider
    );

    return irm;
  };