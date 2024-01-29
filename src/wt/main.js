import { dirname, join } from 'node:path';
import os from 'node:os'
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';

const performCalculations = async () => {
    const initValue = 10;
    const qtyCPU = os.cpus().length;
    const resArr = [];

    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);
    const workerFileName = 'worker.js';

    for (let i = 0; i < qtyCPU; i++) {
        resArr.push(new Promise((resolve) => {
            const worker = new Worker(join(dirPath, workerFileName), { workerData: initValue + i });
            worker.on('message', (message) => {
                resolve({status: 'resolved', value: message})
            });
            worker.on('error', () => {
                resolve({status: 'error', value: null})
            });
        }))
    }

    console.log(await Promise.all(resArr));
}

await performCalculations();
