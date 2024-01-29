import { dirname, join } from 'node:path';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');

    try {
        const files = await readdir(filesFolder);
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