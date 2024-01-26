import { join } from 'node:path';
import { createWriteStream } from 'node:fs';

const write = async () => {
    const basePath = './src/streams/files';
    const fileToWriteName = 'fileToWrite.txt';

    const readableFromTerminal = process.stdin;
    const writeStream = createWriteStream(join(basePath, fileToWriteName));

    console.log('Enter your data to write in the File:');
    readableFromTerminal.on('data', chunk => {
        writeStream.write(chunk.toString());
    })
};

await write();