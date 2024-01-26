import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    const basePath = './src/zip/files';
    const fileToDecompressed = 'archive.gz';
    const fileToCompress = 'fileToCompress.txt';

    try {
        await pipeline(
          createReadStream(join(basePath, fileToDecompressed)),
          createUnzip(),
          createWriteStream(join(basePath, fileToCompress)),
        );
        await rm(join(basePath, fileToDecompressed));
      } catch (err) {
        console.error(err);
      }
};

await decompress();