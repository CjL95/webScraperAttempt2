const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs");

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
		name:'community-planning',
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
async function scrapeData(element){
	try{
			const {data} = await axios.get(element.link); //fetch page
			const $ = cheerio.load(data); //load html from the page
			//console.log(data);
			console.log(typeof($('*').text()));
			 fs.writeFile(`./scrapedData/${element.name}.txt`, $('*').text(), (err) => {
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
urls.forEach((element) =>{
	scrapeData(element);
});;
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
