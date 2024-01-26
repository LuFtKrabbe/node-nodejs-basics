import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const transform = async () => {
    const readableData = process.stdin;
    const writableData = process.stdout;

    const transform = new Transform({
        transform(chunk, enc, cb) {
            const chunkStringified = chunk.toString().trim();
            const reversedChunk = chunkStringified.split('').reverse().join('');
            this.push(reversedChunk + '\n');
            cb();
        }
    })

    try {
        await pipeline(readableData, transform, writableData);
    } catch (err) {
        console.error(err);
    }
};

await transform();