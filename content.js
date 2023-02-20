(function(){
	DEBUG_MODE = false;
	const href = location.href;


	if(href.includes("duden.de")){
		removeDudenNoAdblockMessage()
	}

	function removeDudenNoAdblockMessage(){
		try{
			const overlayMsg = document.getElementById("aab-overlay");
			const body = document.getElementsByTagName("body")[0];
			overlayMsg.style.display = "none";
			body.style.overflow = "auto";
		}catch(err){
			if(DEBUG_MODE)
				console.error(err);
		}

	}

})();