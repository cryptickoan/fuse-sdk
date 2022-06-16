import { OracleHashes } from '../types'

export function getOracleHashes(
    id: number
): OracleHashes {
    const PRICE_ORACLE_RUNTIME_BYTECODE_HASHES = id === 1 || id === 31337
    ? mainnetHashes
    : arbitrumHashes
    return PRICE_ORACLE_RUNTIME_BYTECODE_HASHES
}

const mainnetHashes: OracleHashes = {
  "0x7a2a5633a99e8abb759f0b52e87875181704b8e29f6567d4a92f12c3f956d313": "Chainlink Price Oracle",
  "0x8d2bcaa1429031ae2b19a4516e5fdc68fb9346f158efb642fcf9590c09de2175":"Chainlink Price Oracle V2",
  "0x4b3bef9f57e381dc6b6e32bff270ce8a72d8aae541cb7c686b09555de3526d39": "Chainlink Price Oracle V3",
  "0xa2537dcbd2b55b1a690db3b83fa1042f86b21ec3e1557f918bc3930b6bbb9244": "Uniswap Twap Price Oracle",
  "0x9b11abfe7bfc1dcef0b1bc513959f1172cfe2cb595c5131b9cabc3b6448d89ac": "Sushiswap TwapPriceOracle",
  "0xbcddb66e4e9c038b4ee1cf4caf1e8c8119225d72a8407fc32caa1988e4a7fe31": "Uniswap Lp Token Price Oracle",
  "0xb300f7f64110b952340e896d33f133482de6715f1b8b7e0acbd2416e0e6593c1": "Uniswap V3 Twap Price Oracle 3000",
  "0xef237fadaffff8a1b5daa4d448c7935cf0f71e2ee01a53856bb0d7884b0ad78c": "Uniswap V3 Twap Price Oracle 10000",
  "0xaaba60b3af593a8ecde61d8516ad0353db8cc2777018e0dde07f654c22a3171d": "Uniswap V3 Twap Price Oracle V2 500 USDC",
  "0x204541bdea985113b68dad86bf67fbbd52829f8984b6f17f6271bcec203161d1": "Uniswap V3 Twap Price Oracle V2 3000 USDC",
  "0xc301f891f1f905e68d1c5df5202cf0eec2ee8abcf3a510d5bd00d46f7dea01b4": "Uniswap V3 Twap Price Oracle V2 Uniswap 10000 USDC",
  "0xc844372c8856a5f9569721d3aca38c7804bae2ae4e296605e683aa8d1601e538": "Uniswap V3 Twap Price Oracle V2",
  "0xd0dda181a4eb699a966b23edb883cff43377297439822b1b0f99b06af2002cc3": "Y Vault V1 Price Oracle V1", // fuse-contracts@v1.0.0
  "0x78ac4b231a4ce3ac5259847cd1cb227bf45882d736722290bee6b6c99a722f22": "Y Vault V1 Price Oracle V2", // fuse-contracts@v1.2.1
  "0x177c22cc7d05280cea84a36782303d17246783be7b8c0b6f9731bb9002ffcc68": "Y Vault V2 Price Oracle",
  "0xfa1349af05af40ffb5e66605a209dbbdc8355ba7dda76b2be10bafdf5ffd1dc6": "Master Price OracleV1", // fuse-contracts@v1.0.0
  "0xdfa5aa37efea3b16d143a12c4ae7006f3e29768b3e375b59842c7ecd3809f1d1": "Master Price Oracle V2",// fuse-contracts@80c79b45bda4151e22358d22cc0bf1489f34900c (before final release of v1.2.0)
  "0xe4199a03b164ca492d19d655b85fdf8cc14cf2da6ddedd236712552b7676b03d": "Master Price Oracle V3", // fuse-contracts@v1.2.0
  "0x6742ae836b1f7df0cfd9b858c89d89da3ee814c28c5ee9709a371bcf9dfd2145": "Curve Lp Token Price Oracle",
  "0xfcf0d93de474152898668c4ebd963e0237bfc46c3d5f0ce51b7045b60c831734": "Curve Liquidity Gauge V2 Price Oracle",
  "0xcb669c93632a1c991adced5f4d97202aa219fab3d5d86ebd28f4f62ad7aa6cb3": "Fixed Eth Price Oracle",
  "0x678dbe9f2399a44e89edc934dc17f6d4ee7004d9cbcee83c0fa0ef43de924b84": "Fixed Eur Price Oracle",
  "0x11daa8dfb8957304aa7d926ce6876c523c7567b4052962e65e7d6a324ddcb4cc": "WSTEth Price Oracle",
  "0x136d369f53594c2f10e3ff3f14eaaf0bada4a63964f3cfeda3923e3531e407dc": "Fixed Token Price Oracle OHM",
  "0xb4d279232ab52a2fcaee6dc47db486a733c24a499ade9d7de1b0d417d4730817": "Uniswap Twap Price Oracle V2 SushiSwap DAI",
  "0x9df749314d6494a785bb5ff7a5fab25adadb772e10d58b7f692028cc23e2cbb3": "Uniswap Twap Price Oracle V2 Sushi Swap CRV",
  "0x2219b54a3e2c36b8b1eca8d511392eacace73a3e1cb55c97dd495f5e47024ba6": "Uniswap Twap Price Oracle V2 SushiSwap USDC",
  "0xc884332403a6234bbb5e860fa27bcf69389b7e372b20045af687d23426e654e3": "Uniswap Twap Price Oracle V2 Uniswap FRAX",
  "0xea501eef0ca55dc6a8360a5a1274895d6dc245dd0ae8cffbff3a14c6624711f0": "Uniswap Twap Price Oracle V2 SushiSwap ETH",
  "0x3736e8b6c11fcd413c0b60c3291a3a2e2ebe496a2780f3c45790a123f5ee9705": "Sushi Bar Price Oracle",
  "0x310210400b2d3992dc8fb9ace5001b1b55d3a468fba18ae0bc82a375fd150638": "Badger Price Oracle",
  "0x6e23380d1d640118cf80cf2bfa9ca7a89068659dfcb50abc0a7f8b9e5f9daab7": "Harvest Price Oracle V1", // fuse-contracts@v1.1.4
  "0x5eff948725404a38311ebe4b3bafc312f63dd8ae611e3ddcdfebb9cfa231988c": "Harvest Price Oracle V2", // fuse-contracts@v1.2.1
  "0x1b489bd00e5cbe4998e985f147297c1a39bd9da659e78544c94c1f3415edf7b7": "Staked Sdt Price Oracle",
  "0xc820466d7af2319646d25e2203187254a37cb9b9ae6c8a263d40fb5c01a54c51": "Tokemak Pool TAsset Price Oracle",
  "0x39fc7b2cdac3d401ea91becf897346b2156dbe261162de14082e856103456eb4": "MStable Price Oracle",
  "0x9fcea6d23c7e2e330e35e303a49f39e0c2c783e6b770ccc2de41fbbfbfc539e7": "Staked Spell Price Oracle",
  "0x92014d914370d8c59082044786d9b056ea188a95891778c555209c210850d5ae": "Curve TriCrypto LpToken Price Oracle",
  "0x90cb470d00fd449254eda43856b1e32b5c9a9bf25a8070c10ed1ff92ca656616": "Curve Factory LpToken Price Oracle",
  "0xbed0eddba7009021dd774a530b53a784fc80217c7bf27c15c9b2487b13fb2863": "GUni LpToken Price Oracle",
  "0xf79f348bef443bef108c446753829e55eb5e4e3028d2064d9edefab2f95fd876": "Tribe Master Price Oracle"
}

const arbitrumHashes: OracleHashes = {
  "0x841c8cee670b29a8e8d2d56b6b1706b0a17beffc57ceeaa730d33821a7193eb8": "Master Price Oracle",
  "0xe6c58b50e22444dda782858120184cbc86207e51be06e0f747561a8c9eb4c968": "Chainlink Price Oracle V2",
  "0x009b75414e3135a12bb0d9ee0a420f96a41b198df7ee9c4a5667a05187860a1d": "Fixed ETH Price Oracle",
  "0xce075a561806260b1d4472b68c07b3784c1f5b2065500f2f217085fcf78e4470": "GOhm Price Oracle Arbitrum",
  "0x9fd6d9f10e83d15240e17ade5fbacf6ad30dbffa3b3596ebc985cce96f4aaef2": "Uniswap Twap Price Oracle V2 SushiSwap"
  
} 