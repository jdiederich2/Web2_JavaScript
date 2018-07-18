$(function() {
	
	var $loginPanel = $('#loginForm_wrap');
	
	// $loginPanel.css('display', 'none');  Could ue, something better
	$loginPanel.hide();
	
	// Set up clickability on our login button
	// and toggle sliding open or closed our login form 
	// based on the current state.
	$('#loginHook').click(function() {
		
		// Toggle the login form panel open/closed
		$loginPanel.slideToggle();
		
		// Prevent the browser's default action of
		// following the link
		return false;
		
		// Or... 
		/*$('#loginHook').click(function(e) {
		
		// Toggle the login form panel open/closed
		$loginPanel.slideToggle();
		
		// Prevent the browser's default action of
		// following the link
		e.preventDefault();*/
		
	});
	
});