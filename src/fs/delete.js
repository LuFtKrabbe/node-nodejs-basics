import { dirname, join } from 'node:path';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const removedFileName = 'fileToRemove.txt';

    try {
        await rm(join(filesFolder, removedFileName));
        console.log('The file is successfully removed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();