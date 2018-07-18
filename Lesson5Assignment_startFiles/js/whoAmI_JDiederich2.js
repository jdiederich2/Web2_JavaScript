$(document).ready(function() {	
	
	var $whoAmIPic = $('#whoAmI');
	var $mysteryPanel = $('#mysteryPanel');
	
			
	$whoAmIPic.hover(function() {
			// Hover over	
		$(this).add('#whoAmIText').stop().fadeTo('slow', 1);		
		
	}, function() {		
			// Hover Off		
		$(this).add('#whoAmIText').stop().fadeTo('slow', .4);
			
		}).click(function() {
			var effect = 'slide',
				options = {direction: 'right'},
				duration = 200;

			$mysteryPanel.toggle({effect, options, duration}).animate({width: 307});
		});	
	
	var h3WhoAmIText = $mysteryPanel.children('h3');
	
	h3WhoAmIText.click(function() {

		$('#silhouette').fadeOut(5000);
		$('#revealed').delay(3000).fadeIn(1000, function(){

			h3WhoAmIText.text("Marechal Patrice MacMahon").css('cursor','default');
			
		});

	});
							
});
	
							
	

