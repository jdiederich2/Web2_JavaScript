function gallery() {

var allH2s = document.querySelectorAll("h2"),
    firstH2 = allH2s[0];

  //
  // H2 text effect annimation
  //
  // Get h2's content as a string value and break it up into indevidual 
	// characters
  // storing them in an array.

  var h2Chars = firstH2.innerHTML.split("");
  console.log("h2Chars = " + h2Chars + "\n Number of chars = " + h2Chars.length);


  // Create an instance of the TimelineMax class call charTimeline
  var charTimeline = new TimelineMax({
      repeat: 2,
      repeatDelay: 0.4,
      yoyo: true

  });

  firstH2.innerHTML = "";		// Emptied our first H2 - Want it to go away since we already have content in array by split above.

  // Annimate h2Chars with TimelineMax as we step through it automatically runs func
  h2Chars.forEach(function(charValue, index) {

    // In here, work with our individual element (character from our h2)
    // using <span> tags that we will create and insert each character into
    if (charValue == " ") {
        charValue = '&nbsp;'		// Replacing empty space with one the brouwser will recognize
    }

    // Create our span and give id of 'txt#' where # will be a unique 
    // number - Creates element and reerence.
    letterSpan = document.createElement('span');
    letterSpan.id = 'txt' + index;
    // Formal way letterSpan.setAttribute('id', 'txt' + index);

    letterSpan.innerHTML = charValue;  // Adds text value

    // Attach new span to the DOM as a child of our first h2.
    firstH2.appendChild(letterSpan);

    // Tween the Timeline to animate our individual character (<span>)
    charTimeline.to(letterSpan, 1, {
      rotationX: 360,
      rotationY: 360,
      textShadow: '0 0 1px #ddd',
      color: "none",
      autoAlpha: 1,
      ease: Back.easeOut,  // speed>  start fast, slow out
      transformOrigin: '50% 50% -20'
    }, index * 0.05);		

  });

  // Animate our thumbnail images into place
  thumbs = document.querySelectorAll('.thumbnails > img');

  // Set up a timelineLite object
  var staggerTimeLine = new TimelineLite();
  
  // Produce a whizbang effect for animating our thumbnails into place
  // using staggering.
  staggerTimeLine.staggerFrom(thumbs, .5, {
    opacity: 0,
    top: '-12.5rem',
    left: '-=3.125rem',      // -= Subtract progressivly
    rotation: '-45deg',
    ease: Back.easeOut
  }, 0.2).to(thumbs, .5, {
    opacity: .4,
    onComplete: onCompleteThumbSetup
  });
  
  


}


function onCompleteThumbSetup() {
  
  for(var i = 0; i < thumbs.length; i++) {
    
    thumbs[i].addEventListener('mouseover', hoverOver);
    thumbs[i].addEventListener('mouseout', hoverOff);
    thumbs[i].addEventListener('click', showPainting);
  }
}


function hoverOver() {
  // console.log("hoverover");
  TweenLite.to(this, .1, {scale: 1.05, alpha: 1})
}


function hoverOff() {
  // console.log("hoveroff");
  TweenLite.to(this, .1, {scale: 1, alpha: .4})
}


function showPainting() {
	
	var captions = document.querySelectorAll("p.picTitle");  
  var painting = document.querySelector("#photo1"), 
      currentCaption;
	// replace large image with one corresponding to the click 
	// thumbnail
  //  painting.src = 'images/' + this.id + '_1000px.jpg';
  
  
  
  // Option 1 - use the browser's innerWidth(viewport) property to choose // the correctly sized image.
  // In the Responsive design mode, changing to a different image size 
  // does not automatically reload proper image size until a different 
  // thumbnail is clicked.
  
 	// painting.srcset = '';
	// correctly sized image.
	//  if (window.innerWidth < 768) {
	//    painting.src = 'images/' + this.id + '_300px.jpg';
	//  } else if (window.innerWidth < 1000) {
	//    painting.src = 'images/' + this.id + '_800px.jpg';
	//  } else {
	//    painting.src = 'images/' + this.id + '_1000px.jpg';
	//  } 
  
  
  // Option 2 - reset srcset to proper list of images...
  // In the Responsive design mode, changing to a different image size 
  // does not automatically reload proper image size AND also does it
  // automatically when orientation is change causes different image  
  // until a different image size to be needed.

  
  painting.src = 'images/' + this.id + '_1000px.jpg';
  
  painting.srcset = 'images/' + this.id + '_300px.jpg 414w, images/' + this.id + '_800px.jpg 800w, images/' + this.id + '_1000px.jpg 1000w';
  
  /*srcset="images/4_300px.jpg 414w, images/4_800px.jpg 800w, images/4_1000px.jpg 1000w"*/
	
	// Ensure the correct caption is showing for the new large painting.
	//
	// Hide the current caption so we can display the new one.
	for(var i=0; i<captions.length; i++) {
		captions[i].style.display = "none";
	}
  
	
	// Show the new caption that is related to the new painting
	currentCaption = document.querySelector('#picCaption' + this.id);
	currentCaption.style.display = "block";
	currentCaption.style.opacity = 0;
	
	// Fade in new caption
	TweenLite.to(currentCaption, 4.2, {alpha: 1, ease: Bounce.easeOut});
	
	// console.log("path = " + painting.src);
	
	// Animation 
	TweenLite.fromTo(painting, 1.2, {
		alpha: 0, 
		transformPerspective: 200,
		rotationX: 120,
		z: -300,	// away from you, in the distance
		transformOrigin: "50% 0%"	// pivit point first horizontal, 2nd top edge		
	}, {
		alpha: 1,
		transformPerspective: 1000,
		rotationX: 0,
		z: 0,
		transformOrigin: "50% 0%",
		ease: Bounce.easeOut
	});
  
  
  }


















