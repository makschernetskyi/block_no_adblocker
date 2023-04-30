const blockMethods = {
	"duden.de" : ()=>{
		try{
			const overlayMsg = document.getElementById("aab-overlay");
			const body = document.getElementsByTagName("body")[0];
			if(overlayMsg){
				overlayMsg.style.display = "none";
				body.style.overflow = "auto";
			}
		}catch(err){
			if(DEBUG_MODE)
				console.error(err);
		}
	},
	"wallpaperwaifu.com": ()=>{
		try{
			let isRemoved = false
			const removingInterval = setInterval(()=>{
				if(isRemoved){
					clearInterval(removingInterval)
					return
				}
				const body = document.getElementsByTagName("body")[0];
				const overlayMsg = document.getElementById("slmxikz-blanket");
				if(overlayMsg && overlayMsg.style.display!="none"){
					overlayMsg.style.display = "none";
					body.style.overflow = "auto";
				}
			},1000)
		}catch(err){
			if(DEBUG_MODE)
				console.error(err);
		}
	},
	"yourtemplate.url": ()=>{
		try{
			//paste your removing no-adblockmessage actions here
		}catch(err){
			if(DEBUG_MODE)
				console.error(err);
		}
	}

}