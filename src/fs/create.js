import { join } from 'node:path';
import { writeFile, access } from 'node:fs/promises';

const create = async () => {
    const basePath = './src/fs';

    const folderWithFiles = join(basePath, 'files');
    const newFileName = 'fresh.txt';
    const newFileContent = 'I am fresh and young';
    
    try {
        await access(join(folderWithFiles, newFileName))
            .then(
            () => {
                console.log('The file already exists!');
                throw new Error();
            }, 
            () => {
                console.log('File does not exist! Start to creating a new one...');
            })
        await writeFile(join(folderWithFiles, newFileName), newFileContent);
        console.log('The file is successfully created!');
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await create();
