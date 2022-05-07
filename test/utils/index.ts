import { spawn, ChildProcessWithoutNullStreams } from 'child_process'

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