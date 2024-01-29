import { dirname, join } from 'node:path';
import { writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const newFileName = 'fresh.txt';
    const newFileContent = 'I am fresh and young';
    
    try {
        await access(join(filesFolder, newFileName))
            .then(
            () => {
                console.log('The file already exists!');
                throw new Error();
            },
            () => {
                console.log('File does not exist, start to creating a new one...');
            })
        await writeFile(join(filesFolder, newFileName), newFileContent);
        console.log('The file is successfully created!');
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await create();
