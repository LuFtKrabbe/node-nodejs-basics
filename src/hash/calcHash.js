import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const fileName = 'fileToCalculateHashFor.txt';
    const algorithm = 'sha256';

    const hash = createHash(algorithm);
    const stream = createReadStream(join(filesFolder, fileName));

    stream.on('readable', () => {
        const data = stream.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(`${hash.digest('hex')}`);
        }
    });
};

await calculateHash();