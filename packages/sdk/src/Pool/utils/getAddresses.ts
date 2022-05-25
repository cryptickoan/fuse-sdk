import { Addresses } from '../types'

export function getAddresses(
    id: number
): Addresses {
    const addresses: Addresses = list[id]

    return {
        ...addresses
    }
}

const mainnet = {
    FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: "0x835482FE0532f169024d5E9410199369aAD5C77E",
    FUSE_POOL_LENS_CONTRACT_ADDRESS: "0x6Dc585Ad66A10214Ef0502492B0CC02F0e836eec",
    FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS: "0xc76190E04012f26A364228Cfc41690429C44165d",
}

const arbitrum = {
    FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: "0xc201b8c8dd22c779025e16f1825c90e1e6dd6a08",
    FUSE_POOL_LENS_CONTRACT_ADDRESS: "0xD6e194aF3d9674b62D1b30Ec676030C23961275e",
    FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS: "0xA56F946D6398Dd7d9D4D9B337Cf9E0F68982ca5B"
}

const hardhat = {
    FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: "0xefAB0Beb0A557E452b398035eA964948c750b2Fd",
    FUSE_POOL_LENS_CONTRACT_ADDRESS: "0x26B862f640357268Bd2d9E95bc81553a2Aa81D7E",
    FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS: "0x19ceccd6942ad38562ee10bafd44776ceb67e923"
}

const arbitrumRinkeby = {
    FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: "0x440253a301b4Fc749a24E653fDb11B742e621892",
    FUSE_POOL_LENS_CONTRACT_ADDRESS: "0xBF29f83D9a0EC1d9eC7281381E04750b817feA4E",
    FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS: "0xb2a4B68f5126F1624b900f5d637Bd15968d7a119"
}

const list = {
    1: mainnet,
    42161: arbitrum,
    421611: arbitrumRinkeby,
    31337: hardhat
}