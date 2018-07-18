var ImagePicker = {
  
  // Create init method of imagePicker Object 
	init : function(showRandomImage) {    
		
		
    imagePic = document.querySelector('#pic');
    
    var imageTabsDiv = document.querySelector('#imageTabs');
		
    imageTabsList = imageTabsDiv.getElementsByTagName('img');
		
    for(i = 0; i < imageTabsList.length; i++) {         
      imageTabsList[i].onclick = ImagePicker.imageTabClick;			
    }
		
		ImagePicker.imageTabClick = function() {	
			imgPath = this.getAttribute('longdesc');	  
  		imagePic.src = imgPath;	
		};
		
		ImagePicker.showRandomImage = function(e) {	
			var randomNumber = ImagePicker.randRange(1, imageTabsList.length);
			imagePic.src = imageTabsList[randomNumber].getAttribute('longdesc');	
		};
		
		ImagePicker.randRange = function(min, max) {  
  		return Math.floor(Math.random() * (max - min) + min);  
		};
		
		ImagePicker.showRandomImage();

  }
	
};
  

Core.start(ImagePicker);
  
















