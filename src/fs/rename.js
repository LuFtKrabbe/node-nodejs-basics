import { dirname, join } from 'node:path';
import { rename as renameFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFileName.md';
    
    try {
        await access(join(filesFolder, oldFileName))
            .catch(() => { 
                throw new Error();
            })
        await access(join(filesFolder, newFileName))
            .then(
            () => { 
                throw new Error();
            },
            () => {
                console.log('The file will be renamed!');
            })
        await renameFile(join(filesFolder, oldFileName), join(filesFolder, newFileName))
        console.log('The file is successfully renamed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();