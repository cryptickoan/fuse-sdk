import { BigNumber } from "@ethersproject/bignumber";

export const toInt = (input: BigNumber): number => {
    if (!input) return 0
    return parseInt(input.toString())
  }

export const convertMantissaToAPY = (mantissa: any, dayRange: number = 35): number => {
    const parsedMantissa = toInt(mantissa)
    return (Math.pow((parsedMantissa / 1e18) * 6500 + 1, dayRange) - 1) * 100;
  };
  
export const convertMantissaToAPR = (mantissa: any): number => {
    const parsedMantissa = toInt(mantissa)
    return (parsedMantissa * 2372500) / 1e16;
};
