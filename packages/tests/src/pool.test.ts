import { Pool, PoolInstance } from '@fuse-v1/pool.sdk'
import { provider } from '.'
import hre from 'hardhat';
import { TASK_NODE_CREATE_SERVER } from 'hardhat/builtin-tasks/task-names';

describe('test', function () {
    let pool: PoolInstance | undefined
    let jsonRpcServer: any
    
    jest.setTimeout(50000)
    beforeAll(async () => {
        console.log('\n    Running a hardhat local fork of mainnet...\n');
        // 1. Initiate hardhat fork
        jsonRpcServer = await hre.run(TASK_NODE_CREATE_SERVER, {
            hostname: 'localhost',
            port: 8545,
            provider: hre.network.provider
          });
        await jsonRpcServer.listen()

        // 2. Initiate Pool module
        pool = await Pool(provider, 1, 1)
    })

    afterAll(async () => {
        console.log(pool)
        // Terminate hardhat fork
        await jsonRpcServer.close();
    });

    it('Should fetch pool information and expose it.', function () {
        expect(pool?.poolId).toBe(1)
        expect(pool?.comptroller).toBe("0x8560b9839e10766ebFdBC901605b5cc72ce4Afd8")
        expect(pool?.name).toBe("Rari DAO Fuse Pool    (Core)")
        expect(pool?.oracle).toBe("0x1887118E49e0F4A78Bd71B792a49dE03504A764D")
        expect(pool?.oracleModel).toBe("Master Price OracleV1")
        expect(pool?.admin).toBe("0xB8f02248d53F7EdfA38E79263e743e9390f81942")
    })

    it("Should fetch all the available markets", async function () {
        const markets = await pool?.fetch.markets()
        expect(markets?.assets.length).toBe(6)
        expect(markets?.totalBorrowedUSD.toNumber()).toBe(0)
    })


})