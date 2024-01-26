import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
    const basePath = './src/fs';
    const folderWithFiles = join(basePath, 'files');
    const needToReadFileName = 'fileToRead.txt';

    try {
        console.log(`Start reading the file:`);
        console.log('--------------------------------');
        const readedContent = await readFile(join(folderWithFiles, needToReadFileName), {encoding: 'utf8'});
        console.log(readedContent);
        console.log('--------------------------------');
        console.log('The file is successfully readed!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();