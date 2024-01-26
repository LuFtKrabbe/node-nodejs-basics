import { join } from 'node:path';
import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
    const basePath = './src/hash/files';
    const fileName = 'fileToCalculateHashFor.txt';
    const algorithm = 'sha256';

    const hash = createHash(algorithm);
    const stream = createReadStream(join(basePath, fileName));

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