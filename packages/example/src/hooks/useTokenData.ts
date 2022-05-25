import { useQuery } from "react-query";
import { useNetwork } from "wagmi";

export const ETH_TOKEN_DATA = {
  symbol: "ETH",
  address: "0x0000000000000000000000000000000000000000",
  name: "Ethereum",
  decimals: 18,
  color: "#627EEA",
  overlayTextColor: "#fff",
  logoURL:
    "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/64/Ethereum-ETH-icon.png",
};

export const WETH9_TOKEN_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
export const WETH9_TOKEN_ADDRESS_KOVAN =
  "0xd0a1e359811322d97991e03f863a0c30c2cf029c";

export interface TokenData {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  color: string;
  overlayTextColor: string;
  logoURL: string;
}

const EMPTY_TOKEN_DATA: TokenData = {
  name: "",
  address: "",
  symbol: "",
  decimals: 18,
  color: "",
  overlayTextColor: "",
  logoURL: "",
};

export const fetchTokenData = async (
  address: string,
  chainId?: number
): Promise<TokenData> => {
  if (!chainId) return EMPTY_TOKEN_DATA;
  let data;
  let _chainId = chainId;
  if (chainId === 31337) {
    _chainId = 1;
  }

  // console.log('fetchTokenData',{address, chainId, _chainid})

  if (address !== ETH_TOKEN_DATA.address) {
    try {
      // Since running the vercel functions requires a Vercel account and is super slow,
      // just fetch this data from the live site in development:
      let url = `https://v2.rari.capital/api/tokenData?address=${address.toLowerCase()}&chainId=${_chainId}`;

      data = {
        ...(await fetch(url).then((res) => res.json())),
        address: address,
      };
    } catch (e) {
      data = EMPTY_TOKEN_DATA;
    }
  } else {
    data = ETH_TOKEN_DATA;
  }

  return data as TokenData;
};

export const useTokenData = (
  address: string | undefined
): TokenData | undefined => {
  const { activeChain } = useNetwork()

  const { data: tokenData } = useQuery(
    `Chain: ${activeChain} Address: ${address} tokenData`,
    async () => {
      if (!activeChain) return
      return !!address ? await fetchTokenData(address, activeChain.id) : undefined;
    },{
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: activeChain ? true : false
  });
  
  return tokenData;
};