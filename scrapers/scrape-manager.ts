import { default as axios } from "axios";
import { urls } from "../utils/urls";
import * as cheerio from "cheerio";
import * as fs from "fs";
let site = 'https://toscrape.com/'; //example site

function delay(ms: number) {  //throttler for axios requests
    return new Promise(resolve => setTimeout(resolve, ms));
}

//function that initiates each scraper
export const scrapeManager = async (menu: Function, body: Function): Promise<void> =>{
	let menuGen = 0; //flag to prevent menu from being generated more than once
	!fs.existsSync('./data') ? fs.mkdirSync('./data') : (fs.rmSync('./data', { recursive: true, force: true }),fs.mkdirSync('./data')); //create the data folder if it doesn't exist
	const getPage = async (url: string, name: string): Promise<any> =>{
		let { data } = await axios.get(url); //get the page data
		let $ = cheerio.load(data); //load the page data into cheerio
		console.log('filename in getPage: ' + name); //debug
		body($ , name); //call the body scraper
		!menuGen ? (menu($), ++menuGen) : ''; //call the menu scraper only once
	}
	for(let i in urls as Object[]){ //call a throttled get function for each page
		let children = urls[i].children; //get the children of the page
		let childCount = children.length; //get the number of children
		await delay(4000); //wait 4 seconds between each page to prevent overload
		getPage(`${site}${urls[i].uri}`,i); //call the getPage function
		if(childCount){ //if the page has children, call the getPage function for each child
			while(childCount > 0){
				await delay(4000); //wait 4 seconds between each page to prevent overload
				getPage(`${site}${children[childCount - 1].uri}`, urls[i].children[childCount - 1].name); //call the getPage function
				--childCount; //decrement the child count
			}
		}
	}
}


