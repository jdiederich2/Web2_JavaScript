// Could do this way.... 
/*$(document).ready(stuff);  		// api.jquery.com


function stuff() {
	// Do some stuff
}*/

/*stuff = function() {
	// Do some stuff
}*/


// More common way... Annonymous function

$(document).ready(function() {
	
	// our app's code will go in here
	// Select and put the reference in a jquery object
	$soldierPic = $('#pic');
	
	// fade the image to 15%
	$soldierPic.fadeTo(3000, .15, 'easeOutBounce')
	
	// On hover, fade image to full opacity
	//
	// On hover off, fade back to 15% opacity
	//
	$soldierPic.hover(function() {
		
		// Hover Over
		$(this).stop().fadeTo('slow', 1);
		
	}, function() {
		
		// Hover Off
		$(this).stop().fadeTo('normal', .15);
		
	});
	
});  		

	




function stuff() {
	// Do some stuff
}

/*stuff = function() {
	// Do some stuff
}*/