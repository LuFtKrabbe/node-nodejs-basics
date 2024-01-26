import { join } from 'node:path';
import { rename as renameFile, access } from 'node:fs/promises';

const rename = async () => {
    const basePath = './src/fs';
    const folderWithFiles = join(basePath, 'files');

    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFileName.md';
    
    try {
        await access(join(folderWithFiles, oldFileName))
            .catch(() => { 
                throw new Error();
            })
        await access(join(folderWithFiles, newFileName))
            .then(
            () => { 
                throw new Error();
            },
            () => {
                console.log('The file will be renamed!');
            })
        await renameFile(join(folderWithFiles, oldFileName), join(folderWithFiles, newFileName))
        console.log('The file is successfully renamed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();