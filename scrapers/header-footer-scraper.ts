export const scrapeHeaderFooter = async (urls: any) =>{
    console.log('head/foot scraper fired'); //debug body scraper activated
    urls ? console.log('head/foot can access urls') : console.log('head/foot cannot access urls');
	/*try{
		const {data} = await axios.get(urls[0].link);
		const $ = cheerio.load(data);
		fs.writeFile(`./scrapedData/menus/sidebar.txt`, (($(".verticalNavigationBar").text()).match(/\w.+\n/gi).join('')).replace(/\u00a0/g, ' '), (err) => {
  		if (err) {
    		console.error(err);
    		return;
  		}
  		console.log("Successfully written data to file");
		});
		fs.writeFile(`./scrapedData/menus/footer.txt`, (($("#pageFooter").text()).match(/\w.+\n/gi).join('')).replace(/\u00a0/g, ' '), (err) => {
  		if (err) {
    		console.error(err);
    		return;
  		}
  		console.log("Successfully written data to file");
		});
	}catch(err){
		console.error(err);
	}*/
}