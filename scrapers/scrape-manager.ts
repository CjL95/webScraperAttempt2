import { default as axios } from "axios";
import { urls } from "../utils/urls";
import * as cheerio from "cheerio";
let site = 'https://successcenters.org/';

//function that initiates each scraper
export const scrapeManager = async (menu: Function, body: Function): Promise<void> =>{
    console.log('scrape manager fired'); //debug body scraper activated
    urls ? console.log('scrape manager can access urls') : console.log('scrape manager cannot access urls');
	//iterate over the urls object and call the scrapers for each page
	let menuGen = 0; //flag to prevent menu from being generated more than once
	const getPage = async (url: string, name: string): Promise<any> =>{
		let { data } = await axios.get(url); //get the page data
		let $ = cheerio.load(data); //load the page data into cheerio
		let id = name;
		console.log('filename in getPage: ' + id);
		body($ , 'Home'); //call the body scraper
		!menuGen ? (menu($), ++menuGen) : ''; //call the menu scraper only once
	}
	for(let i in urls){ 
		let pages: any = [Object.fromEntries([[i, `${site}${urls[i].uri}`]])]; //make list of pages to grab
		urls[i].children[0].has ? urls[i].children.forEach((child: any, index: number) => {
			pages.push(Object.fromEntries([[i, `${site}${child.uri}`]]));
		}): '' //if the page has children, add them to the list
		pages.forEach(async (j: Object)=>{
			console.log(j); //debug
			await setTimeout(()=>{getPage(Object.values(j)[0], Object.keys(j)[0])}, 4000);
		})	
	}
	//await getPage(`https://successcenters.org/`, 'Home') //stub input
}


