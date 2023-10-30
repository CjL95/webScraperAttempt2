import * as cheerio from "cheerio";
import * as fs from "fs";
import { downloadImage } from "../utils/img-download.ts";

export const scrapeHeaderFooter = (markup: any, name: any) =>{
    console.log('head/foot scraper fired'); //debug body scraper activated
	//scrapes the header and footer data 
    let header = !!markup('header').text() ? markup('header').text().match(/\w.+\n/gi).join('').replace(/\u00a0/g, ' '): '';
    let footer = !!markup('footer').text() ? markup('footer').text().match(/\w.+\n/gi).join('').replace(/\u00a0/g, ' '): '';
    (function([header, footer]){
        arguments[0].forEach((i:any, index:number)=>{ //iterate over input array
            index > 0 ? fs.writeFile(`./data/footer.txt`, i, (err: any) => {console.log(err)}) //write the footer to a file
            : fs.writeFile(`./data/header.txt`, i, (err: any) => {console.log(err)}) //write the header to a file
        })
    })([header, footer])
}