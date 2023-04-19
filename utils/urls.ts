interface Urls{
	[key: string]: {
		uri?: string;
		children?: Array<Object>;
	}
}
export const urls: Urls = {
	"Home": {
		uri: '',
		children: []
	},
	"AboutUs":{
		uri: 'about-success-centers/',
		children: [{
			name: 'This is Us',
			uri: 'about-success-centers/this-is-us/'
		},
		{
			name: 'Our People',
			uri: 'about-success-centers/our-people/'
		}
		]
	},
	"Locations":{
		uri: 'locations/',
		children: []
	},
	"Programs":{
		uri: 'programs/',
		children: [{
			name: 'Education',
			uri: 'programs/education/',
			children: []
		},
		{
			name: 'New Directions',
			uri: 'programs/new-directions/',
			children: []
		},
		{
			name: 'Equity Connections',
			uri: 'programs/equity-connections/',
			children: []
		},
		{
			name: 'Creativity',
			uri: 'programs/creativity/',
			children: [{
				name: 'Library of Plays',
				uri: 'programs/creativity/library-of-plays/'
			}]
		},
		{
			name: 'Dream Keepers',
			uri: 'programs/dream-keepers/',
			children: []
		},
		{
			name: 'Breaking Barriers',
			uri: 'programs/breaking-barriers/',
			children: []
		},
		{
			name: 'AND Housing',
			uri: 'programs/and-housing/',
			children: []
		},
		]
	},
	"Employment":{
		uri: 'employment/',
		children: []
	},
	"ForJobSeekers":{
		uri: 'for-job-seekers/',
		children: []
	},
	"ForEmployers":{
		uri: 'for-employers/',
		children: []
	},
	"HotJobs":{
		uri: 'hot-jobs/',
		children: []
	},
	"Calendar":{
		uri: 'news-events/',
		children: []
	},
	"GetInspired":{
		uri: 'get-inspired/',
		children: [{
			name: 'See Us',
			uri: 'get-inspired/video/',
			children: []
		}]
	},
	"SupportUs":{
		uri: 'support-us/',
		children: []
	},
	"ContactUs":{
		uri: 'contactus/',
		children: []
	},
	"LatestNews":{
		uri: 'latest-news/',
		children: []
	},
	"WhatOthers Say":{
		uri: 'what-others-say/',
		children: []
	},
	"ArtGallery":{
		uri: 'art-gallery/',
		children: []
	}
};