import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { WeiPerEther } from '@ethersproject/constants';
import { Interface } from "@ethersproject/abi";

export default class WhitePaperInterestRateModel {
  static RUNTIME_BYTECODE_HASH = "0xe3164248fb86cce0eb8037c9a5c8d05aac2b2ebdb46741939be466a7b17d0b83";
  initialized: boolean | undefined;
  baseRatePerBlock: BigNumber | undefined;
  multiplierPerBlock: BigNumber | undefined;
  reserveFactorMantissa: BigNumber | undefined;


  async init(interestRateModelAddress: string, assetAddress: string, provider: any) {

    const irmInterface = new Interface([
      'function baseRatePerBlock() view returns (uint256)',
      'function multiplierPerBlock() view returns (uint256)',
    ])

    const whitePaperModelContract = new Contract(
      interestRateModelAddress,
      irmInterface,
      provider
    );

    this.baseRatePerBlock = await whitePaperModelContract.callStatic.baseRatePerBlock();
    this.multiplierPerBlock = await whitePaperModelContract.callStatic.multiplierPerBlock();

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
    this.reserveFactorMantissa = this.reserveFactorMantissa.add( await cTokenContract.callStatic.adminFeeMantissa())
    this.reserveFactorMantissa = this.reserveFactorMantissa.add(await cTokenContract.callStatic.fuseFeeMantissa());
    this.initialized = true;
  }

  getBorrowRate(utilizationRate: BigNumber) {
    if (!this.initialized || !this.multiplierPerBlock || !this.baseRatePerBlock) throw new Error("Interest rate model class not initialized.");
    return utilizationRate.mul(this.multiplierPerBlock).div(WeiPerEther).add(this.baseRatePerBlock);
  }

  getSupplyRate(utilizationRate: BigNumber): BigNumber {
    if (!this.initialized || !this.reserveFactorMantissa) throw new Error("Interest rate model class not initialized.");

    const oneMinusReserveFactor = WeiPerEther.sub(this.reserveFactorMantissa);
    const borrowRate = this.getBorrowRate(utilizationRate);
    const rateToPool = borrowRate.mul(oneMinusReserveFactor).div(WeiPerEther);
    return utilizationRate.mul(rateToPool).div(WeiPerEther);
  }
}
