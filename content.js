(function(){

	DEBUG_MODE = true;
	const href = location.href;
	for(url in blockMethods){
		if(href.includes(url)){
			blockMethods[url]()
		}
	}

})();