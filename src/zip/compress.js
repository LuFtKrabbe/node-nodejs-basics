import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const basePath = './src/zip/files';
    const fileToCompress = 'fileToCompress.txt';
    const fileCompressed = 'archive.gz';

    try {
        await pipeline(
          createReadStream(join(basePath, fileToCompress)),
          createGzip(),
          createWriteStream(join(basePath, fileCompressed)),
        );
        await rm(join(basePath, fileToCompress));
      } catch (err) {
        console.error(err);
      }
};

await compress();