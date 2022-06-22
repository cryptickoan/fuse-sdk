import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { ContractReceipt } from "@ethersproject/contracts";
import { InitializableClones__factory } from "./abis/types/factories/InitializableClones__factory";
import { MasterPriceOracle__factory } from "./abis/types/factories/MasterPriceOracle__factory";
import { UniswapV3TwapPriceOracleV2Factory__factory } from "./abis/types/factories/UniswapV3TwapPriceOracleV2Factory__factory";
import { UniswapV3TwapPriceOracle__factory } from './abis/types/factories/UniswapV3TwapPriceOracle__factory';
import { UniswapTwapPriceOracleV2Factory__factory } from "./abis/types/factories/UniswapTwapPriceOracleV2Factory__factory";
import { ChainlinkPriceOracle__factory } from "./abis/types/factories/ChainlinkPriceOracle__factory";
import { ChainlinkPriceOracleV2__factory, FixedTokenPriceOracle__factory, UniswapLpTokenPriceOracle__factory, UniswapTwapPriceOracle__factory } from "./abis/types";

export const deployPriceOracle = async (
    provider: JsonRpcProvider | Web3Provider,
    model: string,
    conf: any,
    options,
    factoryAddress: string
) => {
    let deployArgs: any = []
    let deployedPriceOracle: string = ""
    let oracleContractFactory: any
    switch (model) {
        case "MasterPriceOracle":
            // 1. Initiate contract
            const initializableClones = InitializableClones__factory.connect("0x91ce5566dc3170898c5aee4ae4dd314654b47415", provider.getSigner())
            const masterPriceOracleInterface = MasterPriceOracle__factory.createInterface()

            // 2. Prepare deploy arguments
            deployArgs = [
                conf.underlyings ? conf.underlyings : [],
                conf.oracles ? conf.oracles : [],
                conf.defaultOracle
                    ? conf.defaultOracle
                    : "0x0000000000000000000000000000000000000000",
                conf.admin ? conf.admin : options.from,
                conf.canAdminOverwrite ? true : false,
            ];

            // 3. Clone contract
            let initializerData = masterPriceOracleInterface.encodeFunctionData("initialize", deployArgs)
            let receipt: ContractReceipt
            try {
                receipt = await (await initializableClones.clone("0xb3c8ee7309be658c186f986388c2377da436d8fb",initializerData)).wait(1)
                
            } catch (e) {
                throw Error("Master Price Oracle deployment failed! " + e)
            }

            // 4. Get deployed contract address
            deployedPriceOracle = receipt.events?.find(e => e.event === "Deployed")?.args?.instance
            break;
        case "UniswapV3TwapPriceOracleV2":
            // 1. Validate fee tier
            if ([500, 3000, 10000].indexOf(parseInt(conf.feeTier)) < 0)
                throw Error("Invalid fee tier passed to UniswapV3TwapPriceOracleV2 deployment.");

            // 2. Check if oracle is already deployed            
            oracleContractFactory = UniswapV3TwapPriceOracleV2Factory__factory.connect(factoryAddress, provider.getSigner())
            deployedPriceOracle = await oracleContractFactory.oracles(conf.uniswapV3Factory, conf.feeTier, conf.baseToken);

            // 3. If oracle is not deployed, deploy it
            if (deployedPriceOracle === "0x0000000000000000000000000000000000000000") {
                await oracleContractFactory.deploy(conf.uniswapV3Factory, conf.feeTier, conf.baseToken);
                deployedPriceOracle = await oracleContractFactory.oracles(conf.uniswapV3Factory, conf.feeTier, conf.baseToken);
            }

            break
        case "UniswapTwapPriceOracleV2":
            oracleContractFactory = UniswapTwapPriceOracleV2Factory__factory.connect(factoryAddress, provider.getSigner())
            deployedPriceOracle = await oracleContractFactory.oracles(conf.uniswapFactory, conf.baseToken);

            if (deployedPriceOracle === "0x0000000000000000000000000000000000000000") {
                await oracleContractFactory.deploy(conf.uniswapFactory, conf.baseToken);
                deployedPriceOracle = await oracleContractFactory.oracles(conf.uniswapFactory, conf.baseToken);
            }
            break
        case "ChainlinkPriceOracle": 
            deployArgs = [
                conf.maxSecondsBeforePriceIsStale
                    ? conf.maxSecondsBeforePriceIsStale
                    : 0,
            ];

            deployedPriceOracle = (await(new ChainlinkPriceOracle__factory(provider.getSigner())).deploy(deployArgs)).address
            break
        case "UniswapLpTokenPriceOracle": 
            deployArgs = [conf.useRootOracle ? true : false];
            deployedPriceOracle =  (await (new UniswapLpTokenPriceOracle__factory(provider.getSigner())).deploy(deployArgs)).address
            break
        case "UniswapTwapPriceOracle":
            deployArgs = [
                conf.uniswapTwapPriceOracleRootContractAddress,
                conf.uniswapV2Factory,
            ]
            deployedPriceOracle = (await (new UniswapTwapPriceOracle__factory(provider.getSigner())).deploy(conf.uniswapTwapPriceOracleRootContractAddress,conf.uniswapV2Factory)).address
            break
        case "UniswapTwapPriceOracleV2":
            oracleContractFactory = UniswapTwapPriceOracleV2Factory__factory.connect(factoryAddress, provider.getSigner())
            deployedPriceOracle = await oracleContractFactory.oracles(conf.uniswapV2Factory, conf.baseToken);

            if (deployedPriceOracle === "0x0000000000000000000000000000000000000000") {
                await oracleContractFactory.deploy(conf.uniswapV2Factory, conf.baseToken);
                deployedPriceOracle = await oracleContractFactory.oracles(conf.uniswapV2Factory, conf.baseToken);
            }
            break
        case "ChainlinkPriceOracleV2":
            deployArgs = [
                conf.admin ? conf.admin : options.from,
                conf.canAdminOverwrite ? true : false,
            ];
            oracleContractFactory = (await (new ChainlinkPriceOracleV2__factory(provider.getSigner())).deploy(
                conf.admin ? conf.admin : options.from,
                conf.canAdminOverwrite ? true : false
            )).address
            break
        case "UniswapV3TwapPriceOracle":
            if ([500, 3000, 10000].indexOf(parseInt(conf.feeTier)) < 0)
                throw Error("Invalid fee tier passed to UniswapV3TwapPriceOracle deployment.");
            deployedPriceOracle = (await (new UniswapV3TwapPriceOracle__factory(provider.getSigner())).deploy(
                conf.uniswapV3Factory, 
                conf.feeTier
            )).address
        case "FixedTokenPriceOracle":
            deployedPriceOracle = (await (new FixedTokenPriceOracle__factory(provider.getSigner())).deploy(conf.baseToken)).address
            break
        default:
            throw new Error(`Invalid oracle model! ${model} is not recognized, please try again.`)
    }

    return deployedPriceOracle
}