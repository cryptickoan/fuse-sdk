/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from 'child_process';
import 'dotenv/config';
export declare function spawnAndWaitForOutput(command: string, execOptions?: [] | string[]): Promise<ChildProcessWithoutNullStreams>;
export declare const initiateAnvilNode: () => Promise<ChildProcessWithoutNullStreams>;
