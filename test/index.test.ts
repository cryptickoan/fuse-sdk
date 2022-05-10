import 'dotenv/config'

// Ethers
import { JsonRpcProvider } from '@ethersproject/providers'
import { Zero, MaxUint256 } from '@ethersproject/constants'

// Types
import { ChildProcessWithoutNullStreams } from 'child_process'

// Utils
import { spawnAndWaitForOutput } from './utils'

// SDK
import { Pool } from '../src'
import colors from 'colors'
import { BigNumber } from 'ethers'
import { parseEther } from 'ethers/lib/utils'

describe('Fuse', () => {
    let anvilNodeProcess: ChildProcessWithoutNullStreams
    let fuse: any

    beforeAll(async () => {

        if (!(process.env.NODE === 'false')) {
            try {
                console.log(colors.yellow('Initiating Anvil Node'))
                    anvilNodeProcess = await spawnAndWaitForOutput(
                        "anvil", 
                        [`--fork-url ${process.env.RPC_URL} --fork-block-number ${process.env.BLOCK_NUM}`]
                    )

                console.log(colors.green(`Node initiated successfuly! ` + colors.cyan(`PID: ${anvilNodeProcess.pid}`).bold))

            } catch(e) {
                console.error(e)
            }
        }

        const provider = new JsonRpcProvider("http://127.0.0.1:8545")
        fuse = await Pool(provider, 1, 130)
        jest.setTimeout(90 * 1000)
    })


    it("Should return zero", async () => {
        let data
        try {
            data = await fuse.utils.fetchTokenBalance('0x6b175474e89094c44da98b954eedeac495271d0f')
        } catch(e) {
            console.log(e)
        }
        expect(data).toBe(Zero)
        // expect(data.comptroller).toBe(testSuite.fetchFusePoolData.comptroller)
        // console.log('here')
    })

    // it("Should return the correct market data for given Fuse pool", async () => {
    //     const data = await fuse.getPool()
    //     expect(Object.keys(data).length).toBe(5)
    //     expect(data.comptroller).toBe(testSuite.getPool.comptroller)
    //     expect(data.creator).toBe(testSuite.getPool.creator)

    //     const markets = await fuse.getMarketsWithData(data.comptroller)
    //     expect(markets.assets.length).toBe(testSuite.getMarketsWithData.assetsLength)
    //     expect(Object.values(markets).length).toBe(testSuite.getMarketsWithData.responseLength)
    // })

    describe('checkAllowance', () => {
        it("Should not approve and should return right information", async () => {
            try {
                const answer = await fuse.utils.checkAllowance(
                    "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                    "1000",
                    false
                )

                expect(answer.hasApprovedEnough).toBe(false)
                expect(answer.allowance).toBe(Zero)
            } catch {

            }
        })

        it("Should approve max amount", async () => {
            try {
                // Approve
                await fuse.utils.checkAllowance(
                    "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                    "1000",
                    true
                )

                // Check 
                const answer2 = await fuse.utils.checkAllowance(
                    "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                    "1000",
                    false
                )

                expect(answer2.hasApprovedEnough).toBe(false)
                expect(answer2.allowance).toBe(MaxUint256)
            } catch {

            }
        })

        it("Should work fine if given token decimals", async () => {
            try {
                const answer = await fuse.utils.checkAllowance(
                    "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                    "1000",
                    false,
                    BigNumber.from(18)
                )

                expect(answer.hasApprovedEnough).toBe(false)
                expect(answer.allowance).toBe(Zero)
            } catch {

            }
        })
    })

    describe('approve', () => {
        it('Should approve maxAmount', async () => {
            const answer = await fuse.utils.checkAllowance(
                "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                "1000",
                false
            )
            
            await fuse.utils.approve(
                "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
            )

            const answer2 = await fuse.utils.checkAllowance(
                "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                "1000",
                false
            )

            expect(answer.hasApprovedEnough).toBe(false)
            expect(answer2.allowance).toStrictEqual(MaxUint256)
        })

        it('Should approve given amount', async () => {
            const answer = await fuse.utils.checkAllowance(
                "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                "1000",
                false
            )
            
            await fuse.utils.approve(
                "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                "1000"
            )

            const answer2 = await fuse.utils.checkAllowance(
                "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
                "1000",
                false
            )

            expect(answer.hasApprovedEnough).toBe(false)
            expect(answer2.allowance).toStrictEqual(parseEther("1000"))
        })
    })

    describe('Market Interactions', () => {
        it('Should supply', () => {
            
        })
    })

    afterAll(() => {
        if (!(process.env.NODE === 'false')) {
            anvilNodeProcess.kill()
            console.log(colors.green('Anvil node terminated successfully!'))
        }
    })
})





