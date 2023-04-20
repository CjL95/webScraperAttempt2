import * as cheerio from "cheerio";
import * as fs from "fs";
import { downloadImage } from "../utils/img-download";
//function that scrapes body data
export function scrapeBody(markup: any, name: string): any{ 
	let id = name; 
	console.log('body scraper fired. name: ' + id); //debug body scraper activated
    //recursively iterate over the body nodes and push the text nodes to an array
	let pageText = markup('body').text().match(/\w.+\n/gi).join('').replace(/\u00a0/g, ' ');
	//write the array to a file
	console.log('filename: ' + name);
	fs.writeFile(`./data/${name}.txt`, pageText, (err: any) => {console.log(err)});
	
}