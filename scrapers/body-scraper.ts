import * as cheerio from "cheerio";
import * as fs from "fs";
import { downloadImage } from "../utils/img-download.ts";
//function that scrapes body data
export function scrapeBody(markup: any, name: string): any{ 
	console.log('body scraper fired. name: ' + name); //debug body scraper activated
	let pageText = markup('body').text().match(/\w.+\n/gi).join('').replace(/\u00a0/g, ' '); //scrape the page text
	console.log('filename: ' + name);
	fs.writeFile(`./data/${name}.txt`, pageText, (err: any) => {console.log(err)}); //write the page text to a file
}