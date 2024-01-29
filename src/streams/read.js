import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import os from 'node:os'

const read = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const fileToReadName = 'fileToRead.txt';

    const readStream = createReadStream(join(filesFolder, fileToReadName));
    const writableToTerminal = process.stdout;

    let readContent = '';

    readStream.on('data', (chunk) => {
        readContent += chunk.toString();
    });

    readStream.on('end', () => {
        writableToTerminal.write(readContent);
        writableToTerminal.write(os.EOL);
    });
};

await read();