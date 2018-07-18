var myDOMAccess = {

	 init : function() {
	
		// Try these out by uncommenting them, then comment them again
		//alert(document.getElementById("wrapper").getElementsByTagName('div')[0].nodeName);
		//alert(document.getElementById("wrapper").getElementsByTagName('div')[0].id);
		
		// ****************************************************************
		//
		// Lesson3 - project Assignment - Document Access
		//
		// ****************************************************************
		
		
		// ****************************************************************
		//
		// Add 1, 2, 3, and 4 tab button images to left of soldier pic.
		//
		// ****************************************************************
		
		// Create div#imageTabs using the setAttribute() method to set the 'id' attribute
		// - store the reference to div#imageTabs in a variable named imageTabsDiv
     
     var primaryContainer = document.querySelector('primaryContainer');
     var primaryContent = document.querySelector('primaryContent');

          
     var imageTabsDiv = document.createElement('div');
     
     imageTabsDiv.setAttribute("id", "imageTabs");
		
		
		
		// Create four images that display the following images from the 
		// images/pics folder: imageTab01.png, imageTab02.png, imageTab03.png,
		// and imageTab04.png.  Store the references to the new image elements
		// in variables named tab01, tab02, tab03, and tab04.
		//
		// Use the shorthand way accessing the attribute
		// as an object property to set the 'src' attribute for each image.
		//
		// Following each image tag, create a <br> tag.
     
     // <img id="logo1870" src="images/logo.png" alt="1870 Logo">
     
     var tab01 = document.createElement('img');
     tab01.src = "images/pics/imageTab01.png";
     var brTag1 = document.createElement('br');
     
     var tab02 = document.createElement('img');
     tab02.src = "images/pics/imageTab02.png";
     var brTag2 = document.createElement('br');
     
     var tab03 = document.createElement('img');
     tab03.src = "images/pics/imageTab03.png";
     var brTag3 = document.createElement('br');
     
     var tab04 = document.createElement('img');
     tab04.src = "images/pics/imageTab04.png";
 
		
		
		
		// create a reference to a <br> tag - note that you will need to 
		// consider creating more than one reference here...
     

     
     
		
		
		
		// append these tab images and br's to div#imageTabs
     imageTabsDiv.appendChild(tab01);
     imageTabsDiv.appendChild(brTag1);
     imageTabsDiv.appendChild(tab02);
     imageTabsDiv.appendChild(brTag2);
     imageTabsDiv.appendChild(tab03);
     imageTabsDiv.appendChild(brTag3);
     imageTabsDiv.appendChild(tab04);
		
		
		
		// Get a reference to div#primaryPic and name it primaryPic
		var primaryPic = document.querySelector('#imageTabs');
		
		// Add div#imageTabs as a child of div#primaryPic
		document.getElementById("primaryPic").appendChild(imageTabsDiv);
		
		// Position div#imageTabs as shown in the video using absolute positioning
		// - dynamically alter this element's styles to do this
		
     
    imageTabsDiv.style.position = 'absolute';
    imageTabsDiv.style.top = '35px';
    imageTabsDiv.style.left = '-25px';

		
		
		
		// ****************************************************************
		//
		// Replace the polaroid image with the images/navPhotos/theArt_polaroidSmall.png
		//
		// ****************************************************************
		//document.getElementById("wrapper").getElementsByTagName('div')[0].nodeName;
     
		// In one statement, get a reference to img tag (store in variable named polaroid)     
     
		// inside div#defaultTab using the getElementsByTagName() method.
     

		
     var polaroid = document.getElementById("defaultTab").getElementsByTagName("img")[0];
		
		// Display the polaroid's tagname in an alert dialog window - hint: use the 
		// nodeName property of the element object to get this.
     
     
     alert(polaroid.nodeName);
     
		
		
		// Replace the current image with the 'theArt_polaroidSmall.png' image using
		// the src property shortcut
     
     polaroid.src = "images/navPhotos/theArt_polaroidSmall.png";
		 
		
		
		
		// ****************************************************************
		//
		// Change the styles applied to the <p> tags within div#motd as shown
		// in the specs video.
		//
		// The styles you should be changing dynamically through your
		// JavaScript code for each selected <p> tag will be: 
		//		background   (set background image to images/pBackground.png)
		//		color
		//		border-radius
		//		padding
		//		text-shadow
		//
		// Look carefully at the specs video and/or provided screenshot
		// and try to match your style values to create what you see.  Don't
		// worry too much about being 1px off here and there as long as your
		// output is very close to what you see in my output examples.
		//
		// ****************************************************************
		
		// get a reference to div#motd and store in motdDiv
		 
		 var motDiv = document.querySelectorAll("#motd > p"); 
		
		
		// get a nodelist of references to the <p> tags within div#motd - store in pList
		

		// step through the p's nodelist and change the forementioned styles on 
		// each p element in div#motd - use a for loop to do this
		
		for (i = 0; i < motDiv.length; i++) {
			
			motDiv[i].style.backgroundImage = "url('images/pBackground.png')";
			motDiv[i].style.color = '#E0F2F7';
			motDiv[i].borderRadius = '8px';
			motDiv[i].style.padding = '1.5px';
			motDiv[i].style.textShadow = "1px 1px 1px #000, 1px 1px 1px #fff";
		}
		
		
		
		
		// ****************************************************************
		//
		// Change the copyright symbol "2012 Jon Cooley" text into copyright symbol 
		// "2012 Yournamehere" where "Yournamehere" should be an email link to 
		// your email address (replace "Yournamehere" with your name :-)
		//
		// ****************************************************************
		
		// store reference to span#copyRight in variable named copyRight
		

		// Create a new email anchor element with appropriate href attribute placing
		// your name as its text content - store reference to new tag in variable 
		// named emailAddress
		
		

		// create Name text content inside link (text node) storing reference in emailText
		

		// replace span tag's content with just the "'copyright symbol here' 2013 "
		

		// place link text content in the <a> tag
		

		// append email address at end of <span>'s content
		
		
	
	}	// end init() method

};

// run myDOMAccess's init() method after this page's content has
// finished loading - don't forget to put the correct object in the start() method's ()'s below
//myDOMAccess.init();
Core.start(myDOMAccess);