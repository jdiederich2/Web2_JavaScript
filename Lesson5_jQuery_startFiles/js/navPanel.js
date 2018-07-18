$(function() {
	
	var hoveredOverLinkWithTab;
	
	// On hover, change the associated text and polaroid image to correspond
	// to the hoverd over link
	$('#nav > li').hover(function() {
		
		// Hover over (mouseEnter)
		//$('.tabDesc').hide();		// Hides all of the tab info, whether hidden or not
		$('.tabDesc:visible').hide();		// Hides only the visible one
		
		// Show the new image and text
		// Gets the id of the a tab for the hovered over li and appended Tag.
		hoveredOverLinkWithTab = $(this).children('a').attr('id') + 'Tab';
		
    //console.log(hoveredOverLinkWithTab);
		// Selecting div by built id and fading in
		$('#' + hoveredOverLinkWithTab).stop().fadeIn(1000);
		
	}, function() {
		
		// Hover off (mouseLeave)
		$('#' + hoveredOverLinkWithTab).hide();
		
		// Show the original
		$('#defaultTab').stop(true, true).fadeIn(5000);  // True true, clears cue and jumps to the end.  Shows fadein.
		
	});
	
	
	
});