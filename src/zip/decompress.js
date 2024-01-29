import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const decompress = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const fileToDecompressed = 'archive.gz';
    const fileToCompress = 'fileToCompress.txt';

    try {
        await pipeline(
          createReadStream(join(filesFolder, fileToDecompressed)),
          createUnzip(),
          createWriteStream(join(filesFolder, fileToCompress)),
        );
      } catch (err) {
        console.error(err);
      }
};

await decompress();