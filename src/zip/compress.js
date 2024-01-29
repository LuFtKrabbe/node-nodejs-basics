import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const compress = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const fileToCompress = 'fileToCompress.txt';
    const fileCompressed = 'archive.gz';

    try {
        await pipeline(
          createReadStream(join(filesFolder, fileToCompress)),
          createGzip(),
          createWriteStream(join(filesFolder, fileCompressed)),
        );
      } catch (err) {
        console.error(err);
      }
};

await compress();