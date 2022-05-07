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

describe('Fuse', () => {
    let anvilNodeProcess: ChildProcessWithoutNullStreams
    let fuse: PoolInstance

    beforeAll(async () => {
        try {
            anvilNodeProcess = await spawnAndWaitForOutput(
                "anvil", 
                [`--fork-url ${process.env.RPC_URL} --fork-block-number ${process.env.BLOCK_NUM}`]
            )

        } catch(e) {
            console.error(e)
        }

        const provider = new JsonRpcProvider("http://127.0.0.1:8545")
        fuse = Pool(provider, 1, 1)
    })


    it("Should return the correct data for given Fuse pool", async () => {
        const data = await fuse.fetchFusePoolData()

        expect(Object.keys(data).length).toBe(5)
        expect(data.comptroller).toBe(testSuite.fetchFusePoolData.comptroller)
    })
    
    afterAll(() => {
        anvilNodeProcess.kill()
    })
})





