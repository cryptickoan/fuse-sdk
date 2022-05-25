import JumpRateModel from "./JumpRateModel";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { Interface } from "@ethersproject/abi";

export default class DAIInterestRateModelV2 extends JumpRateModel {
  static RUNTIME_BYTECODE_HASH =
    "0x4b4c4f6386fd72d3f041a03e9eee3945189457fcf4299e99098d360a9f619539";

  initialized: boolean | undefined;
  dsrPerBlock: BigNumber | undefined;
  cash: BigNumber | undefined;
  borrows: BigNumber | undefined;
  reserves: BigNumber | undefined;
  reserveFactorMantissa: BigNumber | undefined;

  async init(
    interestRateModelAddress: string,
    assetAddress: string,
    provider: any
  ) {
    await super.init(interestRateModelAddress, assetAddress, provider);

    const interestRateInterface = new Interface([
      'function dsrPerBlock() view returns (uint256)'
    ])

    const interestRateContract = new Contract(
      interestRateModelAddress,
      interestRateInterface,
      provider
    );

    this.dsrPerBlock = 
      await interestRateContract.callStatic.dsrPerBlock()

    const cTokenInterface = new Interface([
      'function getCash() external view returns (uint)',
      'function totalBorrowsCurrent() external returns (uint)',
      'function totalReserves() view returns (uint)'
    ])

    const cTokenContract = new Contract(
      assetAddress,
      cTokenInterface,
      provider
    );

    this.cash = await cTokenContract.callStatic.getCash();
    this.borrows = await cTokenContract.callStatic.totalBorrowsCurrent();
    this.reserves = await cTokenContract.callStatic.totalReserves();
  }

  getSupplyRate(utilizationRate: BigNumber) {
    if (
      !this.initialized ||
      !this.cash ||
      !this.borrows ||
      !this.reserves ||
      !this.dsrPerBlock
    )
      throw new Error("Interest rate model class not initialized.");

    // const protocolRate = super.getSupplyRate(utilizationRate, this.reserveFactorMantissa); //todo - do we need this
    const protocolRate = super.getSupplyRate(utilizationRate);
    const underlying = this.cash.add(this.borrows).sub(this.reserves);

    if (underlying.isZero()) {
      return protocolRate;
    } else {
      const cashRate = this.cash.mul(this.dsrPerBlock).div(underlying);
      return cashRate.add(protocolRate);
    }
  }
}
