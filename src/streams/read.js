import { join } from 'node:path';
import { createReadStream } from 'node:fs';

const read = async () => {
    const basePath = './src/streams/files';
    const fileToReadName = 'fileToRead.txt';

    const readStream = createReadStream(join(basePath, fileToReadName));
    const writableToTerminal = process.stdout;

    let readContent = '';

    readStream.on('data', (chunk) => {
        readContent += chunk.toString();
    });

    readStream.on('end', () => {
        writableToTerminal.write(readContent);
        writableToTerminal.write('\n');
    });
};

await read();