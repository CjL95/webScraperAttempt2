import { scrapeManager } from './scrapers/scrape-manager.ts';
import { scrapeHeaderFooter } from './scrapers/header-footer-scraper.ts';
import { scrapeBody } from './scrapers/body-scraper.ts';

try{
    scrapeManager(scrapeHeaderFooter, scrapeBody)
}catch(e){
    console.log(e);
};
