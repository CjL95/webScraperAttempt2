import { promises as fs } from "fs";

//function that downloads an image from a URL and saves it to a path
export const downloadImage = async (url: string, path: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(path, buffer);
}