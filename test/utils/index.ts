import { spawn, ChildProcessWithoutNullStreams } from 'child_process'
import 'dotenv/config'

// SDK
import colors from 'colors'

export async function spawnAndWaitForOutput(
    command: string, 
    execOptions: [] | string[] = []
): Promise <ChildProcessWithoutNullStreams>{
    return new Promise((resolve, reject) => {
        const childProcess = spawn(command, execOptions, {shell: true});

        // stream process output to console
        childProcess.stdout.on('data', () => resolve(childProcess));
        childProcess.stderr.on('data', data => console.log(data));

        // handle errors
        childProcess.on('error', error => reject(error));
    })
}

export const initiateAnvilNode = async () => {
    if (!(process.env.NODE === 'false')) {
        try {
            console.log(colors.yellow('Initiating Anvil Node'))
                
                const anvilNodeProcess = await spawnAndWaitForOutput(
                    "anvil", 
                    [`--fork-url ${process.env.RPC_URL} --fork-block-number ${process.env.BLOCK_NUM} --no-storage-caching`]
                )

            console.log(colors.green(`Node initiated successfuly! ` + colors.cyan(`PID: ${anvilNodeProcess.pid}`).bold))
            return anvilNodeProcess
        } catch(e) {
            console.error(e)
        }
    }
}