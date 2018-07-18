;(function($, window, undefined) {  // 3 variables  (;) before makes sure that the last statement of the previous file is ended. Not required.  function is enclosed in () to encapsulate the function.  Also called a closure.  All code must be passed in and can't be touched.  window object stored in local variable window. for performance gain. Runs faster than global. Undefined as a 3rd parameter is ensureing that undefined really means null by passing nothing to it.
    
    'use strict'
    
    var Modernizr = window.Modernizr
    
    //
    // Constructor function for $.ContentSlider class
    //
		// This is how you create a clasee... upper case
		$.ContentSlider = function(options, contentSliderElement) {
			
			// contentSliderElement is a reference to our div#contentSlider tag
			// make parameters properties of the object so they are available outside
			// this function  make $sliderElement element that contains
			// contentSliderElement
			
			//$.ContentSlider.$sliderElement = $(contentSliderElement); Same as below
			// in the context of a constructor function, the this keyword automatically 
			// refers to the newly constructed object.
			this.$sliderElement = $(contentSliderElement);
			this._init(options);
		}
		 
    
    
    
    // Setting up default values for our plugin's options for this class
		// States default is a property of ContentSlider which is a property o jquery.
    $.ContentSlider.defaults = {
				speed: 500,
				easing: 'ease-in-out',
				current: 0			
		}; 		
    
    
    // Define our new object's methods using the prototype 
    // property...  Prototype makes only one instance be store in memory versus all instances. Do not need if you know only one or 2 instances will ever run.
    $.ContentSlider.prototype = {
			
			_init: function(options) {
				
					// mergedOptions is now an object with user passed options
					this.mergedOptions = $.extend(true, {}, $.ContentSlider.defaults, options);
				
					// find and hide all <li> that are direct children of any 
					// ul decendents of div#contentSlider storing them 
					// in a property $items.
					// Can now access all li's by this.$items
					
					this.$items = this.$sliderElement.find('ul > li').hide();
					
					// find all <a> tags that are direct children of 
					// descendent <nam> tags of div#contentSlider
					this.$tabs = this.$sliderElement.find('nav > a');
					
					// store the total number of navigational links <a> 
					this.tabsCount = this.$tabs.length;
					
					// set each tab's width to be equal
					this.$tabs.css('width', 100/this.$tabsCount + '%');
					
					// grab the index of the <li> that should be initially shown.
					this.current = this.mergedOptions.current;
					
					// alert("number of tabs = " + this.tabsCount + "\nstarting index = " +
					//		 this.current);
					
					// Image that was showing for carousel
					this.oldIndex = 0;
					
					// Check if an animation of any <li> is currently in progress.
					this.isAnimating = false;
					
					this.support = Modernizr.csstransitions;
					
					// Need to do because of laging browser support (browser prefix)
					var transEndEventNames = {
							'WebkitTransition': 'webkitTransitionEnd',
							'MozTransition': 'transitionend',
							'transition': 'transitionend'
					};
					
					// All objects in javascript are treated as arrays
					this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.contentSlider';
						
					// if the user's browser supports CSS3 transitions, set
					// the transions for the <li> items
					if (this.support) {
							
							// Any time this value changes, this takes effect
							this.$items.css('transition', 'left ' + this.mergedOptions.speed + 'ms ' + this.mergedOptions.easing);
							
					}
					
					// Calling functions at the end of init, defining at the bottom
					
					// Update the current tab to have a class of 'rc-active' added
					// and remove this same class from the previous active tab.
					this._updateTabs();
					
					// Show the <li> that is at the current index
					this.$items.eq(this.current).show();
					
					// Set up events for the tabs
					this._initEvents();
			},
				
			//	init called by constructor, init now calling _updateTabs
			_updateTabs: function() {
					
					// remove the rc-active class from the previously active tab
					// and  add it to the new one.  Eq filters the node list to one element. // End gives you back the original node list.
					this.$tabs.eq(this.oldIndex)
										.removeClass('rc-active')
										.end()
										.eq(this.current)
										.addClass('rc-active');
			},
				
				_initEvents: function() {
						
						// Make a copy of this, which points to our new $.contentSlider object
						// so when it changes we can still access our new object.
						// creates variable to access objects out side of function
						var self = this;
						
						// make click only work in certain namespace of plugin method
						this.$tabs.on('click.contentSlider', function(e) {
								
								// function to be executed when they click any of the matched elements in $tabs.  Loop behind the sceens.
								// since we are now inside an event handler function, 
								// the context of the this keyword has changed.
								
								// get the index of the <a> tag that was clicked.
								var clickedIndex = $(this).index();
								
								// alert('clickedIndex = ' + clickedIndex);
								
								// If the clicked tab is not already the active tab
								// AND the related <li> is NOT currently being animated...
								if (clickedIndex != self.current && !self.isAnimating) {
										
										// So, let's start animating our new slide into place
										self.isAnimating = true;
										
										// Determine the direction to slide
										// Sames as saying... if index is greater than self.current then set current to right, else left.
										
										
										var direction = clickedIndex > self.current ? 'right' : 'left',
												$oldItem = self.$items.eq(self.current),
												$newItem = self.$items.eq(clickedIndex);
												
																	
										// UPdate the old and current index properties
										self.oldIndex = self.current;
										self.current = clickedIndex;
										
										// Apply the initinal style for the CSS 'left' property if 
										// transitions are supported by the user's browser
										// ternary operator... direction....to end. shortcut to if/else statement.
										
										// Doesn't show anything yet as we just moved it out of the screen either to
										// the right or the left.  Still need to slide
										if (self.support) {
												$newItem.css('left', direction === 'right' ? '100%' : '-100%');
										}
										
										
										// Slide the <li> corresponding to the clicked tab
										$newItem.show();
										
										// Bind the transition end event
										var transitionEndFunc = function() {
												$oldItem.off(self.transEndEventName).hide(); // Clean up
												self.isAnimating = false;												
										}
										
										if (self.support) {
												
												$oldItem.on(self.transEndEventName, transitionEndFunc);
										
										} else {
												transitionEndFunc.call();  // Just incase they don't have good browser		
										}
										
										if (self.support) {
												
												// Use a timer to run code after a slight delay
												setTimeout(function() {
														
														// Slide the old item out (<li>) 
														$oldItem.css('left', direction === 'right' ? '-100%' : '100%');
														
														// Slide the new item in
														$newItem.css('left', 0);
												}, 25);
										}
										
										self._updateTabs();
										
								}
								
								e.preventDefault();								
								
						});
				}
			
		};
	
		// $.ContentSlider._init = function() {}; same as above with prototype. 
		// this makes ALL instances be stored in memeory.
    
    
    // Our plugin method definition
    $.fn.contentSlider = function(options) {
        
        if (typeof options === 'string') {
					
					// Our object is not a string so it will jump to the else
            
            // ... other code here ...
            
        } else {  // options is not a string (usually is an object)
            
            // In jquery plugin method definition, unless later changed 
						// the this keyword refers to the jquery object this plugin method
						// was called on.  Here, this is a jquery object containing 
						// div#contentslider.
            this.each(function() {		// each is a jquery method
                
                // Inside an each() function, the context of this changes.
								// this now refers to the DOM element the function is run on.
								// in our case this is now div#contentSlider - not jquery like
								// above.
                var instance = $.data(this, 'contentSlider');  // Casuing to go to DOM an see if variable is stored with it named contentSlider
                
                if (instance) {
                    instance._init();
                } else {
                  
									// Call our plugin object's constructor function
									// Creates local datastore in html element and add contentSlider, new keywork is always a contructor function that returns an object. New instance of the content slider class. 
									instance = $.data(this, 'contentSlider', new $.ContentSlider(options, this));  // Need to build this class. Passing option passed to our function method. In our case speed and current from HTML.  this refers to the DOM element. Closest enclosing function is the each function.
                }
                
            });
            
        }
        
        // make our new method chainable
        return this;  // this refers to $('div#contentSlider')
        
    };
    
})(jQuery, window);  // Parameter list passed in.


/*
template Base content for all jquery plugins

;(function($, window, undefined) {
    
    'use strict'
    
    var Modernizr = window.Modernizr
    
    //
    // Constructor function for $.ContentSlider class
    //
    
    
    
    // Setting up default values for our plugin's options for this class
    
    
    
    // Define our new object's methods using the prototype 
    // property...
    
    
    
    // Our plugin method definition
    $.fn.contentSlider = function(options) {
        
        if (typeof options === 'string') {
            
            // ... other code here ...
            
        } else {  // options is not a string (usually is an object)
            
            // here, this refers to the 
            this.each(function() {
                
                // now, this refers to the 
                var instance = $.data(this, 'contentSlider');
                
                if (instance) {
                    instance._init();
                } else {
                  
                    // Call our plugin object's constructor function
                    
                }
                
            });
            
        }
        
        // make our new method chainable
          // this refers to $('div#contentSlider')
        
    };
    
})(jQuery, window);

*/