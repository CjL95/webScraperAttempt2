import { default as axios } from "axios";
import { urls } from "../utils/urls";
import * as cheerio from "cheerio";
let site = 'https://successcenters.org/';

//function that initiates each scraper
export const scrapeManager = async (menu: Function, body: Function) =>{
    console.log('scrape manager fired'); //debug body scraper activated
    urls ? console.log('scrape manager can access urls') : console.log('scrape manager cannot access urls');
	//iterate over the urls object and call the scrapers for each page
	let menuGen = 0; //flag to prevent menu from being generated more than once
	for(let i in urls){
		let { data } = await axios.get(`${site}${urls[i].uri}`); //get the page data
		const $ = cheerio.load(data); //load the page data into cheerio
		body($); //call the body scraper
		!menuGen ? (menu($), ++menuGen) : ''; //call the menu scraper only once
	}
}