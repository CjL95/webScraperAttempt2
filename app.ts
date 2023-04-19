const site = 'https://successcenters.org/';
import { urls } from './utils/urls';
import { scrapeManager } from './scrapers/scrape-manager';
import { scrapeHeaderFooter } from './scrapers/header-footer-scraper';
import { scrapeBody } from './scrapers/body-scraper';

scrapeManager(scrapeHeaderFooter, scrapeBody);
