// image change randomly to one of the other 11 pics when hover over pic
var NorthShore = {};

NorthShore.init = function() {
	
	NorthShore.imageCounter = 0;
  
	// alert("Hi from the NorthShore");

	// Set up two indexed arrays such that an index plugged in to both of them 
	// produces correlating data.
	//
	// Define an array to represent our images

	pics = new Array(1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12);         // Original way to setup an array

	// Shortcut way to setup an array:  captions = [];
	// Define an array to represent our captions     // Shortcut way to setup an array
	captions = ["Split Rock Lighthouse", "Superior Trail", "Beach Rock",
						 "Breakers", "AmericInn Beach", "Surf Spray", "Superior Red Rock", 
						 "Superior Sunset", "Gooseberry Falls", "Cascades at Squatch Rock", 
						 "The Temperance", "Fall Colors"];   

	// Get a reference to our first image
	var northShoreImage = document.querySelector("#northShorePic");
	
	// Get a reference to our bottom image
	timedImage = document.querySelector('#northShoreAutoPic');

	// alert('northShoreImage is a ' + northShoreImage.nodeName + " and its id is " + northShoreImage.id);


	// Get references to our paragraphs that contain the caption
	picCaptions = document.querySelectorAll("p.picCaption");

	// Set up our event handlers to handle a hover event
	// which actually consists of two spereate event; 
	// mouseover and mouseout.
	//
	// Older way - event handlers
	//
	// element.onevent = handlerFunctionName;
	//
	// Note: JavaScript will automatically always pass one argument
	//    (parameter) to any event handler function when it is 
	//    called.  What it is you ask?  It passes the event that
	//    occurred as an object (event object).
	//
	// northShoreImage.onmouseover = NorthShore.showRandomImage;
	// northShoreImage.onmouseout = NorthShore.resetImage;

	// New way - event listeners
	//
	// element.addEventListener('event, listenerFunction, eventPropagation)
	// eventPropagation is a boolean - false means no propagation (default)
	//																 true means propagation will occur
	//
	northShoreImage.addEventListener('mouseover', NorthShore.showRandomImage, false);
	northShoreImage.addEventListener('mouseout', NorthShore.resetImage, false);
	
	// Start the timed slideshow - circular carousel of images
	NorthShore.slideShow();
		
  
  
};


// showRandomImage() method definition
//
// This method will be called whenever user mouses over the first image
//

NorthShore.showRandomImage = function(e) {
  
  // Inside the context ({}'s) of an event handler function, the 
  // "this" keyword refers to the object the event occured on.
  
  //alert("The id of our moused over image is " + e.currentTarget.id + "(" + this.id + ").  Mouse position currently is: " + e.pageX + ", " + e.pageY + "\n\n Mouse position related to edges of image: " + e.offsetX + ", " + e.offsetY);
  
  // Get random number we can use as an index into our arrays
  var randomIndex = NorthShore.randRange(1, pics.length);  // Starting at 1 because the default image is index 0.
  
  // Change the image to reflect the ransomly chooses image
  // Would normally use northShoreImage, but it is local scope inside the function.  Use "this" instead.
  this.src = "images/northShore/pic" + pics[randomIndex] + ".jpg";
  
  // Change the caption on mouseover as well.
  picCaptions[0].innerHTML = captions[randomIndex];
  
  // Change class name to add filter effects
  this.className = "contrast";
  
  //this.className += " invert";
  this.className += " sepiaBlur";
  
};



NorthShore.resetImage = function() {
  
  this.src = "images/northShore/pic" + pics[0] + ".jpg";
  
  picCaptions[0].innerHTML = captions[0];
  
  this.className = '';
}



// Generate a random number between a passed-in min and max value
//
NorthShore.randRange = function(min, max) {
  
  return Math.floor(Math.random() * (max - min) + min);  // Truncates the number 3.7 would be 3. Always returns an integer.  Math.random will only be between 0 & .9999999
}



NorthShore.slideShow = function() {
	
	
	// Do the image rollover
	timedImage.src = "images/northShore/pic" + pics[NorthShore.imageCounter] + ".jpg";
		
	picCaptions[1].innerHTML = captions[NorthShore.imageCounter];

/*	if (NorthShore.imageCounter < pics.length -1) {
		NorthShore.imageCounter++;
		
	}else {
		NorthShore.imageCounter = 0;
	}*/
	
	// Loop in one line... 
	NorthShore.imageCounter = (++NorthShore.imageCounter) % pics.length;
	
	// Keep calling slideshow() every 2 seconds for 
	// as long as the user is on the page (heartbeat or ticker)
	setTimeout(NorthShore.slideShow, 1000);	
		
}


