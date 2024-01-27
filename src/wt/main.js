import os from 'node:os'
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const initValue = 10;
    const qtyCPU = os.cpus().length;
    const resArr = [];

    for (let i = 0; i < qtyCPU; i++) {
        resArr.push(new Promise((resolve) => {
            const worker = new Worker('./src/wt/worker.js', { workerData: initValue + i });
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
