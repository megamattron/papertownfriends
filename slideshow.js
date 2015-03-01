var Slideshow = {

width: 256, 
currentImage: 0,
init: function() {
		
		//get slideshow
		var slideshow = document.getElementById("slideshow");
		if(slideshow) {
			
			//get images
			Slideshow.allImages = slideshow.getElementsByTagName("img");
			
			//images added - sort em
			if(Slideshow.allImages.length>0) {	
				
				Slideshow.allImages[0].style.left = "0px";
				
				for(var i=0; i<Slideshow.allImages.length; i++)	
					if(i>0) {
						//change position
						Slideshow.allImages[i].style.left = Slideshow.width*i+"px";
						}
			}
			
			//get links 
			Slideshow.prevButton = document.getElementById("prev"); 
			Slideshow.nextButton = document.getElementById("next"); 
			
			//add event listeners for buttons
			Core.addEventListener(Slideshow.prevButton,"click",Slideshow.prev);	
			Core.addEventListener(Slideshow.nextButton,"click",Slideshow.next);
			
			//get lists
			var list = document.getElementById("media").getElementsByTagName("ul")[0].getElementsByTagName("li");
			for(var i = 0; i<4; i++) {
				list[i]._imageNumber = i;
				Core.addEventListener(list[i],"mouseover",Slideshow.listMouseOver);
			}
		}
		
		
		
		},
		
		prev: function(event) {
			
			Core.preventDefault(event);
			if(Slideshow.currentImage!=0) {
				
				Slideshow.currentImage--;
				for(var i=0; i<Slideshow.allImages.length;i++) {
					Slideshow.allImages[i].style.left = (Slideshow.currentImage*Slideshow.width)-(Slideshow.width*i)+"px";
					}
			} else {
			
				Slideshow.currentImage = Slideshow.allImages.length;
				Slideshow.prev(event);
			}
		
		}, 
		
		next: function(event) {
		
			Core.preventDefault(event);
			if(Slideshow.allImages[Slideshow.currentImage+1]) {
				Slideshow.currentImage++;
				for(var i=0; i<Slideshow.allImages.length;i++) { 
					Slideshow.allImages[i].style.left = (Slideshow.width*i)-(Slideshow.currentImage*Slideshow.width)+"px";
					} 
			}else {
				Slideshow.currentImage = -1;
				Slideshow.next(event);
			}
		},

		listMouseOver: function(event) {
			this.style.cursor = "pointer";
			Slideshow.currentImage=this._imageNumber-1;
			Slideshow.next(event);
			
			
		}
	
	





















} 

Core.start(Slideshow);