import * as cheerio from "cheerio";
import * as fs from "fs";
import { downloadImage } from "../utils/img-download";

export const scrapeHeaderFooter = (markup: any, name: any) =>{
    console.log('head/foot scraper fired'); //debug body scraper activated
	//scrapes the header and footer data 
    let header = !!markup('header').text() ? markup('header').text().match(/\w.+\n/gi).join('').replace(/\u00a0/g, ' '): '';
    let footer = !!markup('footer').text() ? markup('footer').text().match(/\w.+\n/gi).join('').replace(/\u00a0/g, ' '): '';
	//write the array to a file
    (function([header, footer]){
        arguments[0].forEach((i:any, index:number)=>{
            index > 0 ? fs.writeFile(`./data/footer.txt`, i, (err: any) => {console.log(err)})
            : fs.writeFile(`./data/header.txt`, i, (err: any) => {console.log(err)})
        })
    })([header, footer])
}