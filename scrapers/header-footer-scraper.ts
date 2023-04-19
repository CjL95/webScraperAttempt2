import * as cheerio from "cheerio";
import * as fs from "fs";
import { downloadImage } from "../utils/img-download";

export const scrapeHeaderFooter = (urls: any) =>{
    console.log('head/foot scraper fired'); //debug body scraper activated
    urls ? console.log('head/foot can access urls') : console.log('head/foot cannot access urls');
	//scrapes the header and footer data
}