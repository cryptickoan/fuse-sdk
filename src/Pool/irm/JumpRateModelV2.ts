import { Interface } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { WeiPerEther } from '@ethersproject/constants'

export default class JumpRateModelV2 {
  static RUNTIME_BYTECODE_HASH = "0xc6df64d77d18236fa0e3a1bb939e979d14453af5c8287891decfb67710972c3c";

  initialized: boolean | undefined;
  baseRatePerBlock: BigNumber | undefined;
  multiplierPerBlock: BigNumber | undefined;
  jumpMultiplierPerBlock: BigNumber | undefined;
  kink: BigNumber | undefined;
  reserveFactorMantissa: BigNumber | undefined;

  async init(interestRateModelAddress: string, assetAddress: string, provider: any) {

    const irmInterface = new Interface([
      'function baseRatePerBlock() view returns (uint256)',
      'function multiplierPerBlock() view returns (uint256)',
      'function jumpMultiplierPerBlock() view returns (uint256)',
      'function kink() view returns (uint256)'
    ])

    const jumpRateModelContract = new Contract(
      interestRateModelAddress,
      irmInterface,
      provider
    );

    this.baseRatePerBlock = await jumpRateModelContract.callStatic.baseRatePerBlock();
    this.multiplierPerBlock = await jumpRateModelContract.callStatic.multiplierPerBlock();
    this.jumpMultiplierPerBlock = await jumpRateModelContract.callStatic.jumpMultiplierPerBlock();
    this.kink = await jumpRateModelContract.callStatic.kink();

    const cTokenInterface = new Interface([
      'function reserveFactorMantissa() view returns (uint256)',
      'function adminFeeMantissa() view returns (uint256)',
      'function fuseFeeMantissa() view returns (uint256)'
    ])

    const cTokenContract = new Contract(
      assetAddress,
      cTokenInterface,
      provider
    );
    this.reserveFactorMantissa = await cTokenContract.callStatic.reserveFactorMantissa();
    this.reserveFactorMantissa = this.reserveFactorMantissa.add( await cTokenContract.callStatic.adminFeeMantissa());
    this.reserveFactorMantissa = this.reserveFactorMantissa.add( await cTokenContract.callStatic.fuseFeeMantissa());
    this.initialized = true;
  }

  getBorrowRate(utilizationRate: BigNumber) {
    if (!this.initialized || !this.multiplierPerBlock || !this.kink || !this.baseRatePerBlock || !this.jumpMultiplierPerBlock) throw new Error("Interest rate model class not initialized.");
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
