/** generate random number **/
function rand ( n )
{return ( Math.floor ( (Math.random ( ) * n + 1) + 1000 ));}


/** DINO **/
var Dino = {};

		Dino.init = function() {
			
			//get dino
			Dino.layer = document.getElementById("dino");
			if(Dino.layer) {
				
					//set frames 
					Dino.frame1 = "0 0";
					Dino.frame2 = "-261px 0";
					Dino.frame3 = "-522px 0";
					Dino.frame4 = "-783px 0";
			
					//set initial frame
					Dino.layer.style.backgroundPosition = Dino.frame1;
					
					//generate random number 
					var randomnumber = rand(3000);
					
					//CALL ANIMATION - FIRST TIME
					Dino.timer = setTimeout(Dino.animationLoop, randomnumber);
				}
		}
			
		Dino.animationLoop = function() {
			
			//blink 
			setTimeout(Dino.blink, 500);
			setTimeout(Dino.blink, 2000);
			setTimeout(Dino.blink, 2500);
			
			//rotate head
			setTimeout(Dino.rotate, 4000);
			
			//blink 
			setTimeout(Dino.blink, 4500);
			setTimeout(Dino.blink, 5000);
			
			//end timer 
			clearTimeout(Dino.timer);
			
			//call animation again 
			var randomnumber = rand(3000);
			Dino.timer = setTimeout(Dino.animationLoop, 5000+randomnumber);
			
		}


		Dino.blink = function() {
			setTimeout("Dino.layer.style.backgroundPosition = Dino.frame2",1);
			setTimeout("Dino.layer.style.backgroundPosition = Dino.frame1",400);
		}


		Dino.rotate = function() {
			setTimeout("Dino.layer.style.backgroundPosition = Dino.frame3",1);
			setTimeout("Dino.layer.style.backgroundPosition = Dino.frame4",100);
			setTimeout("Dino.layer.style.backgroundPosition = Dino.frame3",300);
			setTimeout("Dino.layer.style.backgroundPosition = Dino.frame1",400);
		}
	
	
	
/** FROG **/
var Frog = {};

		Frog.init = function() {
			
			//get dino
			Frog.layer = document.getElementById("frog");
			if(Frog.layer) {
				
					//set frames 
					Frog.frame1 = "0 0";
					Frog.frame2 = "-215px 0";
					Frog.frame3 = "-430px 0";
					Frog.frame4 = "-645px 0";
			
					//set initial frame
					Frog.layer.style.backgroundPosition = Frog.frame1;
					
					//generate random number 
					var randomnumber = rand(4000);
					
					//CALL ANIMATION - FIRST TIME
					Frog.timer = setTimeout(Frog.animationLoop, randomnumber);
				}
		}
			
		Frog.animationLoop = function() {
		
		//rotate head
			setTimeout(Frog.blink,1000);
			
			//end timer 
			clearTimeout(Frog.timer);
			
			//call animation again 
			var randomnumber = rand(3000);
			Frog.timer = setTimeout(Frog.animationLoop, 1000+randomnumber);
			
		}

		Frog.blink = function() {
			//rotate
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame2",1);
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame3",100);
			
			//blink
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame4",200);
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame3",300);
			
			//blink
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame4",800);
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame3",900);
			
			//rotate
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame2",1000);
			setTimeout("Frog.layer.style.backgroundPosition = Frog.frame1",1100);
		}



/** DUCK **/		
var Duck = {};

		Duck.init = function() {
			
			//get duck
			Duck.layer = document.getElementById("duck");
			if(Duck.layer) {
				
					//set frames 
					Duck.frame1 = "0 0";
					Duck.frame2 = "-209px 0";
					Duck.frame3 = "-418px 0";
					Duck.frame4 = "-627px 0";
					Duck.frame5 = "-836px 0";
			
					//set initial frame
					Duck.layer.style.backgroundPosition = Duck.frame1;
					
					//generate random number 
					var randomnumber = rand(1000);
					
					//CALL ANIMATION - FIRST TIME
					Duck.timer = setTimeout(Duck.animationLoop, randomnumber);
				}
		}
			
		Duck.animationLoop = function() {
		
		    // move bill
			setTimeout(Duck.movebill,1000);
			
			//blink
			setTimeout(Duck.blink, 4000);
			
			//end timer 
			clearTimeout(Duck.timer);
			
			//call animation again 
			var randomnumber = rand(6000);
			Duck.timer = setTimeout(Duck.animationLoop, 4000+randomnumber);
			
		}


		Duck.movebill = function() {
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame2",100);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame3",200);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame2",300);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame1",400);
		}
		
		Duck.blink = function() {
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame2",100);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame3",200);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame4",300);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame5",400);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame4",500);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame5",600);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame4",700);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame5",800);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame4",900);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame3",1000);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame2",1100);
			setTimeout("Duck.layer.style.backgroundPosition = Duck.frame1",1200);
		}


		
