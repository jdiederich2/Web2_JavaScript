function init() {
  
  // alert("All your base are belong to us");
  
  var DomAccess = {
    
    exampleProperty: 70,
    
    doStuff: function() {
      
      // Get a reference to div#quoteToday
      //var quoteToday = document.getElementById('quoteToday');  // quoteToday becomes the object... in this case the div.  reference to a tag object, we then have access to all of its properties. Any html attributes that tag can have we now have access to.
      
      var quoteToday = document.querySelector("#quoteToday");
      
      console.log('tagname is ' + quoteToday.nodeName + ' and its id                 value is ' + quoteToday.id);
      
      // Add a class of "sasquatch" to div#quoteToday (which is our variable)
      quoteToday.className = "sasquatch";     // Creates a class attribute on the fly.  Will never show in the html.  Can inspect live html to see. 
      
      // dynamically change some styles for this div
      quoteToday.style.color = "navy";
      quoteToday.style.backgroundColor = 'rgba(180, 180, 180, .5)';  // Inline styles
      quoteToday.style.borderLeft = '1px solid #76623C';
      quoteToday.style.borderTopLeftRadius = '8px';
      
      // Get references  to any <h4> tags inside div#quoteToday
      //var quoteTodayH4s = quoteToday.getElementsByTagName("h4"); // element.getElementByTagName  Creates a list that contains a list of elements
      var quoteTodayH4s = document.querySelectorAll("#quoteToday h4"); // element.getElementByTagName  Creates a list that contains a list of elements
      
      quoteTodayH4s[0].style.fontFamily = "Papyrus";
      
      //
      // Replace soldier image on page with new image
      // image rollover
      //
      
      var soldierPic = document.querySelector("#pic");  //it is now that image object
      
      soldierPic.src = "images/pics/frenchBugler.png";     
      
      //
      // Style the navigational list items (links)
      //
      // Get a node list of references to all the <li>
      //
      // var ulNav = document.querySelector('#nav');
      // var navList = ulNav.getElementByTagName('li');
      
      // Could combine the previous two statements into one 
      // by doing this.
      // var navList = 
      // document.querySelector('#nav').getElementsByTagName('li');
      
      
      var navList = document.querySelectorAll("#nav > li");
    
      for (i = 0; i < navList.length; i++) {
        
        navList[i].style.backgroundColor = 'rgba(118, 98, 60, .15)';
        navList[i].style.borderRadius = '6px';
        navList[i].style.paddingTop = '4px';
        navList[i].style.position = 'relative';
        navList[i].style.top = '-4px';
      }
      
      // change the "- French historian" text to
      // " - Michael Howard" where "Michael Howard"
      // text should be an email link to mhoward@oxford.uk
      //
           
      
      var historian = document.querySelector('#historian');
      historian.innerHTML = " - ";
      
      
       // Create an email link
      // <a href="mailto:mhoward@oxford.uk">Michael Howard</a>
      
      // Step 1: Create new tag (element) in creating a new tag (element) via JavaScript
      var emailAddress = document.createElement('a');
      
      // We now have <a></a>
      // Note: this tag is not yet attached to the DOM for this page.
      
      // Step 2:  Add any attributes we need to the new tag
        // option 1 - Official Standard
      // emailAddress.setAttribute('href', 'mailto:mhoward@oxford.uk');
      
        // option 2
      emailAddress.href = 'mailto:mhoward@oxford.uk';
      
      // Step 3:  Add the content to the tag - Official Way
      var emailText = document.createTextNode('Michael Howard');
      
      // Step 4: Connect our text node to our <a> tag
      // parent.appendChild(child);
      emailAddress.appendChild(emailText);
      
      // We now have <a href="mailto:mhoward@oxford.uk">Michael Howard</a>
      
      // We could have done the 2 previous steps (3 & 4), in one statement like this:  
      // emailAddress.innerHTML = 'Michael Howard';
      
      
      // Step 5: Connect new tag to the DOM
      historian.appendChild(emailAddress);
      
      emailAddress.style.color = '#524b31';
      
      
      // 
      // Create the following struture and prepend it before header#top
      //
      // <div class="loginTab">
      //      <p><a id="loginHook" href="#">Client Login</a></p>
      // </div>
      //
      
      var wrapperDiv = document.querySelector('#wrapper');
      var headerTop = document.querySelector('#top');
      
      var loginTabDiv = document.createElement('div');
      var paragraph = document.createElement('p');
      var loginLink = document.createElement('a');
      
      loginTabDiv.setAttribute("class", "loginTab");
      loginLink.id = "loginHook";
      loginLink.href = "#";
      
      // Long way to create textNode and add to parent
      // var textContent = document.createTextNode('Client Login');
      // loginLink.appendChild(textContent);
      
      // Quick way
      // loginLink.appendChild(document.createTextNode('Client Login'));
      
      // Short cut way
      loginLink.innerHTML = 'Client Login';
      
      
      // Connect them all together
      
      // Connect <a> tag as child of <p> tag
      // parent.appendChild(child);
      paragraph.appendChild(loginLink);
      
      // Connect <p> tag as child of <div> tag
      loginTabDiv.appendChild(paragraph);
      
      // Make all part of the div
      // Prepend this structure above header#top
      // parent.insertBefore(newNode, followingSibbling);
      wrapperDiv.insertBefore(loginTabDiv, headerTop);     
      
    }    
    
  }; 
  
  console.log('DomAccess.exampleProperty = ' + DomAccess.exampleProperty);
  
  DomAccess.doStuff();
}