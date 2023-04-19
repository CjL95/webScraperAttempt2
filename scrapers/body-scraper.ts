import * as axios from "axios";
import * as cheerio from "cheerio";
import pretty from "pretty";
import * as fs from "fs";
import path from 'path';
import request from 'request';
import { downloadImage } from "../utils/img-download";
//function that scrapes body data
export const scrapeBody = (markup: any) =>{  
	console.log('body scraper fired'); //debug body scraper activated
    //recursively iterate over the body nodes and push the text nodes to an array
	let bodyText = [];


}