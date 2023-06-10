//set up the urls you want to scrape
/*
--URL FORMAT--

<page slug> : the slug after the site's domain name (ex: https://www.walmart.com/<page slug>)
<PageName> : The name of the page in pascal case
<children> : an array of objects containing the names and slugs of the page's children
{has: true} : a flag to indicate that the page has children, will be false if no children exist or are desired
the names are used to create file names for the scraped data
the slugs are used to create the urls to scrape

a page without children:
"PageName":{
	uri: <page slug>,
	children: [{has: false}, {}]
},

A page with children:
"PageName":{
		uri: <page slug>,
		children: [
			{has: true}, 
			{
				name: <child name>,
				uri: '<page slug>/<child slug>',
				children: [{has: false}, {}]
			}
		]
	},
*/
//setup to scrape an example
export const urls: any = {  
	"Home":{
		uri: '',
		children: [{has: false}, {}]
	}
};
/*
"Shop":{
	uri: 'shop/deals',
	children: [{has: true}, 
		{
			name: 'All Home',
			uri: 'shop/deals/all-home',
			children: [{has: false}, {}]
		},
		{
			name: 'Fashion',
			uri: 'shop/deals/clothing-and-accessories',
			children: [{has: false}, {}]
		},{
			name: 'Electronics',
			uri: 'shop/deals/electronics',
			children: [{has: false}, {}]
		}
	]
}*/