import 'dotenv/config'

// Types
import { ChildProcessWithoutNullStreams } from 'child_process'

// Utils
import { initiateAnvilNode } from './utils'

// SDK
import colors from 'colors'
import { marketInteractionTests } from './market-interactions.test'
import { utilsTests } from './utils.test'

describe('Fuse', () => {
    let anvilNodeProcess: ChildProcessWithoutNullStreams

    beforeAll(async () => {
        anvilNodeProcess = await initiateAnvilNode()
    })

    describe('Pool', () => {
        describe('utils', utilsTests)
        describe('market-interactions', marketInteractionTests)
    })


    afterAll(() => {
        if (!(process.env.NODE === 'false')) {
            anvilNodeProcess.kill()
            console.log(colors.green('Anvil node terminated successfully!'))
        }
    })
})





