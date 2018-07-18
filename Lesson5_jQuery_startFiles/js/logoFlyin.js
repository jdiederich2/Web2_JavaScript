//  $(document).ready(function)) {});  Long way to 
$(function() {
	
	$logoPic = $('#logo1870');
	
	// Reposition the logo image
	$logoPic.css({
		opacity: 0,
		position: "relative",
		left: -300,
		zIndex: 2
		
	}).animate({
		opacity: 1,
		left: 510
	}, 2500, 'easeOutElastic', function() {
		
		$(this).fadeTo(2000, .5)
					 .rotate({
							duration: 2000,
							angle: 0,
							animateTo: 720,
							center: ["50%", "50%"]
			
					 });
		
	}).rotate({
			duration: 2500,
			angle: 0,
			center: [50, 50],
			animateTo: -360
	});
	
});