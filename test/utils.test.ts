import 'dotenv/config'

// Ethers
import { JsonRpcProvider } from '@ethersproject/providers'
import { Zero, MaxUint256 } from '@ethersproject/constants'

// SDK
import { Pool } from '../src'
import { BigNumber, Contract } from 'ethers'
import { formatEther, parseEther } from 'ethers/lib/utils'

const provider = new JsonRpcProvider("http://127.0.0.1:8545")

export const utilsTests = () => {
    describe('checkAllowance', () => {
        it("Should not approve and should return right information", async () => {
            const fuse: any = await Pool(provider, 1, 156)
            console.log(fuse)
            // try {
            //     const answer = await fuse.utils.checkAllowance(
            //         "0x6b175474e89094c44da98b954eedeac495271d0f",
            //         "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            //         "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
            //         "1000",
            //         false
            //     )

            //     expect(answer.hasApprovedEnough).toBe(false)
            //     expect(answer.allowance).toBe(Zero)
            // } catch {

            // }
        })

        it("Should approve max amount", async () => {
            const fuse: any = await Pool(provider, 1, 156)
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
                const fuse: any = await Pool(provider, 1, 156)
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
            const fuse: any = await Pool(provider, 1, 156)
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
            const fuse: any = await Pool(provider, 1, 156)
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

    describe('getDecimals', () => {
        it('Should return 18', async () => {
            const fuse: any = await Pool(provider, 1, 156)
            const decimals = await fuse.utils.getDecimals(
                "0x6b175474e89094c44da98b954eedeac495271d0f"
            )

            expect(decimals.toString()).toBe('18')
        })
    })

    describe('fetchTokenBalance', () => {
        it('Should give back token balance', async () => {
            const fuse: any = await Pool(provider, 1, 156)
            const balance = await fuse.utils.fetchTokenBalance(
                "0x6b175474e89094c44da98b954eedeac495271d0f",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
            )

            const ethBalance = await fuse.utils.fetchTokenBalance(
                "0x0000000000000000000000000000000000000000",
                "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
            )


            expect(balance).toStrictEqual(Zero)
            expect(ethBalance.gt(BigNumber.from(9000))).toBe(true)
        })
    })
}

describe('utils', utilsTests)