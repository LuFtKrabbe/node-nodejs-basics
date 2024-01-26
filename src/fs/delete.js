import { join } from 'node:path';
import { rm } from 'node:fs/promises';

const remove = async () => {
    const basePath = './src/fs';
    const folderWithFiles = join(basePath, 'files');
    const removedFileName = 'fileToRemove.txt';

    try {
        await rm(join(folderWithFiles, removedFileName));
        console.log('The file is successfully removed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();