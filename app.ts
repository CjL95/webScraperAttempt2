import { scrapeManager } from './scrapers/scrape-manager';
import { scrapeHeaderFooter } from './scrapers/header-footer-scraper';
import { scrapeBody } from './scrapers/body-scraper';

try{
    scrapeManager(scrapeHeaderFooter, scrapeBody)
}catch(e){
    console.log(e);
};
