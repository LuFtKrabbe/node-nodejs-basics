import { dirname, join } from 'node:path';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const fileToWriteName = 'fileToWrite.txt';

    const readableFromTerminal = process.stdin;
    const writeStream = createWriteStream(join(filesFolder, fileToWriteName));

    console.log('Enter your data to write in the File:');
    readableFromTerminal.on('data', chunk => {
        writeStream.write(chunk.toString());
    })
};

await write();
