import { spawn, ChildProcessWithoutNullStreams } from 'child_process'

export async function execWaitForOutput(command, execOptions = []) {
    return new Promise<ChildProcessWithoutNullStreams>((resolve, reject) => {
        const childProcess= spawn(command, execOptions, {shell: true});

        // stream process output to console
        childProcess.stderr.on('data', data => console.error(data));
        childProcess.stdout.on('data', () => resolve(childProcess));

        // handle exit
        childProcess.on('exit', () => resolve(childProcess));
        childProcess.on('close', () => resolve(childProcess));
        // handle errors
        childProcess.on('error', error => reject(error));
    })
}