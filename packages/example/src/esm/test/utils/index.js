var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { spawn } from 'child_process';
import 'dotenv/config';
// SDK
import colors from 'colors';
export function spawnAndWaitForOutput(command, execOptions = []) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const childProcess = spawn(command, execOptions, { shell: true });
            // stream process output to console
            childProcess.stdout.on('data', () => resolve(childProcess));
            childProcess.stderr.on('data', data => console.log(data));
            // handle errors
            childProcess.on('error', error => reject(error));
        });
    });
}
export const initiateAnvilNode = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!(process.env.NODE === 'false')) {
        try {
            console.log(colors.yellow('Initiating Anvil Node'));
            const anvilNodeProcess = yield spawnAndWaitForOutput("anvil", [`--fork-url ${process.env.RPC_URL} --fork-block-number ${process.env.BLOCK_NUM} --no-storage-caching`]);
            console.log(colors.green(`Node initiated successfuly! ` + colors.cyan(`PID: ${anvilNodeProcess.pid}`).bold));
            return anvilNodeProcess;
        }
        catch (e) {
            console.error(e);
        }
    }
});
