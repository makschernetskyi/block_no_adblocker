
# Extension against "no adBlock" windows #


there are websites, that take our right for freedom, that try to make money form our needs in modern world
they want us to have no choice and make us watch ads anyway. as a sign of protest this extension was made.
its purpose is to remove annoying overlay-windows that say "turn adblock off" in order to have access to 
the website. Viva la libertad!
<br/>
## How To Use: ##

1. Clone this repo
2. open blockMethods.js file, it contains blockMethods object, add your blocking method named like
the website it is supposed to work with. For convinience there is template of a method inside the file.
`"yourtemplate.url": ()=>{
		try{
			//paste your removing no-adblockmessage actions here
		}catch(err){
			if(DEBUG_MODE)
				console.error(err);
		}
	}`
3. load this modified extension to your chromium-based browser.
4. have fun! 
