const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs");
const path = require('path');

//const directory = ;
/*const subDir = 'scrapedData/content';

fs.readdir(subDir, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(subDir, file), err => {
      if (err) throw err;
    });
  }*/
  /*for (const file of files) {
    fs.unlink(path.join('scrapedData', file), err => {
      if (err) throw err;
    });
  }*/
//});

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
		name:'housing',
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
		name:'community-planning', //5
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
async function scrapeData(element, path){
	try{
			const {data} = await axios.get(element.link); //fetch page
			const $ = cheerio.load(data); //load html from the page
			var path;
			//console.log(data);
			 fs.writeFile(path, (($("#contentWrapper").text()).match(/\w.+\n/gi).join('')).replace(/\u00a0/g, ' '), (err) => {
	      		if (err) {
	        		console.error(err);
	        		return;
	      		}
	      		console.log("Successfully written data to file");
	    	});
			//console.log(pretty($.html()));
	} catch(err) {
		console.log(err);
	}
}
async function scrapeHeaderFooter() {
	try{
		const {data} = await axios.get(urls[0].link);
		const $ = cheerio.load(data);
		fs.writeFile(`./scrapedData/sidebar.txt`, (($(".verticalNavigationBar").text()).match(/\w.+\n/gi).join('')).replace(/\u00a0/g, ' '), (err) => {
  		if (err) {
    		console.error(err);
    		return;
  		}
  		console.log("Successfully written data to file");
		});
		fs.writeFile(`./scrapedData/footer.txt`, (($("#pageFooter").text()).match(/\w.+\n/gi).join('')).replace(/\u00a0/g, ' '), (err) => {
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
/*async function seperateBody(element){
	try{
		const {data} = await axios.get(element.link); //fetch page
		const $ = cheerio.load(data); //load html from the page
		return (($('body').text()).match(/\w.+\n/gi).join('')).replace('SEARCH', 'SEARCH\n---BODY---\n');
	}catch(err){
		console.log(err);
	}
	
}*/

/*urls.forEach((element) =>{
	let path = '';
	scrapeData(element, path);
	//seperateBody(element);
});*/
for(let i = 0; i < urls.length; i++){
	let path = '';
	if((i > 0 && i < 5) || i === 13){
		//architecture
		path = `./scrapedData/content/arch/${urls[i].name}/${urls[i].name}.txt`;
	}else if(i > 4 && i < 13){
		//community planning
		path = `./scrapedData/content/arch/community-planning/${urls[i].name}/${urls[i].name}.txt`;
	}else if(i > 13){
		//about
		path = `./scrapedData/content/about/${urls[i].name}/${urls[i].name}.txt`;

	}else{
		path = `./scrapedData/content/home/${urls[i].name}.txt`;
	}
	scrapeData(urls[i], path);
}
scrapeHeaderFooter();

//tutorial below


/*const markup = `
<ul class="fruits">
  <li class="fruits__mango"> Mango </li>
  <li class="fruits__apple"> Apple </li>
</ul>
`;
const $ = cheerio.load(markup);
console.log(pretty($.html()));


const mango = $(".fruits__mango");
console.log(mango.html()); // Mango


const apple = $(".fruits__apple");
console.log(apple.attr("class")); //fruits__apple


const listItems = $("li");
console.log(listItems.length); // 2
listItems.each(function (idx, el) {
  console.log($(el).text());
});
// Mango
// Apple

//appending and prepending add things as children to the selected element
const ul = $("ul");
ul.append("<li>Banana</li>"); //inserted as last child
ul.prepend("<li>Pineapple</li>"); //inserted as first child
console.log(pretty($.html()));*/



/*
	if(element.link === 'http://www.andnet.org/architecture/' || 
											'http://www.andnet.org/housing/' || 
											'http://www.andnet.org/health-childcare-facilities/' || 
											'http://www.andnet.org/np-com_fac/' 
	){
		console.log('architecture');
		path = `./scrapedData/content/architecture/${element.name}.txt`;
	}else if(element.link === 'http://www.andnet.org/community-planning/' ||
														'http://www.andnet.org/cp_program-description/' ||
														'http://www.andnet.org/cp_neighborhood-plan/' ||
														'http://www.andnet.org/cp_design-for-public-spaces/' ||
														'http://www.andnet.org/commercial-corridor-planning/' ||
														'http://www.andnet.org/community-mapping-services/' ||
														'http://www.andnet.org/citywide-policy/' ||
														'http://www.andnet.org/community-built-projects/'
	){
		console.log('planning');
		path = `./scrapedData/content/architecture/community-planning/${element.name}.txt`;
	}else if(element.link === 'http://www.andnet.org/about/' ||
														'http://www.andnet.org/staff/' ||
														'http://www.andnet.org/login/'
	){
		console.log('about');
		path = `./scrapedData/content/about/${element.name}.txt`;
	}else{
		console.log('home');
		path = `./scrapedData/content/home/${element.name}.txt`;
	}*/