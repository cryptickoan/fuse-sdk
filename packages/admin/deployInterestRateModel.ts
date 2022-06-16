import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { DAIInterestRateModelV2__factory, JumpRateModel__factory, WhitePaperInterestRateModel__factory } from "../abis/types";

export const deployInterestRateModel = async (
    provider: JsonRpcProvider | Web3Provider,
    model: string,
    conf
) => {
    let deployedInterestRateModel: string
    
    switch (model) {
        case "JumpRateModel":
            if (!conf) {
                conf = {
                    baseRatePerYear: "20000000000000000",
                    multiplierPerYear: "200000000000000000",
                    jumpMultiplierPerYear: "2000000000000000000",
                    kink: "900000000000000000",
                };
            }

            try {
                deployedInterestRateModel = (await (new JumpRateModel__factory(provider.getSigner())).deploy(
                    conf.baseRatePerYear,
                    conf.multiplierPerYear,
                    conf.jumpMultiplierPerYear,
                    conf.kink,
                )).address
            } catch(e) {
                throw Error("Error deploying JumpRateModel. " + e)
            }

            return deployedInterestRateModel
        case "DAIInterestRateModelV2":
            if (!conf) {
                conf = {
                    jumpMultiplierPerYear: "2000000000000000000",
                    kink: "900000000000000000",
                };
            }

            try {
                deployedInterestRateModel = (await (new DAIInterestRateModelV2__factory(provider.getSigner())).deploy(
                    conf.jumpMultiplierPerYear,
                    conf.kink,
                    "0x197e90f9fad81970ba7976f33cbd77088e5d7cf7", // this.addresses.DAI_POT,
                    "0x19c0976f590d67707e62397c87829d896dc0f1f1",// this.addresses.DAI_JUG,
                )).address
            } catch (e) {
                throw Error("Error deploying DAIInterestRateModelV2. " + e)
            }

            return deployedInterestRateModel
        case "WhitePaperInterestRateModel":
            if (!conf) {
                conf = {
                    baseRatePerYear: "20000000000000000",
                    multiplierPerYear: "200000000000000000",
                };
            }

            try {
                deployedInterestRateModel = (await (new WhitePaperInterestRateModel__factory(provider.getSigner())).deploy(
                    conf.baseRatePerYear, 
                    conf.multiplierPerYear
                )).address
            } catch(e) {
                throw Error("Error deploying WhitePaperInterestRateModel. " + e)
            }

            return deployedInterestRateModel
        default:
            throw Error("Unknown model type: " + model)
    }
}