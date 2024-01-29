import { dirname, join } from 'node:path';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const moduleFileName = 'script.js';

    const childProcess = fork(join(filesFolder, moduleFileName), args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
