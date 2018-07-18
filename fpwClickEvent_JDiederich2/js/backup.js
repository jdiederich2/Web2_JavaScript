var ImagePicker = {
  
  // Create init method of imagePicker Object 
	init : function() {    
    imagePic = document.querySelector('#pic');
    
    var imageTabsDiv = document.querySelector("#imageTabs");
		
    var imageTabsList = imageTabsDiv.getElementsByTagName('img');
		
    for(i = 0; i < imageTabsList.length; i++) {         
      imageTabsList[i].onclick = ImagePicker.imageTabClick;
    }
		
		var randomPic = ImagePicker.randRange(1, imageTabsList.length);
		imagePic.src = imageTabsList.getAttribute('longdesc');
  }
};

  
ImagePicker.imageTabClick = function() {	
  var imgPath = this.getAttribute('longdesc');	  
  imagePic.src = imgPath;	
};

ImagePicker.randRange = function(min, max) {  
  return Math.floor(Math.random() * (max - min) + min);  
}
  

Core.start(ImagePicker);
  
















