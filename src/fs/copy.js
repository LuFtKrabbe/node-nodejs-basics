import { dirname, join } from 'node:path';
import { access, copyFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath);

    const filesFolder = join(dirPath, 'files');
    const copiedFilesFolder = join(dirPath, 'files_copy');

    try {
        await access(filesFolder)
        .catch(
        () => {
            console.log('The folder with files for copy does not exist.');
            throw new Error();
        });
        await access(copiedFilesFolder)
        .then(
        () => {
            console.log('The folder for copied files already exists!');
            throw new Error();
        },            
        () => {
            console.log('The folder for copied files will be created.');
        })
        await mkdir(copiedFilesFolder);
        const readFiles = await readdir(filesFolder);
        const filesCopying = readFiles.map(fileName => {
            copyFile(join(filesFolder, fileName), join(copiedFilesFolder, fileName));
        })
        await Promise.all(filesCopying);
        console.log('All files are succesfully copied!');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
