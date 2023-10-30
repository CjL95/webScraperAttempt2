//set up the urls you want to scrape
/*
--URL FORMAT--

<page slug> : the slug after the site's domain name (ex: https://www.walmart.com/<page slug>)
<PageName> : The name of the page in pascal case
<children> : an array of objects containing the names and slugs of the page's children
the names are used to create file names for the scraped data
the slugs are used to create the urls to scrape

a page without children:
"PageName":{
	uri: <page slug>,
	children: []
},

A page with children:
"PageName":{
		uri: <page slug>,
		children: [
			
			{
				name: <child name>,
				uri: '<page slug>/<child slug>',
				children: []
			}
		]
	},
*/
//setup to scrape an example
export const urls: any = {  
	"Home":{
		uri: '',
		children: []
	}
};