
export const urls: any = {
	"Home": {
		uri: '',
		children: [{has: false}, {}]
	},
	"AboutUs":{
		uri: 'about-successcenters/',
		children: [{has: true}, {
			name: 'This is Us',
			uri: 'about-success-centers/this-is-us/',
			children: [{has: false}, {}]
		},
		{
			name: 'Our People',
			uri: 'about-success-centers/our-people/',
			children: [{has: false}, {}]
		}
		]
	},
	"Locations":{
		uri: 'locations/',
		children: [{has: false}, {}]
	},
	"Programs":{
		uri: 'programs/',
		children: [{has: true}, {
			name: 'Education',
			uri: 'programs/education/',
			children: [{has: false}, {}]
		},
		{
			name: 'New Directions',
			uri: 'programs/new-directions/',
			children: [{has: false}, {}]
		},
		{
			name: 'Equity Connections',
			uri: 'programs/equity-connections/',
			children: [{has: false}, {}]
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
			children: [{has: false}, {}]
		},
		{
			name: 'Breaking Barriers',
			uri: 'programs/breaking-barriers/',
			children: [{has: false}, {}]
		},
		{
			name: 'AND Housing',
			uri: 'programs/and-housing/',
			children: [{has: false}, {}]
		},
		]
	},
	"Employment":{
		uri: 'employment/',
		children: [{has: false}, {}]
	},
	"ForJobSeekers":{
		uri: 'for-job-seekers/',
		children: [{has: false}, {}]
	},
	"ForEmployers":{
		uri: 'for-employers/',
		children: [{has: false}, {}]
	},
	"HotJobs":{
		uri: 'hot-jobs/',
		children: [{has: false}, {}]
	},
	"Calendar":{
		uri: 'news-events/',
		children: [{has: false}, {}]
	},
	"GetInspired":{
		uri: 'get-inspired/',
		children: [{has: true}, {
			name: 'See Us',
			uri: 'get-inspired/video/',
			children: [{has: false}, {}]
		}]
	},
	"SupportUs":{
		uri: 'support-us/',
		children: [{has: false}, {}]
	},
	"ContactUs":{
		uri: 'contactus/',
		children: [{has: false}, {}]
	},
	"LatestNews":{
		uri: 'latest-news/',
		children: [{has: false}, {}]
	},
	"WhatOthers Say":{
		uri: 'what-others-say/',
		children: [{has: false}, {}]
	},
	"ArtGallery":{
		uri: 'art-gallery/',
		children: [{has: false}, {}]
	}
};