/*
console.log("Hello from Bigfoot! - I am real.");

var bigfootName = prompt('What is your favorite name for Bigfoot?', 'Sasquatch');

document.write("That's classic juvenile       " + bigfootName + " behavior");

var num1 = Number(prompt("Please enter a positive number", 10));

// 
// Test if num1 is really a positive number
//
while (isNaN(num1) || num1 < 0) {
    num1 = Number(prompt("Please enter a positive number", 10));
}


var num2;

do {
    num2 = Number(prompt("Please enter a positive number", 10));
} while (isNaN(num2) || num2 < 0);



document.write('<br>');

if (num1 > num2) {
    document.write(num1 + ' is greater than ' + num2 + '<br><br>');
} else if (num1 < num2) {
    document.write(num1 + ' is less than ' + num2 + '<br><br>');
} else {
    document.write(num1 + ' is equal to ' + num2 + '<br><br>');
}


//
// for loop example
//
// for (initializer; test; increment) {}
for (var i = 0; i <= num2; i++) {
    
    // display i if it is an even number
    if (!(i % 2)) {
        document.write('<br> i contains ' + i);
    }
    
}



//
// Arrays in JavaScript
//
// Create an empty array object
//var creatures = [];
var creatures = new Array();

var critter = 'Kushtaka';

creatures = ['Bigfoot', 'Sasquatch', 'Yeti', 'Manbear Pig', 'Abombinable Snowman', 'Skunk Ape'];

creatures[creatures.length] = 'Grassman';

creatures.push('Rugaroo', critter, 'Cheese Monkey');

document.write('<h2 style="color: yellow">There are ' + creatures.length + ' names for Bigfoot</h2>');

document.write('<ul>');

for (var i = 0; i < creatures.length; i++) {
    document.write('<li>' + creatures[i] + '</li>');
}

document.write('</ul>');



// 
// Associative Arrays (Dictionaries/Hashes)
//
var zipCodes = [];

zipCodes['Strum'] = 54770;
zipCodes['Menomonie'] = 54751;
zipCodes['Green Bay'] = 54304;
zipCodes['Altoona'] = 54720;
zipCodes['Elk Mound'] = 54739;
zipCodes['Deforest'] = 53532;
zipCodes['Virginia Beach'] = 23511;

document.write(zipCodes['Strum']);

document.write('<ul>');

for (city in zipCodes) {
    document.write('<li>The zip code for ' + city + ' is ' + zipCodes[city] + '</li>');
}

document.write('</ul>');

*/


//
// Object Literal {} - Objects made of properties (3 types: methods/functions, variables, object - child of object, events)
//

var Baseball = {  // This creates an object literal, property definitions go inside.

	// We need to use object literal syntax
	// propertyName : value, 
	//         	.
	//         	.
	//         	.
	// propertyName : value


	playerName : "Casey",    // : is the assignment operator.
	
	battingAverage : function(numHits, numAtBats) {   // Assigning the function to the Name
		
	// Parameters must be variables, formal parameters
	
	// interprelation: when a variable gets replaced by its value
	
	// values can be: literal, vairables, expression, function call
		
		return numHits / numAtBats;		
		
	},
	
	bat : {				// object literal
		material : 'Maple',			// variable, but really an object of String
		swing : function() {},
		type : {								// object literal
			genre : 'Softball'
		}
	}			
		
		
};

// Syntax for property access is object.property
Baseball.playerName = "Kirby Puckett";

//alert(Baseball.bat.type.genre);

// Call the swing method
// Baseball.bat.swing();

// Call the batting average
//alert(Baseball.battingAverage(200, 800));


//
// Function
//
var numAtBats,
		numberOfHits,
		formatAverage = function(battingAverageString) {
			
			return battingAverageString.replace(/^0/,'');  // Replaces the leading zero with nothing.  Deletes the zero.  Returns the modified string.  Copies the variable and modifies it.
			
		},		
		playerName = prompt('Enter a player name : ', 'Casey');


do {
	numAtBats = Number(prompt('Number of at-bats:', 1));
	
} while(isNaN(numAtBats) || (parseInt(numAtBats) != parseFloat(numAtBats)) || numAtBats <= 0);
				
				
do {
	numberOfHits = Number(prompt('Number of hits:', 1));
	
} while(isNaN(numberOfHits) || (parseInt(numberOfHits) != parseFloat(numberOfHits)) || numberOfHits < 0 || numberOfHits > numAtBats);
				
				
// We now know that we have a valid number of at bats and hits
document.write('<h2>' + playerName + "'s batting average is " + formatAverage(String(battingAverage(numberOfHits, numAtBats).toFixed(3))) + '</h2>');


//
// Definition of the battingAverage function
//

function battingAverage(numHits, numAtBats) {  // Paramater values are always local to the function only
	
	return numHits / numAtBats;
	
};


/*
Also could have done the above definition like this....
// Semi-colon used for asisgnment functions.

var battingAverage = function(numHits, numAtBats) {

};


*/





