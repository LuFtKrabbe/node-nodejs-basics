import { dirname, join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const needToReadFileName = 'fileToRead.txt';

    try {
        console.log(`Start reading the file:`);
        console.log('--------------------------------');
        const readedContent = await readFile(join(filesFolder, needToReadFileName), {encoding: 'utf-8'});
        console.log(readedContent);
        console.log('--------------------------------');
        console.log('The file is successfully readed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();