import 'dotenv/config'

// Ethers
import { JsonRpcProvider } from '@ethersproject/providers'

// Types
import { ChildProcessWithoutNullStreams } from 'child_process'

// Utils
import { spawnAndWaitForOutput } from './utils'
import testSuite from './utils/constants'

// SDK
import { Pool } from '../src'
import { PoolInstance } from '../src/Pool/types'
import colors from 'colors'

describe('Fuse', () => {
    let anvilNodeProcess: ChildProcessWithoutNullStreams
    let fuse: any

    beforeAll(async () => {

        if (!(process.env.NODE === 'true')) {
            try {
                console.log(colors.yellow('Initiating Anvil Node'))
                    anvilNodeProcess = await spawnAndWaitForOutput(
                        "anvil", 
                        [`--fork-url ${process.env.RPC_URL} --fork-block-number ${process.env.BLOCK_NUM}`]
                    )
                console.log(colors.green('Node was initiated succcessfully!'))

            } catch(e) {
                console.error(e)
            }
        }

        const provider = new JsonRpcProvider("http://127.0.0.1:8545")
        fuse = await Pool(provider, 1, 130)
        jest.setTimeout(90 * 1000)
    })


    it("Should return the correct pool data for given Fuse pool", async () => {
        let data
        try {
            console.log(fuse)
            data = await fuse.utils.fetchTokenBalance('0x6b175474e89094c44da98b954eedeac495271d0f')
            console.log({data})
        } catch(e) {
            console.log(e)
        }
        expect(Object.keys(data).length).toBe(5)
        expect(data.comptroller).toBe(testSuite.fetchFusePoolData.comptroller)
        console.log('here')
    })

    it("Should return the correct market data for given Fuse pool", async () => {
        const data = await fuse.getPool()
        expect(Object.keys(data).length).toBe(5)
        expect(data.comptroller).toBe(testSuite.getPool.comptroller)
        expect(data.creator).toBe(testSuite.getPool.creator)

        const markets = await fuse.getMarketsWithData(data.comptroller)
        expect(markets.assets.length).toBe(testSuite.getMarketsWithData.assetsLength)
        expect(Object.values(markets).length).toBe(testSuite.getMarketsWithData.responseLength)
    })


    
    afterAll(() => {
        if (!(process.env.NODE === 'true')) {
            console.log(colors.green('Anvil node turned off successfully!'))
            anvilNodeProcess.kill()
        }
    })
})





