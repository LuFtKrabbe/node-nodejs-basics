import { join } from 'node:path';
import { cp } from 'node:fs/promises';

const copy = async () => {
    try {
        const basePath = './src/fs';
        const folderWithFiles = join(basePath, 'files');
        const folderForCopiedFiles = join(basePath, 'files_copy');
        await cp(folderWithFiles, folderForCopiedFiles, {force: false, errorOnExist: true, recursive: true});
        console.log('All files are succesfully copied!');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