/** CAT **/
var Cat = {};

		Cat.init = function() {
			
			//get cat
			Cat.layer = document.getElementById("cat");
			if(Cat.layer) {
				
					//set frames 
					Cat.frame1 = "0 0";
					Cat.frame2 = "-226px 0";
					Cat.frame3 = "-452px 0";
					Cat.frame4 = "-678px 0";
					Cat.frame5 = "-904px 0";
			
					//set initial frame
					Cat.layer.style.backgroundPosition = Cat.frame1;
					
					//generate random number 
					var randomnumber = rand(3000);
					
					//CALL ANIMATION - FIRST TIME
					Cat.timer = setTimeout(Cat.animationLoop, randomnumber);
				}
		}
			
		Cat.animationLoop = function() {
			
			// move bill
			setTimeout(Cat.movehead,1000);
			
			//blink
			setTimeout(Cat.blink, 3000);
			
			//end timer 
			clearTimeout(Cat.timer);
			
			//call animation again 
			var randomnumber = rand(3000);
			Cat.timer = setTimeout(Cat.animationLoop, 3000+randomnumber);
			
		}


		
		
		Cat.movehead = function() {
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame2",100);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame3",200);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame2",300);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame1",400);
		}
		
		Cat.blink = function() {
			
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame4",100);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame5",200);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame4",300);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame5",400);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame4",500);
			setTimeout("Cat.layer.style.backgroundPosition = Cat.frame1",600);
		
		
		}


		
/** BABY **/
	
var Baby = {};

		Baby.init = function() {
			
			//get Baby
			Baby.layer = document.getElementById("baby");
			if(Baby.layer) {
				
					//set frames 
					Baby.frame1 = "0 0";
					Baby.frame2 = "-227px 0";
					Baby.frame3 = "-454px 0";
					
					//set initial frame
					Baby.layer.style.backgroundPosition = Baby.frame1;
					
					//generate random number 
					var randomnumber = rand(2000);
					
					//CALL ANIMATION - FIRST TIME
					Baby.timer = setTimeout(Baby.animationLoop, randomnumber);
				}
		}
			
		Baby.animationLoop = function() {
			
			//blink
			setTimeout(Baby.blink, 3000);
			
			//end timer 
			clearTimeout(Baby.timer);
			
			//call animation again 
			var randomnumber = rand(3000);
			Baby.timer = setTimeout(Baby.animationLoop, 3000+randomnumber);
			
		}


		
		
		Baby.blink = function() {
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame2",100);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame3",200);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame2",300);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame3",400);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame2",500);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame3",600);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame2",700);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame3",800);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame2",900);
			setTimeout("Baby.layer.style.backgroundPosition = Baby.frame1",1000);
		}

		
		
/** MONKEY **/
var Monkey = {};

		Monkey.init = function() {
			
			//get Baby
			Monkey.layer = document.getElementById("monkey");
			if(Monkey.layer) {
				
					//set frames 
					Monkey.frame1 = "0 0";
					Monkey.frame2 = "-273px 0";
					Monkey.frame3 = "-546px 0";
					Monkey.frame4 = "-819px 0";
					Monkey.frame4 = "-819px 0";
					
					
					//set initial frame
					Monkey.layer.style.backgroundPosition = Monkey.frame1;
					
					//generate random number 
					var randomnumber = rand(3000);
					
					//CALL ANIMATION - FIRST TIME
					Monkey.timer = setTimeout(Monkey.animationLoop, randomnumber);
				}
		}
			
		Monkey.animationLoop = function() {
			
			//blink
			setTimeout(Monkey.blink, 1000);
			setTimeout(Monkey.blink, 1300);
			setTimeout(Monkey.blink, 1600);
			
			setTimeout(Monkey.blink, 2000);
			
			setTimeout(Monkey.rotate, 2500);
			
			setTimeout(Monkey.normal, 5000);
			
			//end timer 
			clearTimeout(Monkey.timer);
			
			//call animation again 
			var randomnumber = rand(3000);
			Monkey.timer = setTimeout(Monkey.animationLoop, 5000+randomnumber);
			
		}


		
		
		Monkey.blink = function() {
			setTimeout("Monkey.layer.style.backgroundPosition = Monkey.frame2",100);
			setTimeout("Monkey.layer.style.backgroundPosition = Monkey.frame1",200);
		}
		
		Monkey.rotate = function() {
			setTimeout("Monkey.layer.style.backgroundPosition = Monkey.frame3",100);
			setTimeout("Monkey.layer.style.backgroundPosition = Monkey.frame4",200);
		}
		
		Monkey.normal = function() {
			setTimeout("Monkey.layer.style.backgroundPosition = Monkey.frame3",100);
			setTimeout("Monkey.layer.style.backgroundPosition = Monkey.frame1",200);
		}

Core.start(Dino);
Core.start(Frog);
Core.start(Duck);
Core.start(Cat);
Core.start(Baby);
Core.start(Monkey);