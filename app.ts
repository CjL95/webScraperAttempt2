/*import * as axios from "axios";
import * as cheerio from "cheerio";
import pretty from "pretty";
import * as fs from "fs";
import path from 'path';
import request from 'request';*/
let site = 'https://successcenters.org/';
import { urls } from './urls';
import { scrapeManager } from './scrapers/scrape-manager';
import { scrapeHeaderFooter } from './scrapers/header-footer-scraper';
import { scrapeBody } from './scrapers/body-scraper';

scrapeManager(scrapeHeaderFooter, scrapeBody, urls);
