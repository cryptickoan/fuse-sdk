import 'dotenv/config'
// SDK
import { Contract } from 'ethers'
import { formatEther } from 'ethers/lib/utils'
import iComptroller from '../src/Interfaces/iComptroller'
import { PoolInstance } from '../src/Pool/types'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { Pool } from '../src'
const provider = new JsonRpcProvider("http://127.0.0.1:8545")

export const marketInteractionTests = () => {
        it('Should supply', async () => {
            const fuse: any = await Pool(provider, 1, 156)
            jest.setTimeout(900 * 1000)
            const comptroller = new Contract(
                fuse.comptroller,
                iComptroller,
                provider.getSigner()
            )
            
            const shouldBeFalse = await comptroller.callStatic.suppliers('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            const receipt = await fuse.interact.supply(
                "0xe92a3db67e4b6AC86114149F522644b34264f858",
                "2000",
                "0x0000000000000000000000000000000000000000",
                null,
                '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
            )
            const balance = await fuse.utils.fetchTokenBalance('0x0000000000000000000000000000000000000000', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            const shouldBeTrue = await comptroller.callStatic.suppliers('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            expect(shouldBeTrue).toBe(true)
            expect(shouldBeFalse).toBe(false)
        })

        it('Should enter market', async () => {
            const fuse: any = await Pool(provider, 1, 156)
            const comptroller = new Contract(
                fuse.comptroller,
                iComptroller,
                provider.getSigner()
            )
            const shouldBeFalse = (await comptroller.callStatic.getAllBorrowers()).includes('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            await fuse.interact.enterMarkets(['0xe92a3db67e4b6AC86114149F522644b34264f858'])
            const shouldBeTrue = (await comptroller.callStatic.getAllBorrowers()).includes('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            expect(shouldBeFalse).toBe(false)
            expect(shouldBeTrue).toBe(true)
        })

        it('Should borrow', async () => {
            const fuse: any = await Pool(provider, 1, 156)
            jest.setTimeout(900 * 1000)
            await fuse.interact.enterMarkets(['0xe92a3db67e4b6AC86114149F522644b34264f858'])
            await fuse.interact.borrow(
                "0xe92a3db67e4b6AC86114149F522644b34264f858",
                "1",
                "0x0000000000000000000000000000000000000000",
            )

            
        })

        it('Should repay', async () => {
            const fuse: any = await Pool(provider, 1, 156)
            await fuse.interact.repay(
                "0xe92a3db67e4b6AC86114149F522644b34264f858",
                "1",
                "0x0000000000000000000000000000000000000000"
            )

            const balance = await fuse.utils.fetchTokenBalance('0x0000000000000000000000000000000000000000', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            expect(formatEther(balance)).toContain( "7999")
        })

        it('Should withdraw', async () => {
            const fuse: any = await Pool(provider, 1, 156)
            await fuse.interact.withdraw(
                "0xe92a3db67e4b6AC86114149F522644b34264f858",
                "1500",
                "0x0000000000000000000000000000000000000000"
            )

            const balance = await fuse.utils.fetchTokenBalance('0x0000000000000000000000000000000000000000', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
            expect(formatEther(balance)).toContain("9499")
        })
}

describe('Market Interactions', marketInteractionTests)