export const scrapeBody = async (element: any, path: any, imgPath: any) =>{  //function that scrapes body data
	console.log('body scraper fired'); //debug body scraper activated
    /*try{
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
	}*/
}