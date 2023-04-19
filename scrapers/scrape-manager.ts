export const scrapeManager = (menu: Function, body: Function, urls: any) =>{
    console.log('scrape manager fired'); //debug body scraper activated
    urls ? console.log('scrape manager can access urls') : console.log('scrape manager cannot access urls');
    menu(urls);
	for(let i = 0; i < urls.length; i++){
		let path = '';
		let imgPath = '';
		/*if((i > 0 && i < 5) || i === 16){
			//architecture
			path = `./data/content/arch/${urls[i].name}/${urls[i].name}.txt`;
			imgPath = `./data/content/arch/${urls[i].name}/img/`;
		}else if(i > 4 && i < 8){
			path = `./data/content/arch/housing/${urls[i].name}/${urls[i].name}.txt`;
		}else if(i > 7 && i < 16){
			//community planning
			path = `./data/content/arch/community-planning/${urls[i].name}/${urls[i].name}.txt`;
			imgPath = `./data/content/arch/community-planning/${urls[i].name}/img/`;
		}else if(i > 16){
			//about
			path = `./data/content/about/${urls[i].name}/${urls[i].name}.txt`;
			imgPath = `./data/content/about/${urls[i].name}/img/`;
		}else{
			path = `./data/content/home/${urls[i].name}.txt`;
			imgPath = `./data/content/home/img/`;
		}*/
		body(urls[i], path, imgPath);
	}
}