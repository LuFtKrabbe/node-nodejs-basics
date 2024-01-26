import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

const list = async () => {
    const basePath = './src/fs';
    const folderWithFiles = join(basePath, 'files');

    try {
        const files = await readdir(folderWithFiles);
        console.log(`The folder contains next files:`);
        console.log('----------------------------------');
        for (const file of files) {
            console.log(file);
        }
        console.log('----------------------------------');
        console.log('All files are successfully listed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();