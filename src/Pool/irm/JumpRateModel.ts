import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { Interface } from "@ethersproject/abi";
import { WeiPerEther } from '@ethersproject/constants';

export interface JumpRateModelInterface {
   JumpRateModel
}

export default class JumpRateModel {
  static RUNTIME_BYTECODE_HASHES = [
    "0x00f083d6c0022358b6b3565c026e815cfd6fc9dcd6c3ad1125e72cbb81f41b2a",
    "0x47d7a0e70c9e049792bb96abf3c7527c7543154450c6267f31b52e2c379badc7"
  ];
  
  initialized: boolean | undefined;
  baseRatePerBlock: BigNumber | undefined;
  multiplierPerBlock: BigNumber | undefined;
  jumpMultiplierPerBlock: BigNumber | undefined;
  kink: BigNumber | undefined;
  reserveFactorMantissa: BigNumber | undefined;
  RUNTIME_BYTECODE_HASHES

  async init(interestRateModelAddress: string, assetAddress: string, provider: any) {
    const irmInterface = new Interface([
      'function baseRatePerBlock() view returns (uint256)',
      'function multiplierPerBlock() view returns (uint256)',
      'function jumpMultiplierPerBlock() view returns (uint256)',
      'function kink() view returns (uint256)'
    ])

    const irmContract = new Contract(
      interestRateModelAddress,
      irmInterface,
      provider
    )

    this.baseRatePerBlock = await irmContract.callStatic.baseRatePerBlock()
    this.multiplierPerBlock = await irmContract.callStatic.multiplierPerBlock()
    this.jumpMultiplierPerBlock = await irmContract.callStatic.jumpMultiplierPerBlock()
    this.kink = await irmContract.callStatic.kink()

    const cTokenInterface1 = new Interface([
      'function reserveFactorMantissa() view returns (uint256)',
      'function adminFeeMantissa() view returns (uint256)',
      'function fuseFeeMantissa() view returns (uint256)'
    ])

    const cTokenContract1 = new Contract(
      assetAddress,
      cTokenInterface1,
      provider
    )
    this.reserveFactorMantissa = await cTokenContract1.callStatic.reserveFactorMantissa()
    this.reserveFactorMantissa = this.reserveFactorMantissa.add(await cTokenContract1.callStatic.adminFeeMantissa())
    this.reserveFactorMantissa = this.reserveFactorMantissa.add(await cTokenContract1.callStatic.fuseFeeMantissa())
    this.initialized = true;
  }

  getBorrowRate(utilizationRate: BigNumber) {
    if (!this.initialized || !this.kink || !this.multiplierPerBlock || !this.baseRatePerBlock || !this.jumpMultiplierPerBlock) throw new Error("Interest rate model class not initialized.");
    if (utilizationRate.lte(this.kink)) {
      return utilizationRate.mul(this.multiplierPerBlock).div(WeiPerEther).add(this.baseRatePerBlock);
    } 
    else {
      const normalRate = this.kink.mul(this.multiplierPerBlock).div(WeiPerEther).add(this.baseRatePerBlock);
      const excessUtil = utilizationRate.sub(this.kink);
      return excessUtil.mul(this.jumpMultiplierPerBlock).div(WeiPerEther).add(normalRate);
    }
  }

  getSupplyRate(utilizationRate: BigNumber) {
    if (!this.initialized || !this.reserveFactorMantissa) throw new Error("Interest rate model class not initialized.");
    const oneMinusReserveFactor = WeiPerEther.sub(this.reserveFactorMantissa);
    const borrowRate = this.getBorrowRate(utilizationRate);
    const rateToPool = borrowRate.mul(oneMinusReserveFactor).div(WeiPerEther);
    return utilizationRate.mul(rateToPool).div(WeiPerEther);
  }
}
