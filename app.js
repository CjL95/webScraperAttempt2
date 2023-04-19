const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs");
const path = require('path');
const request = require('request');

//pages to be scraped
const urls = [
	{
		name: 'home',
		link: 'http://www.andnet.org/'
	},
	{
		name: 'architecture',
		link: 'http://www.andnet.org/architecture/'
	},
	{
		name: 'housing',
		link: 'http://www.andnet.org/housing/'
	},
	{
		name:'health-and-childcare-facilities',
		link: 'http://www.andnet.org/health-childcare-facilities/'
	},
	{
		name:'non-profits-and-community-facilities',
		link: 'http://www.andnet.org/np-com_fac/'
	},
	{
		name: 'peacock-commons',
		link: 'http://www.andnet.org/housing/peacock-commons/'
	},
	{
		name: 'oak-park-apartments',
		link: 'http://www.andnet.org/housing/oak-park-apartments/'
	},
	{
		name: 'on-the-boards-affordable-housing-renovation',
		link: 'http://www.andnet.org/housing/on-the-boards-affordable-housing-renovation/'
	},
	{
		name:'community-planning', //8
		link: 'http://www.andnet.org/community-planning/'
	},
	{
		name:'program-description',
		link:'http://www.andnet.org/cp_program-description/'
	},
	{
		name:'comprehensive-neighborhood-planning',
		link:'http://www.andnet.org/cp_neighborhood-plan/'
	},
	{
		name:'design-for-public-spaces',
		link:'http://www.andnet.org/cp_design-for-public-spaces/'
	},
	{
		name:'commercial-corridor',
		link:'http://www.andnet.org/commercial-corridor-planning/'
	},
	{
		name:'community-mapping-services',
		link:'http://www.andnet.org/community-mapping-services/'
	},
	{
		name:'citywide-policy',
		link:'http://www.andnet.org/citywide-policy/'
	},
	{
		name:'community-built-projects',
		link:'http://www.andnet.org/community-built-projects/'
	},
	{
		name:'materials-handbook',
		link: 'http://www.andnet.org/materials-handbook/'
	},
	{
		name:'about',
		link: 'http://www.andnet.org/about/'
	},{
		name:'our-staff',
		link: 'http://www.andnet.org/staff/'
	},{
		name:'staff-login',
		link: 'http://www.andnet.org/login/'
	},
];


//function that scrapes the data
async function scrapeData(element, path, imgPath){
	try{
		  //downloads images
			var download = function(uri, filename, imgPath, callback){
  			request.head(uri, function(err, res, body){
	    		request(uri).pipe(fs.createWriteStream(imgPath + filename)).on('close', callback);
  			});
			};

			const {data} = await axios.get(element.link); //fetch page
			const $ = cheerio.load(data); //load html from the page
			var path;
			var imgList = [{}];
			$('#contentWrapper').find('img').each(function (index, element) {
					  imgList.push(
					  	{
					  		name: $(element).attr('src').match(/\b\w+.\d+.jpg/), 
					  		src: $(element).attr('src')
					  	}
					  );
					})
			//console.log(data);
			 fs.writeFile(path, (($("#contentWrapper").text()).match(/\w.+\n/gi).join('')).replace(/\u00a0/g, ' '), (err) => {
	      		if (err) {
	        		console.error(err);
	        		return;
	      		}
	      		console.log("Successfully written data to file");
	    	});
			 for(let i = 0; i < imgList.length; i++){
			 	download(element.link + imgList[i].src, `${imgList[i].name}`,imgPath, function(){
  					console.log('done');
				});
			 }
	} catch(err) {
		console.log(err);
	}
}
async function scrapeHeaderFooter() {
	try{
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
	}
}
	//seperateBody(element);
for(let i = 0; i < urls.length; i++){
	let path = '';
	let imgPath = '';
	if((i > 0 && i < 5) || i === 16){
		//architecture
		path = `./scrapedData/content/arch/${urls[i].name}/${urls[i].name}.txt`;
		imgPath = `./scrapedData/content/arch/${urls[i].name}/img/`;
	}else if(i > 4 && i < 8){
		path = `./scrapedData/content/arch/housing/${urls[i].name}/${urls[i].name}.txt`;
	}else if(i > 7 && i < 16){
		//community planning
		path = `./scrapedData/content/arch/community-planning/${urls[i].name}/${urls[i].name}.txt`;
		imgPath = `./scrapedData/content/arch/community-planning/${urls[i].name}/img/`;
	}else if(i > 16){
		//about
		path = `./scrapedData/content/about/${urls[i].name}/${urls[i].name}.txt`;
		imgPath = `./scrapedData/content/about/${urls[i].name}/img/`;
	}else{
		path = `./scrapedData/content/home/${urls[i].name}.txt`;
		imgPath = `./scrapedData/content/home/img/`;
	}
	scrapeData(urls[i], path, imgPath);

}
scrapeHeaderFooter();